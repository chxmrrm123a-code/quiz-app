// ==========================================================================
// APP STATE & CONFIGURATION
// ==========================================================================
const API_BASE = window.location.origin; // Same origin (e.g. http://localhost:8000)

let state = {
  activeTab: 'student', // 'student' | 'admin'
  nickname: sessionStorage.getItem('quiz_nickname') || null,
  questions: [],
  answers: {}, // { questionId: answerText }
  results: [],
  pollingInterval: null,
  editingQuestionId: null // null if adding new
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initElements();
  setupEventListeners();
  refreshState();
  
  // Initialize Lucide Icons
  lucide.createIcons();
});

// Cache DOM elements
let el = {};
function initElements() {
  el.tabStudent = document.getElementById('tab-student');
  el.tabAdmin = document.getElementById('tab-admin');
  el.viewJoin = document.getElementById('view-join');
  el.viewQuiz = document.getElementById('view-quiz');
  el.viewScore = document.getElementById('view-score');
  el.viewAdmin = document.getElementById('view-admin');
  
  // Forms
  el.joinForm = document.getElementById('join-form');
  el.studentNicknameInput = document.getElementById('student-nickname');
  el.quizForm = document.getElementById('quiz-form');
  el.questionsContainer = document.getElementById('questions-container');
  el.questionEditorForm = document.getElementById('question-editor-form');
  el.questionFormContainer = document.getElementById('question-form-container');
  
  // Dynamic Outputs
  el.displayNickname = document.getElementById('display-nickname');
  el.progressText = document.getElementById('progress-text');
  el.progressBarFill = document.getElementById('progress-bar-fill');
  el.scorePercentage = document.getElementById('score-percentage');
  el.scoreCorrectCount = document.getElementById('score-correct-count');
  el.scoreSubmitTime = document.getElementById('score-submit-time');
  el.studentLeaderboardBody = document.getElementById('student-leaderboard-body');
  
  // Admin Elements
  el.btnNewQuestion = document.getElementById('btn-new-question');
  el.btnCancelEdit = document.getElementById('btn-cancel-edit');
  el.btnResetQuiz = document.getElementById('btn-reset-quiz');
  el.questionFormTitle = document.getElementById('question-form-title');
  el.editQuestionId = document.getElementById('edit-question-id');
  el.qText = document.getElementById('q-text');
  el.qType = document.getElementById('q-type');
  el.mcqOptionsContainer = document.getElementById('mcq-options-container');
  el.qCorrect = document.getElementById('q-correct');
  el.adminQuestionsList = document.getElementById('admin-questions-list');
  el.adminQuestionsCount = document.getElementById('admin-questions-count');
  el.adminLeaderboardBody = document.getElementById('admin-leaderboard-body');
  el.statTotalPlayers = document.getElementById('stat-total-players');
  el.statAvgScore = document.getElementById('stat-avg-score');
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================
function setupEventListeners() {
  // Tab switching
  el.tabStudent.addEventListener('click', () => switchTab('student'));
  el.tabAdmin.addEventListener('click', () => switchTab('admin'));

  // Student Nickname Join
  el.joinForm.addEventListener('submit', handleJoinSubmit);

  // Quiz submission
  el.quizForm.addEventListener('submit', handleQuizSubmit);

  // Admin Question Type change (MCQ options block toggle)
  el.qType.addEventListener('change', (e) => {
    if (e.target.value === 'multiple-choice') {
      el.mcqOptionsContainer.classList.remove('hidden');
      toggleMcqOptionsRequired(true);
    } else {
      el.mcqOptionsContainer.classList.add('hidden');
      toggleMcqOptionsRequired(false);
    }
  });

  // Admin Add New/Edit Questions Toggle
  el.btnNewQuestion.addEventListener('click', () => showQuestionForm());
  el.btnCancelEdit.addEventListener('click', hideQuestionForm);

  // Admin Question Edit Submit
  el.questionEditorForm.addEventListener('submit', handleQuestionSubmit);

  // Reset Quiz
  el.btnResetQuiz.addEventListener('click', handleResetQuiz);
}

// ==========================================================================
// TAB ROUTING & POLLING MANAGEMENT
// ==========================================================================
function switchTab(tab) {
  state.activeTab = tab;
  
  if (tab === 'student') {
    el.tabStudent.classList.add('active');
    el.tabAdmin.classList.remove('active');
    el.viewAdmin.classList.remove('active');
    
    // Switch to correct student view based on state
    if (state.nickname) {
      // Check if user already submitted answers
      const alreadySubmitted = state.results.some(p => p.nickname.toLowerCase() === state.nickname.toLowerCase());
      if (alreadySubmitted) {
        showView('view-score');
        startPolling();
      } else {
        showView('view-quiz');
        stopPolling();
      }
    } else {
      showView('view-join');
      stopPolling();
    }
  } else {
    // Admin Tab
    el.tabStudent.classList.remove('active');
    el.tabAdmin.classList.add('active');
    showView('view-admin');
    
    // Load fresh data for admin panel and start polling
    fetchQuestions();
    fetchResults();
    startPolling();
  }
}

function showView(viewId) {
  const views = [el.viewJoin, el.viewQuiz, el.viewScore, el.viewAdmin];
  views.forEach(v => {
    if (v.id === viewId) {
      v.classList.add('active');
    } else {
      v.classList.remove('active');
    }
  });
}

function startPolling() {
  if (state.pollingInterval) clearInterval(state.pollingInterval);
  // Poll results every 3 seconds to keep scoreboard updated
  state.pollingInterval = setInterval(() => {
    fetchResults();
  }, 3000);
}

function stopPolling() {
  if (state.pollingInterval) {
    clearInterval(state.pollingInterval);
    state.pollingInterval = null;
  }
}

// Refresh state on start or tab change
async function refreshState() {
  await fetchQuestions();
  await fetchResults();

  // If user has a nickname saved in session, check if they are registered/submitted
  if (state.nickname) {
    el.displayNickname.textContent = state.nickname;
    
    // Switch tab/view accordingly
    switchTab('student');
  } else {
    switchTab('student');
  }
}

// ==========================================================================
// API CLIENT IMPLEMENTATIONS
// ==========================================================================

// Fetch Questions
async function fetchQuestions() {
  try {
    const res = await fetch(`${API_BASE}/api/questions`);
    if (!res.ok) throw new Error('Failed to fetch questions');
    state.questions = await res.json();
    
    // Update count labels
    if (el.adminQuestionsCount) {
      el.adminQuestionsCount.textContent = state.questions.length;
    }
    
    // Render
    renderStudentQuiz();
    renderAdminQuestions();
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
}

// Fetch Participant Results
async function fetchResults() {
  try {
    const res = await fetch(`${API_BASE}/api/results`);
    if (!res.ok) throw new Error('Failed to fetch results');
    state.results = await res.json();
    
    renderLeaderboards();
    updateAdminStats();
  } catch (error) {
    console.error('Error fetching results:', error);
  }
}

// Handle Student Nickname Join
async function handleJoinSubmit(e) {
  e.preventDefault();
  const nickname = el.studentNicknameInput.value.trim();
  if (!nickname) return;

  try {
    const res = await fetch(`${API_BASE}/api/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nickname })
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.error || '입장에 실패했습니다.');
      return;
    }

    // Success
    state.nickname = data.nickname;
    sessionStorage.setItem('quiz_nickname', data.nickname);
    el.displayNickname.textContent = data.nickname;
    state.answers = {}; // Reset answers
    
    // Update views
    showView('view-quiz');
    updateProgressBar();
  } catch (error) {
    console.error('Error joining:', error);
    alert('서버 연결에 실패했습니다. 서버가 실행 중인지 확인하세요.');
  }
}

// Handle Student Quiz Answers Submit
async function handleQuizSubmit(e) {
  e.preventDefault();
  
  if (!state.nickname) {
    alert('참가자 정보가 없습니다. 다시 로그인해 주세요.');
    switchTab('student');
    return;
  }

  // Validate all questions are answered
  const unansweredCount = state.questions.length - Object.keys(state.answers).length;
  if (unansweredCount > 0) {
    if (!confirm(`아직 풀지 않은 문제가 ${unansweredCount}개 있습니다. 이대로 제출할까요?`)) {
      return;
    }
  }

  try {
    const res = await fetch(`${API_BASE}/api/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nickname: state.nickname,
        answers: state.answers
      })
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.error || '제출에 실패했습니다.');
      return;
    }

    // Load results, switch to score card, start live rank updates
    await fetchResults();
    
    el.scorePercentage.textContent = data.score;
    el.scoreCorrectCount.textContent = `${data.correctCount} / ${data.totalCount}`;
    
    const timeString = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    el.scoreSubmitTime.textContent = timeString;
    
    showView('view-score');
    startPolling();
  } catch (error) {
    console.error('Error submitting quiz:', error);
    alert('서버 제출 도중 오류가 발생했습니다.');
  }
}

// Handle Admin Add/Edit Question Submit
async function handleQuestionSubmit(e) {
  e.preventDefault();

  const type = el.qType.value;
  const questionText = el.qText.value.trim();
  const correctAnswer = el.qCorrect.value.trim();
  
  let options = [];
  if (type === 'multiple-choice') {
    options = [
      document.getElementById('opt-0').value.trim(),
      document.getElementById('opt-1').value.trim(),
      document.getElementById('opt-2').value.trim(),
      document.getElementById('opt-3').value.trim()
    ];
    if (options.some(opt => !opt)) {
      alert('객관식 보기 4개를 모두 채워주세요.');
      return;
    }
  }

  const payload = { type, questionText, correctAnswer, options };
  const method = state.editingQuestionId ? 'PUT' : 'POST';
  const endpoint = state.editingQuestionId 
    ? `${API_BASE}/api/questions/${state.editingQuestionId}`
    : `${API_BASE}/api/questions`;

  try {
    const res = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || 'Failed to save question');
    }

    // Success -> reload questions, hide edit form
    await fetchQuestions();
    hideQuestionForm();
  } catch (error) {
    console.error('Error saving question:', error);
    alert('문제를 저장하는 도중 오류가 발생했습니다.');
  }
}

// Delete Question (Admin)
async function deleteQuestion(qId) {
  if (!confirm('정말로 이 문제를 삭제하시겠습니까?')) return;

  try {
    const res = await fetch(`${API_BASE}/api/questions/${qId}`, {
      method: 'DELETE'
    });
    if (!res.ok) throw new Error('Failed to delete question');
    
    await fetchQuestions();
  } catch (error) {
    console.error('Error deleting question:', error);
    alert('문제 삭제에 실패했습니다.');
  }
}

// Reset Quiz Data (Admin)
async function handleResetQuiz() {
  if (!confirm('경고: 모든 참가자의 기록과 채점 점수가 초기화됩니다. 계속하시겠습니까?')) return;

  try {
    const res = await fetch(`${API_BASE}/api/reset`, {
      method: 'POST'
    });
    if (!res.ok) throw new Error('Failed to reset quiz data');

    // Clear client side session details
    sessionStorage.removeItem('quiz_nickname');
    state.nickname = null;
    state.answers = {};

    await fetchResults();
    alert('모든 응시 결과가 성공적으로 초기화되었습니다.');
    
    // If we're on student tab, go back to join screen
    if (state.activeTab === 'student') {
      switchTab('student');
    }
  } catch (error) {
    console.error('Error resetting quiz:', error);
    alert('초기화에 실패했습니다.');
  }
}

// ==========================================================================
// RENDER & DOM BINDINGS
// ==========================================================================

// Update progress bar
function updateProgressBar() {
  const total = state.questions.length;
  const answered = Object.keys(state.answers).length;
  el.progressText.textContent = `${answered} / ${total}`;
  
  const percentage = total > 0 ? (answered / total) * 100 : 0;
  el.progressBarFill.style.width = `${percentage}%`;
}

// 1. Render Student Quiz UI
function renderStudentQuiz() {
  el.questionsContainer.innerHTML = '';
  
  if (state.questions.length === 0) {
    el.questionsContainer.innerHTML = `
      <div class="card text-center" style="padding: 3rem;">
        <i data-lucide="help-circle" style="width: 3rem; height: 3rem; margin: 0 auto 1rem auto; color: var(--text-muted);"></i>
        <h3>등록된 문제가 없습니다.</h3>
        <p style="color: var(--text-muted);">관리자가 문제를 출제할 때까지 기다려 주세요.</p>
      </div>
    `;
    lucide.createIcons();
    updateProgressBar();
    return;
  }

  state.questions.forEach((q, idx) => {
    const qCard = document.createElement('div');
    qCard.className = 'card question-card';
    qCard.style.animationDelay = `${idx * 0.05}s`;

    // Number Badge
    const badge = document.createElement('span');
    badge.className = 'q-num-badge';
    badge.textContent = `문제 ${idx + 1}`;
    qCard.appendChild(badge);

    // Question Text
    const text = document.createElement('div');
    text.className = 'q-text';
    text.textContent = q.questionText;
    qCard.appendChild(text);

    // Options or Subjective Input
    if (q.type === 'multiple-choice') {
      const optionsGrid = document.createElement('div');
      optionsGrid.className = 'options-grid';

      q.options.forEach((opt, optIdx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        if (state.answers[q.id] === opt) {
          btn.classList.add('selected');
        }

        const marker = document.createElement('span');
        marker.className = 'option-marker';
        marker.textContent = String.fromCharCode(65 + optIdx); // A, B, C, D
        
        const label = document.createElement('span');
        label.textContent = opt;

        btn.appendChild(marker);
        btn.appendChild(label);

        // Click event to select option
        btn.addEventListener('click', () => {
          // Toggle styling on siblings
          const siblings = optionsGrid.querySelectorAll('.option-btn');
          siblings.forEach(s => s.classList.remove('selected'));
          btn.classList.add('selected');

          // Save answer
          state.answers[q.id] = opt;
          updateProgressBar();
        });

        optionsGrid.appendChild(btn);
      });
      qCard.appendChild(optionsGrid);
    } else {
      // Short Answer input
      const saContainer = document.createElement('div');
      saContainer.className = 'short-answer-input-container';

      const textarea = document.createElement('textarea');
      textarea.rows = 2;
      textarea.placeholder = '주관식 정답을 적어주세요. (띄어쓰기 유의)';
      textarea.value = state.answers[q.id] || '';

      textarea.addEventListener('input', (e) => {
        const val = e.target.value;
        if (val.trim()) {
          state.answers[q.id] = val;
        } else {
          delete state.answers[q.id];
        }
        updateProgressBar();
      });

      saContainer.appendChild(textarea);
      qCard.appendChild(saContainer);
    }

    el.questionsContainer.appendChild(qCard);
  });

  updateProgressBar();
  lucide.createIcons();
}

// 2. Render Admin Questions List
function renderAdminQuestions() {
  el.adminQuestionsList.innerHTML = '';

  if (state.questions.length === 0) {
    el.adminQuestionsList.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
        등록된 문제가 없습니다. '새 문제 추가'를 클릭해 퀴즈를 만드세요.
      </div>
    `;
    return;
  }

  state.questions.forEach((q, idx) => {
    const item = document.createElement('div');
    item.className = 'admin-question-item';

    // Header
    const header = document.createElement('div');
    header.className = 'admin-question-header';

    const meta = document.createElement('div');
    meta.className = 'q-header-meta';
    
    const num = document.createElement('span');
    num.style.fontWeight = 'bold';
    num.textContent = `Q${idx + 1}.`;
    
    const badge = document.createElement('span');
    badge.className = `q-type-badge ${q.type === 'multiple-choice' ? 'type-mcq' : 'type-sa'}`;
    badge.textContent = q.type === 'multiple-choice' ? '객관식' : '주관식';

    meta.appendChild(num);
    meta.appendChild(badge);
    header.appendChild(meta);

    // Actions (Edit, Delete)
    const actions = document.createElement('div');
    actions.className = 'q-item-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'btn-icon edit';
    editBtn.title = '수정';
    editBtn.innerHTML = '<i data-lucide="edit-3"></i>';
    editBtn.addEventListener('click', () => editQuestion(q));

    const delBtn = document.createElement('button');
    delBtn.className = 'btn-icon delete';
    delBtn.title = '삭제';
    delBtn.innerHTML = '<i data-lucide="trash-2"></i>';
    delBtn.addEventListener('click', () => deleteQuestion(q.id));

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);
    header.appendChild(actions);
    item.appendChild(header);

    // Text
    const body = document.createElement('div');
    body.className = 'admin-question-body';
    body.textContent = q.questionText;
    item.appendChild(body);

    // Options Preview (Only for MCQ)
    if (q.type === 'multiple-choice') {
      const optionsPrev = document.createElement('div');
      optionsPrev.className = 'admin-question-options-preview';
      q.options.forEach((opt, optIdx) => {
        const optText = document.createElement('span');
        optText.textContent = `${optIdx + 1}) ${opt}`;
        optionsPrev.appendChild(optText);
      });
      item.appendChild(optionsPrev);
    }

    // Correct Answer
    const corr = document.createElement('div');
    corr.className = 'admin-question-correct text-emerald';
    corr.innerHTML = `<i data-lucide="check-circle-2"></i> 정답: <strong>${q.correctAnswer}</strong>`;
    item.appendChild(corr);

    el.adminQuestionsList.appendChild(item);
  });

  lucide.createIcons();
}

// 3. Render Leaderboards (Student Rank and Admin Monitor)
function renderLeaderboards() {
  // Clear lists
  el.studentLeaderboardBody.innerHTML = '';
  el.adminLeaderboardBody.innerHTML = '';

  if (state.results.length === 0) {
    const emptyRow = `
      <tr>
        <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">
          아직 퀴즈를 완료한 응시자가 없습니다.
        </td>
      </tr>
    `;
    el.studentLeaderboardBody.innerHTML = emptyRow;
    el.adminLeaderboardBody.innerHTML = emptyRow;
    return;
  }

  state.results.forEach((p, idx) => {
    const rank = idx + 1;
    const isCurrentUser = state.nickname && p.nickname.toLowerCase() === state.nickname.toLowerCase();
    
    // Dynamic Rank Badge styling
    let rankBadgeClass = 'rank-other';
    if (rank === 1) rankBadgeClass = 'rank-1';
    else if (rank === 2) rankBadgeClass = 'rank-2';
    else if (rank === 3) rankBadgeClass = 'rank-3';

    const rankBadge = `<span class="rank-badge ${rankBadgeClass}">${rank}</span>`;
    
    // Time translation
    const time = new Date(p.submittedAt);
    const timeStr = time.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Table rows
    // A. Student Leaderboard Row
    const studentRow = document.createElement('tr');
    if (isCurrentUser) studentRow.style.backgroundColor = 'rgba(99, 102, 241, 0.08)';
    studentRow.innerHTML = `
      <td>${rankBadge}</td>
      <td><strong>${p.nickname}</strong> ${isCurrentUser ? '<span class="text-gold">(나)</span>' : ''}</td>
      <td>${p.correctCount} / ${p.totalCount}</td>
      <td><span class="text-emerald" style="font-weight: 800;">${p.score}점</span></td>
      <td style="color: var(--text-muted); font-size: 0.8rem;">${timeStr}</td>
    `;
    el.studentLeaderboardBody.appendChild(studentRow);

    // B. Admin Dashboard Leaderboard Row (includes state and review link)
    const adminRow = document.createElement('tr');
    adminRow.innerHTML = `
      <td>${rankBadge}</td>
      <td><strong>${p.nickname}</strong></td>
      <td><span class="status-badge status-completed">완료</span></td>
      <td><span style="font-weight: 700;">${p.score}%</span> (${p.correctCount}/${p.totalCount})</td>
      <td style="color: var(--text-muted); font-size: 0.8rem;">${timeStr}</td>
    `;
    el.adminLeaderboardBody.appendChild(adminRow);
  });
}

// 4. Update Stats Box in Admin
function updateAdminStats() {
  const total = state.results.length;
  el.statTotalPlayers.textContent = total;

  if (total === 0) {
    el.statAvgScore.textContent = '0%';
    return;
  }

  const sum = state.results.reduce((acc, curr) => acc + curr.score, 0);
  const avg = Math.round(sum / total);
  el.statAvgScore.textContent = `${avg}%`;
}

// ==========================================================================
// ADMIN QUESTION FORM BEHAVIORS
// ==========================================================================
function showQuestionForm(title = '새 문제 추가', q = null) {
  el.questionFormContainer.classList.remove('hidden');
  el.questionFormTitle.textContent = title;
  
  if (q) {
    // Editing existing
    state.editingQuestionId = q.id;
    el.editQuestionId.value = q.id;
    el.qText.value = q.questionText;
    el.qType.value = q.type;
    el.qCorrect.value = q.correctAnswer;
    
    if (q.type === 'multiple-choice') {
      el.mcqOptionsContainer.classList.remove('hidden');
      toggleMcqOptionsRequired(true);
      q.options.forEach((opt, idx) => {
        document.getElementById(`opt-${idx}`).value = opt;
      });
    } else {
      el.mcqOptionsContainer.classList.add('hidden');
      toggleMcqOptionsRequired(false);
      clearMcqOptionFields();
    }
  } else {
    // New Question
    state.editingQuestionId = null;
    el.editQuestionId.value = '';
    el.qText.value = '';
    el.qType.value = 'multiple-choice';
    el.qCorrect.value = '';
    
    el.mcqOptionsContainer.classList.remove('hidden');
    toggleMcqOptionsRequired(true);
    clearMcqOptionFields();
  }
}

function hideQuestionForm() {
  el.questionFormContainer.classList.add('hidden');
  el.questionEditorForm.reset();
  state.editingQuestionId = null;
}

function editQuestion(q) {
  showQuestionForm('문제 편집', q);
}

function clearMcqOptionFields() {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`opt-${i}`).value = '';
  }
}

function toggleMcqOptionsRequired(isRequired) {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`opt-${i}`).required = isRequired;
  }
}
