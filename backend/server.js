import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, 'data', 'db.json');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Helper function to read from DB
function readDB() {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database file:', error);
    return { questions: [], participants: [] };
  }
}

// Helper function to write to DB
function writeDB(data) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing to database file:', error);
  }
}

// Ensure DB directory and file exist
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}
if (!fs.existsSync(DB_PATH)) {
  writeDB({ questions: [], participants: [] });
}

// --- API Routes ---

// Get all questions
app.get('/api/questions', (req, res) => {
  const db = readDB();
  res.json(db.questions || []);
});

// Add a question
app.post('/api/questions', (req, res) => {
  const { type, questionText, options, correctAnswer } = req.body;
  
  if (!type || !questionText || !correctAnswer) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const db = readDB();
  const newQuestion = {
    id: 'q_' + Date.now(),
    type,
    questionText,
    options: type === 'multiple-choice' ? (options || []) : [],
    correctAnswer: correctAnswer.trim()
  };

  db.questions = db.questions || [];
  db.questions.push(newQuestion);
  writeDB(db);

  res.status(201).json(newQuestion);
});

// Update a question
app.put('/api/questions/:id', (req, res) => {
  const { id } = req.params;
  const { type, questionText, options, correctAnswer } = req.body;

  const db = readDB();
  const index = db.questions.findIndex(q => q.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Question not found' });
  }

  db.questions[index] = {
    id,
    type: type || db.questions[index].type,
    questionText: questionText || db.questions[index].questionText,
    options: type === 'multiple-choice' ? (options || []) : [],
    correctAnswer: correctAnswer ? correctAnswer.trim() : db.questions[index].correctAnswer
  };

  writeDB(db);
  res.json(db.questions[index]);
});

// Delete a question
app.delete('/api/questions/:id', (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const filteredQuestions = db.questions.filter(q => q.id !== id);

  if (filteredQuestions.length === db.questions.length) {
    return res.status(404).json({ error: 'Question not found' });
  }

  db.questions = filteredQuestions;
  writeDB(db);
  res.json({ success: true, message: 'Question deleted successfully' });
});

// Participant join (validate and save nickname)
app.post('/api/join', (req, res) => {
  const { nickname } = req.body;
  if (!nickname || nickname.trim() === '') {
    return res.status(400).json({ error: 'Nickname is required' });
  }

  const trimmedNickname = nickname.trim();
  const db = readDB();
  db.participants = db.participants || [];

  // Check if nickname already exists
  const exists = db.participants.some(p => p.nickname.toLowerCase() === trimmedNickname.toLowerCase());
  if (exists) {
    return res.status(400).json({ error: '이미 사용 중인 닉네임입니다. 다른 닉네임을 사용해 주세요.' });
  }

  const newParticipant = {
    nickname: trimmedNickname,
    score: null,
    submittedAt: null,
    answers: {}
  };

  db.participants.push(newParticipant);
  writeDB(db);

  res.status(201).json({ success: true, nickname: trimmedNickname });
});

// Submit answers and calculate score
app.post('/api/submit', (req, res) => {
  const { nickname, answers } = req.body;
  if (!nickname || !answers) {
    return res.status(400).json({ error: 'Nickname and answers are required' });
  }

  const db = readDB();
  const participantIndex = db.participants.findIndex(p => p.nickname.toLowerCase() === nickname.trim().toLowerCase());

  if (participantIndex === -1) {
    return res.status(404).json({ error: 'Participant not found. Please join first.' });
  }

  const questions = db.questions || [];
  let score = 0;
  const questionsCount = questions.length;

  questions.forEach(q => {
    const userAnswer = answers[q.id];
    if (userAnswer) {
      const formattedUserAnswer = userAnswer.trim().toLowerCase();
      const formattedCorrectAnswer = q.correctAnswer.trim().toLowerCase();
      if (formattedUserAnswer === formattedCorrectAnswer) {
        score += 1;
      }
    }
  });

  const percentageScore = questionsCount > 0 ? Math.round((score / questionsCount) * 100) : 0;

  db.participants[participantIndex].score = percentageScore;
  db.participants[participantIndex].correctCount = score;
  db.participants[participantIndex].totalCount = questionsCount;
  db.participants[participantIndex].submittedAt = new Date().toISOString();
  db.participants[participantIndex].answers = answers;

  writeDB(db);

  res.json({
    success: true,
    score: percentageScore,
    correctCount: score,
    totalCount: questionsCount
  });
});

// Get all participant results (sorted by score)
app.get('/api/results', (req, res) => {
  const db = readDB();
  const results = (db.participants || []).filter(p => p.score !== null);
  
  // Sort by score descending, then by speed (submittedAt ascending)
  results.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return new Date(a.submittedAt) - new Date(b.submittedAt);
  });

  res.json(results);
});

// Reset all participants/scores (for clean restart)
app.post('/api/reset', (req, res) => {
  const db = readDB();
  db.participants = [];
  writeDB(db);
  res.json({ success: true, message: 'All results and participants reset successfully' });
});

app.listen(PORT, () => {
  console.log(`Quiz API backend running on http://localhost:${PORT}`);
});
