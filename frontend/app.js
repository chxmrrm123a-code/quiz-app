// ==========================================================================
// TRANSLATIONS DICTIONARY
// ==========================================================================
const translations = {
  ko: {
    logo_sub: "Live",
    join_title: "실시간 퀴즈 참가",
    join_desc: "닉네임을 만들고 아레나에 입장하여 출제된 퀴즈를 풀어보세요!",
    nickname_label: "사용할 닉네임",
    nickname_placeholder: "멋진 닉네임을 입력하세요 (예: 퀴즈천재)",
    join_btn: "입장하기",
    quiz_profile_label: "참가자",
    quiz_progress_label: "남은 문제",
    quiz_submit_btn: "답안 제출하기",
    score_title: "퀴즈 제출 완료!",
    score_desc: "수고하셨습니다. 제출된 답안이 채점되었습니다.",
    score_label: "점",
    score_correct_label: "맞힌 문제",
    score_time_label: "제출 시간",
    leaderboard_title: "실시간 석차 (리더보드)",
    leaderboard_pulse: "실시간 업데이트 중",
    rank_col: "순위",
    nickname_col: "닉네임",
    correct_col: "맞힌 개수",
    score_col: "점수",
    time_col: "제출 시간",
    state_col: "상태",
    state_completed: "완료",
    
    // Admin Dashboard
    admin_title: "시험 문제 출제 & 편집",
    admin_new_btn: "새 문제 추가",
    admin_form_new: "새 문제 추가",
    admin_form_edit: "문제 편집",
    q_text_label: "질문 내용",
    q_text_placeholder: "질문을 입력하세요",
    q_type_label: "문제 유형",
    q_type_mcq: "객관식 (선택형)",
    q_type_sa: "주관식 (단답형)",
    q_type_mcq_short: "객관식",
    q_type_sa_short: "주관식",
    q_image_label: "문제 이미지 (선택사항)",
    q_image_preview_alt: "이미지 미리보기",
    q_options_label: "보기 설정 (4지선다)",
    q_correct_label: "정답",
    q_correct_placeholder: "정답을 입력하세요 (객관식은 보기 텍스트와 완벽히 일치해야 함)",
    btn_cancel: "취소",
    btn_save: "저장하기",
    admin_list_title: "등록된 문제 목록",
    q_preview_correct: "정답",
    admin_stats_title: "실시간 응시 결과 & 통계",
    admin_reset_btn: "전체 응시결과 초기화",
    stat_players_label: "참가자 수",
    stat_avg_label: "평균 점수",
    live_status_title: "실시간 응시 현황 및 랭킹",
    qr_access_title: "모바일 간편 접속",
    qr_access_desc: "같은 와이파이에 연결된 스마트폰 카메라로 스캔하여 즉시 입장할 수 있습니다.",
    
    // Dynamic Previews
    q_preview_empty_title: "등록된 문제가 없습니다.",
    q_preview_empty_desc: "관리자가 문제를 출제할 때까지 기다려 주세요.",
    admin_list_empty: "등록된 문제가 없습니다. '새 문제 추가'를 클릭해 퀴즈를 만드세요.",
    leaderboard_empty: "아직 퀴즈를 완료한 응시자가 없습니다.",
    
    // Alerts/Prompts
    alert_join_empty: "닉네임을 입력해 주세요.",
    alert_join_fail: "입장에 실패했습니다.",
    alert_server_error: "서버 연결에 실패했습니다. 서버가 실행 중인지 확인하세요.",
    alert_profile_missing: "참가자 정보가 없습니다. 다시 로그인해 주세요.",
    alert_unanswered: "아직 풀지 않은 문제가 {count}개 있습니다. 이대로 제출할까요?",
    alert_submit_fail: "제출에 실패했습니다.",
    alert_submit_error: "서버 제출 도중 오류가 발생했습니다.",
    alert_mcq_options_empty: "객관식 보기 4개를 모두 채워주세요.",
    alert_question_save_error: "문제를 저장하는 도중 오류가 발생했습니다.",
    alert_question_delete_confirm: "정말로 이 문제를 삭제하시겠습니까?",
    alert_question_delete_fail: "문제 삭제에 실패했습니다.",
    alert_reset_confirm: "경고: 모든 참가자의 기록과 채점 점수가 초기화됩니다. 계속하시겠습니까?",
    alert_reset_success: "모든 응시 결과가 성공적으로 초기화되었습니다.",
    alert_reset_fail: "초기화에 실패했습니다.",
    alert_image_size: "이미지 용량이 너무 큽니다 (최대 2MB). 더 작은 이미지를 사용해 주세요."
  },
  vi: {
    logo_sub: "Trực tiếp",
    join_title: "Tham gia thi trực tiếp",
    join_desc: "Tạo biệt danh của bạn và tham gia đấu trường để giải quyết các câu đố!",
    nickname_label: "Biệt danh của bạn",
    nickname_placeholder: "Nhập một biệt danh thú vị (Ví dụ: Thiên tài đố vui)",
    join_btn: "Vào phòng thi",
    quiz_profile_label: "Thí sinh",
    quiz_progress_label: "Câu hỏi còn lại",
    quiz_submit_btn: "Nộp bài làm",
    score_title: "Đã nộp bài thành công!",
    score_desc: "Cảm ơn bạn. Bài làm của bạn đã được chấm điểm.",
    score_label: "Điểm",
    score_correct_label: "Câu đúng",
    score_time_label: "Thời gian nộp",
    leaderboard_title: "Bảng xếp hạng trực tiếp",
    leaderboard_pulse: "Đang cập nhật trực tiếp",
    rank_col: "Hạng",
    nickname_col: "Biệt danh",
    correct_col: "Số câu đúng",
    score_col: "Điểm số",
    time_col: "Thời gian nộp",
    state_col: "Trạng thái",
    state_completed: "Đã xong",
    
    // Admin Dashboard
    admin_title: "Tạo & Chỉnh sửa Câu hỏi",
    admin_new_btn: "Thêm câu hỏi mới",
    admin_form_new: "Thêm câu hỏi mới",
    admin_form_edit: "Chỉnh sửa câu hỏi",
    q_text_label: "Nội dung câu hỏi",
    q_text_placeholder: "Nhập câu hỏi của bạn",
    q_type_label: "Loại câu hỏi",
    q_type_mcq: "Trắc nghiệm (4 lựa chọn)",
    q_type_sa: "Tự luận (Trả lời ngắn)",
    q_type_mcq_short: "Trắc nghiệm",
    q_type_sa_short: "Tự luận",
    q_image_label: "Hình ảnh câu hỏi (Tùy chọn)",
    q_image_preview_alt: "Xem trước hình ảnh",
    q_options_label: "Cấu hình lựa chọn (Trắc nghiệm)",
    q_correct_label: "Đáp án đúng",
    q_correct_placeholder: "Nhập đáp án đúng (Với trắc nghiệm phải khớp chính xác với văn bản lựa chọn)",
    btn_cancel: "Hủy bỏ",
    btn_save: "Lưu lại",
    admin_list_title: "Danh sách câu hỏi đã đăng ký",
    q_preview_correct: "Đáp án",
    admin_stats_title: "Kết quả & Thống kê trực tiếp",
    admin_reset_btn: "Đặt lại toàn bộ kết quả",
    stat_players_label: "Số thí sinh",
    stat_avg_label: "Điểm trung bình",
    live_status_title: "Tình trạng thi & Xếp hạng",
    qr_access_title: "Kết nối nhanh di động",
    qr_access_desc: "Quét bằng camera điện thoại kết nối cùng mạng Wifi để vào thi ngay lập tức.",
    
    // Dynamic Previews
    q_preview_empty_title: "Không có câu hỏi nào.",
    q_preview_empty_desc: "Vui lòng đợi quản trị viên tạo câu hỏi.",
    admin_list_empty: "Không có câu hỏi nào. Nhấp 'Thêm câu hỏi mới' để bắt đầu.",
    leaderboard_empty: "Chưa có thí sinh nào hoàn thành bài thi.",
    
    // Alerts/Prompts
    alert_join_empty: "Vui lòng nhập biệt danh của bạn.",
    alert_join_fail: "Không thể tham gia phòng thi.",
    alert_server_error: "Không thể kết nối máy chủ. Vui lòng kiểm tra xem máy chủ có đang chạy không.",
    alert_profile_missing: "Thông tin thí sinh bị thiếu. Vui lòng đăng nhập lại.",
    alert_unanswered: "Bạn còn {count} câu hỏi chưa trả lời. Bạn vẫn muốn nộp bài chứ?",
    alert_submit_fail: "Nộp bài thất bại.",
    alert_submit_error: "Đã xảy ra lỗi khi nộp bài lên máy chủ.",
    alert_mcq_options_empty: "Vui lòng điền đầy đủ cả 4 lựa chọn trắc nghiệm.",
    alert_question_save_error: "Đã xảy ra lỗi khi lưu câu hỏi.",
    alert_question_delete_confirm: "Bạn có chắc chắn muốn xóa câu hỏi này không?",
    alert_question_delete_fail: "Xóa câu hỏi thất bại.",
    alert_reset_confirm: "CẢNH BÁO: Tất cả kết quả thi của thí sinh sẽ bị xóa sạch. Bạn có muốn tiếp tục?",
    alert_reset_success: "Đã đặt lại toàn bộ kết quả thi thành công.",
    alert_reset_fail: "Đặt lại thất bại.",
    alert_image_size: "Dung lượng ảnh quá lớn (Tối đa 2MB). Vui lòng chọn ảnh nhỏ hơn."
  },
  en: {
    logo_sub: "Live",
    join_title: "Join Live Quiz",
    join_desc: "Create a nickname and enter the arena to solve the quiz!",
    nickname_label: "Nickname to Use",
    nickname_placeholder: "Enter an awesome nickname (e.g. QuizGenius)",
    join_btn: "Join Arena",
    quiz_profile_label: "Participant",
    quiz_progress_label: "Remaining",
    quiz_submit_btn: "Submit Answers",
    score_title: "Quiz Submitted!",
    score_desc: "Thank you. Your answers have been graded.",
    score_label: "pts",
    score_correct_label: "Correct Questions",
    score_time_label: "Submission Time",
    leaderboard_title: "Live Leaderboard",
    leaderboard_pulse: "Updating Live",
    rank_col: "Rank",
    nickname_col: "Nickname",
    correct_col: "Correct",
    score_col: "Score",
    time_col: "Submitted At",
    state_col: "Status",
    state_completed: "Completed",
    
    // Admin Dashboard
    admin_title: "Create & Edit Questions",
    admin_new_btn: "Add New Question",
    admin_form_new: "Add New Question",
    admin_form_edit: "Edit Question",
    q_text_label: "Question Text",
    q_text_placeholder: "Enter the question",
    q_type_label: "Question Type",
    q_type_mcq: "Multiple Choice",
    q_type_sa: "Short Answer",
    q_type_mcq_short: "MCQ",
    q_type_sa_short: "Short Answer",
    q_image_label: "Question Image (Optional)",
    q_image_preview_alt: "Image Preview",
    q_options_label: "Multiple Choice Options (4 Choices)",
    q_correct_label: "Correct Answer",
    q_correct_placeholder: "Enter the correct answer (must match the option text exactly for multiple-choice)",
    btn_cancel: "Cancel",
    btn_save: "Save Question",
    admin_list_title: "Registered Questions List",
    q_preview_correct: "Correct Answer",
    admin_stats_title: "Live Results & Statistics",
    admin_reset_btn: "Reset All Quiz Data",
    stat_players_label: "Total Players",
    stat_avg_label: "Average Score",
    live_status_title: "Live Standings & Rankings",
    qr_access_title: "Mobile Quick Access",
    qr_access_desc: "Scan with your phone camera on the same Wi-Fi network to enter immediately.",
    
    // Dynamic Previews
    q_preview_empty_title: "No questions registered.",
    q_preview_empty_desc: "Please wait until the admin creates questions.",
    admin_list_empty: "No questions found. Click 'Add New Question' to start.",
    leaderboard_empty: "No participants have completed the quiz yet.",
    
    // Alerts/Prompts
    alert_join_empty: "Please enter a nickname.",
    alert_join_fail: "Failed to join.",
    alert_server_error: "Failed to connect to server. Please verify the server is running.",
    alert_profile_missing: "Participant profile missing. Please log in again.",
    alert_unanswered: "You have {count} unanswered questions. Submit anyway?",
    alert_submit_fail: "Failed to submit answers.",
    alert_submit_error: "Error occurred during submission.",
    alert_mcq_options_empty: "Please fill out all 4 multiple-choice options.",
    alert_question_save_error: "Error occurred while saving question.",
    alert_question_delete_confirm: "Are you sure you want to delete this question?",
    alert_question_delete_fail: "Failed to delete question.",
    alert_reset_confirm: "WARNING: All participant scores and records will be wiped out. Continue?",
    alert_reset_success: "All quiz results reset successfully.",
    alert_reset_fail: "Failed to reset.",
    alert_image_size: "Image size is too large (max 2MB). Please select a smaller image."
  }
};

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
  editingQuestionId: null, // null if adding new
  currentQuestionImage: null, // Base64 string of the selected image
  currentLang: localStorage.getItem('quiz_lang') || 'ko'
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initElements();
  setupEventListeners();
  checkRoute();
  
  // Initialize Lucide Icons
  lucide.createIcons();
});

// Cache DOM elements
let el = {};
function initElements() {
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
  el.adminQrCode = document.getElementById('admin-qr-code');
  el.adminLocalUrl = document.getElementById('admin-local-url');
  
  // Image Upload elements
  el.qImageFile = document.getElementById('q-image-file');
  el.qImagePreviewContainer = document.getElementById('q-image-preview-container');
  el.qImagePreview = document.getElementById('q-image-preview');
  el.btnRemoveImage = document.getElementById('btn-remove-image');

  // Lang Select
  el.langSelect = document.getElementById('lang-select');
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================
function setupEventListeners() {
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

  // Image Upload Handling
  if (el.qImageFile) {
    el.qImageFile.addEventListener('change', handleImageSelect);
  }
  if (el.btnRemoveImage) {
    el.btnRemoveImage.addEventListener('click', handleImageRemove);
  }

  // Language selection change
  if (el.langSelect) {
    el.langSelect.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }

  // Admin Add New/Edit Questions Toggle
  el.btnNewQuestion.addEventListener('click', () => showQuestionForm());
  el.btnCancelEdit.addEventListener('click', hideQuestionForm);

  // Admin Question Edit Submit
  el.questionEditorForm.addEventListener('submit', handleQuestionSubmit);

  // Reset Quiz
  el.btnResetQuiz.addEventListener('click', handleResetQuiz);
}

// ==========================================================================
// TRANSLATION HELPER FUNCTIONS
// ==========================================================================
function t(key) {
  return translations[state.currentLang][key] || key;
}

function applyLanguage(lang) {
  state.currentLang = lang;
  localStorage.setItem('quiz_lang', lang);
  if (el.langSelect) {
    el.langSelect.value = lang;
  }
  
  const dict = translations[lang];
  if (!dict) return;

  // Translate static texts
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      element.placeholder = dict[key];
    }
  });
  
  // Translate tooltips/titles
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    if (dict[key]) {
      element.title = dict[key];
    }
  });

  // Re-run dynamic rendering to update current outputs
  if (state.activeTab === 'student') {
    renderStudentQuiz();
  } else {
    renderAdminQuestions();
  }
  renderLeaderboards();
  updateAdminStats();
}

// ==========================================================================
// TAB ROUTING & POLLING MANAGEMENT
// ==========================================================================
function switchTab(tab) {
  state.activeTab = tab;
  
  if (tab === 'student') {
    // Switch to correct student view based on state
    if (state.nickname) {
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
    // Admin View
    showView('view-admin');
    setupQrCode();
    fetchQuestions();
    fetchResults();
    startPolling();
  }
}

function checkRoute() {
  applyLanguage(state.currentLang); // Apply saved/default language on load
  const path = window.location.pathname;
  if (path === '/admin') {
    switchTab('admin');
  } else {
    switchTab('student');
  }
}

function handleImageSelect(e) {
  const file = e.target.files[0];
  if (!file) return;

  if (file.size > 2 * 1024 * 1024) {
    alert(t('alert_image_size'));
    el.qImageFile.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    state.currentQuestionImage = event.target.result;
    el.qImagePreview.src = state.currentQuestionImage;
    el.qImagePreviewContainer.classList.remove('hidden');
  };
  reader.readAsDataURL(file);
}

function handleImageRemove() {
  state.currentQuestionImage = null;
  if (el.qImageFile) el.qImageFile.value = '';
  if (el.qImagePreview) el.qImagePreview.src = '';
  if (el.qImagePreviewContainer) el.qImagePreviewContainer.classList.add('hidden');
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
  await setupQrCode();

  // If user has a nickname saved in session, check if they are registered/submitted
  if (state.nickname) {
    el.displayNickname.textContent = state.nickname;
    
    // Switch tab/view accordingly
    switchTab('student');
  } else {
    switchTab('student');
  }
}

let qrCodeInstance = null;

async function setupQrCode() {
  try {
    const res = await fetch(`${API_BASE}/api/info`);
    if (!res.ok) throw new Error('Failed to fetch API info');
    const info = await res.json();
    
    const ip = info.localIp || '127.0.0.1';
    const port = info.port || 8000;
    
    // If running on localhost, use the retrieved local IP so other devices can access it!
    const targetUrl = ip !== '127.0.0.1' ? `http://${ip}:${port}` : window.location.origin;

    if (el.adminLocalUrl) {
      el.adminLocalUrl.textContent = targetUrl;
    }
    
    if (el.adminQrCode) {
      el.adminQrCode.innerHTML = ''; // Clear previous
      qrCodeInstance = new QRCode(el.adminQrCode, {
        text: targetUrl,
        width: 128,
        height: 128,
        colorDark: '#0f172a',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  } catch (error) {
    console.error('Error setting up QR Code:', error);
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
  if (!nickname) {
    alert(t('alert_join_empty'));
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/api/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nickname })
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.error || t('alert_join_fail'));
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
    alert(t('alert_server_error'));
  }
}

// Handle Student Quiz Answers Submit
async function handleQuizSubmit(e) {
  e.preventDefault();
  
  if (!state.nickname) {
    alert(t('alert_profile_missing'));
    switchTab('student');
    return;
  }

  // Validate all questions are answered
  const unansweredCount = state.questions.length - Object.keys(state.answers).length;
  if (unansweredCount > 0) {
    const msg = t('alert_unanswered').replace('{count}', unansweredCount);
    if (!confirm(msg)) {
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
      alert(data.error || t('alert_submit_fail'));
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
    alert(t('alert_submit_error'));
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
      alert(t('alert_mcq_options_empty'));
      return;
    }
  }

  const payload = { type, questionText, correctAnswer, options, imageUrl: state.currentQuestionImage };
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
    alert(t('alert_question_save_error'));
  }
}

// Delete Question (Admin)
async function deleteQuestion(qId) {
  if (!confirm(t('alert_question_delete_confirm'))) return;

  try {
    const res = await fetch(`${API_BASE}/api/questions/${qId}`, {
      method: 'DELETE'
    });
    if (!res.ok) throw new Error('Failed to delete question');
    
    await fetchQuestions();
  } catch (error) {
    console.error('Error deleting question:', error);
    alert(t('alert_question_delete_fail'));
  }
}

// Reset Quiz Data (Admin)
async function handleResetQuiz() {
  if (!confirm(t('alert_reset_confirm'))) return;

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
    alert(t('alert_reset_success'));
    
    // If we're on student tab, go back to join screen
    if (state.activeTab === 'student') {
      switchTab('student');
    }
  } catch (error) {
    console.error('Error resetting quiz:', error);
    alert(t('alert_reset_fail'));
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
        <h3>${t('q_preview_empty_title')}</h3>
        <p style="color: var(--text-muted);">${t('q_preview_empty_desc')}</p>
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
    badge.textContent = `Q ${idx + 1}`;
    qCard.appendChild(badge);

    // Question Text (Will not translate user text)
    const text = document.createElement('div');
    text.className = 'q-text';
    text.textContent = q.questionText;
    qCard.appendChild(text);

    // Question Image (if exists)
    if (q.imageUrl) {
      const img = document.createElement('img');
      img.src = q.imageUrl;
      img.className = 'question-image';
      img.alt = `Question ${idx + 1} Image`;
      qCard.appendChild(img);
    }

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
      textarea.placeholder = t('short_answer_placeholder_text') || '정답을 직접 입력하세요.';
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
        ${t('admin_list_empty')}
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
    badge.textContent = q.type === 'multiple-choice' ? t('q_type_mcq_short') : t('q_type_sa_short');

    meta.appendChild(num);
    meta.appendChild(badge);
    header.appendChild(meta);

    // Actions (Edit, Delete)
    const actions = document.createElement('div');
    actions.className = 'q-item-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'btn-icon edit';
    editBtn.title = t('btn_edit') || '수정';
    editBtn.innerHTML = '<i data-lucide="edit-3"></i>';
    editBtn.addEventListener('click', () => editQuestion(q));

    const delBtn = document.createElement('button');
    delBtn.className = 'btn-icon delete';
    delBtn.title = t('btn_delete') || '삭제';
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

    // Question Image Preview (if exists)
    if (q.imageUrl) {
      const img = document.createElement('img');
      img.src = q.imageUrl;
      img.className = 'question-image';
      img.style.maxHeight = '120px';
      img.alt = 'Question Image';
      item.appendChild(img);
    }

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
    corr.innerHTML = `<i data-lucide="check-circle-2"></i> ${t('q_preview_correct')}: <strong>${q.correctAnswer}</strong>`;
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
          ${t('leaderboard_empty')}
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
      <td><span class="text-emerald" style="font-weight: 800;">${p.score}${t('score_label')}</span></td>
      <td style="color: var(--text-muted); font-size: 0.8rem;">${timeStr}</td>
    `;
    el.studentLeaderboardBody.appendChild(studentRow);

    // B. Admin Dashboard Leaderboard Row (includes state and review link)
    const adminRow = document.createElement('tr');
    adminRow.innerHTML = `
      <td>${rankBadge}</td>
      <td><strong>${p.nickname}</strong></td>
      <td><span class="status-badge status-completed">${t('state_completed')}</span></td>
      <td><span style="font-weight: 700;">${p.score}%</span> (${p.correctCount}/${p.totalCount})</td>
      <td style="color: var(--text-muted); font-size: 0.8rem;">${timeStr}</td>
    `;
    el.adminLeaderboardBody.appendChild(adminRow);
  });
}

// 4. Update Stats Box in Admin
function updateAdminStats() {
  const total = state.results.length;
  if (el.statTotalPlayers) el.statTotalPlayers.textContent = total;

  if (total === 0) {
    if (el.statAvgScore) el.statAvgScore.textContent = '0%';
    return;
  }

  const sum = state.results.reduce((acc, curr) => acc + curr.score, 0);
  const avg = Math.round(sum / total);
  if (el.statAvgScore) el.statAvgScore.textContent = `${avg}%`;
}

// ==========================================================================
// ADMIN QUESTION FORM BEHAVIORS
// ==========================================================================
function showQuestionForm(titleKey = 'admin_form_new', q = null) {
  el.questionFormContainer.classList.remove('hidden');
  el.questionFormTitle.textContent = t(titleKey);
  
  if (q) {
    // Editing existing
    state.editingQuestionId = q.id;
    el.editQuestionId.value = q.id;
    el.qText.value = q.questionText;
    el.qType.value = q.type;
    el.qCorrect.value = q.correctAnswer;
    
    if (q.imageUrl) {
      state.currentQuestionImage = q.imageUrl;
      el.qImagePreview.src = q.imageUrl;
      el.qImagePreviewContainer.classList.remove('hidden');
    } else {
      handleImageRemove();
    }

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
    handleImageRemove();
    
    el.mcqOptionsContainer.classList.remove('hidden');
    toggleMcqOptionsRequired(true);
    clearMcqOptionFields();
  }
}

function hideQuestionForm() {
  el.questionFormContainer.classList.add('hidden');
  el.questionEditorForm.reset();
  handleImageRemove();
  state.editingQuestionId = null;
}

function editQuestion(q) {
  showQuestionForm('admin_form_edit', q);
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
