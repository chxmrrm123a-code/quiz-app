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
    
    // Room Code Labels
    room_code_label: "방 번호 (Room Code)",
    room_code_placeholder: "4자리 방 번호를 입력하세요",
    room_select_title: "퀴즈 방 관리",
    room_select_desc: "새로운 퀴즈 방을 개설하거나 기존에 진행 중인 방으로 입장하세요.",
    room_create_btn: "새로운 퀴즈 방 만들기",
    room_enter_label: "기존 방 입장하기",
    room_enter_btn: "진입하기",
    
    // Student Wait
    wait_title: "시험 대기 중...",
    wait_desc: "선생님이 시험을 시작하실 때까지 대기해 주세요. 시작 시 자동으로 화면이 전환됩니다.",
    timer_label: "남은 시간:",
    modal_detail_title: "답안 상세 내역",
    nav_prev: "이전 문제",
    nav_next: "다음 문제",
    btn_close: "닫기",
    stats_correct_rate: "정답률",
    stats_correct_rate_empty: "정답률: - (제출 없음)",
    stats_correct_rate_format: "정답률: {rate}% ({total}명 중 {correct}명 맞힘)",
    detail_q_num: "{num}번 문제",
    detail_user_ans: "선택한 답안",
    detail_correct_ans: "실제 정답",
    detail_unanswered: "(무응답)",
    
    // Teacher PIN Login
    admin_login_title: "선생님(관리자) 인증",
    admin_login_desc: "대시보드에 진입하기 위한 PIN 번호를 입력하세요.",
    admin_pin_label: "PIN 번호 (기본값: 1234)",
    admin_pin_placeholder: "PIN 번호를 입력하세요",
    admin_login_btn: "인증하기",

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
    q_options_label: "보기 설정 (4지선다 혹은 5지선다)",
    q_correct_label: "정답",
    q_correct_placeholder: "정답을 입력하세요 (객관식은 보기 텍스트와 완벽히 일치해야 함)",
    btn_cancel: "취소",
    btn_save: "저장하기",
    btn_edit: "수정",
    btn_delete: "삭제",
    btn_export: "내보내기",
    btn_import: "불러오기",
    btn_clear: "비우기",
    admin_list_title: "등록된 문제 목록",
    q_preview_correct: "정답",
    admin_stats_title: "실시간 응시 결과 & 통계",
    admin_reset_btn: "전체 응시결과 초기화",
    stat_players_label: "참가자 수",
    stat_avg_label: "평균 점수",
    live_status_title: "실시간 응시 현황 및 랭킹",
    qr_access_title: "모바일 간편 접속",
    qr_access_desc: "같은 와이파이에 연결된 스마트폰 카메라로 스캔하여 즉시 입장할 수 있습니다.",
    cheats_col: "화면 이탈",
    
    // Dynamic Previews
    q_preview_empty_title: "등록된 문제가 없습니다.",
    q_preview_empty_desc: "관리자가 문제를 출제할 때까지 기다려 주세요.",
    admin_list_empty: "등록된 문제가 없습니다. '새 문제 추가'를 클릭해 퀴즈를 만드세요.",
    leaderboard_empty: "아직 퀴즈를 완료한 응시자가 없습니다.",
    short_answer_placeholder_text: "정답을 직접 입력하세요.",
    
    // Alerts/Prompts
    alert_pin_success: "선생님 인증에 성공했습니다!",
    alert_pin_fail: "잘못된 PIN 번호입니다.",
    alert_room_empty: "방 번호를 입력해 주세요.",
    alert_room_invalid: "방 번호는 4자리 숫자여야 합니다.",
    alert_room_not_found: "존재하지 않는 방 번호입니다.",
    alert_room_created: "새로운 퀴즈 방이 생성되었습니다! 방 번호: {code}",
    alert_import_success: "문제를 성공적으로 불러왔습니다!",
    alert_import_fail: "파일 형식이 잘못되었거나 불러오기에 실패했습니다.",
    alert_join_empty: "닉네임을 입력해 주세요.",
    alert_join_fail: "입장에 실패했습니다.",
    alert_server_error: "서버 연결에 실패했습니다. 서버가 실행 중인지 확인하세요.",
    alert_profile_missing: "참가자 정보가 없습니다. 다시 로그인해 주세요.",
    alert_unanswered: "아직 풀지 않은 문제가 {count}개 있습니다. 이대로 제출할까요?",
    alert_submit_fail: "제출에 실패했습니다.",
    alert_submit_error: "서버 제출 도중 오류가 발생했습니다.",
    alert_mcq_options_empty: "객관식 보기 4개를 모두 채워주세요. (5번은 선택사항)",
    alert_question_save_error: "문제를 저장하는 도중 오류가 발생했습니다.",
    alert_question_delete_confirm: "정말로 이 문제를 삭제하시겠습니까?",
    alert_question_delete_fail: "문제 삭제에 실패했습니다.",
    alert_reset_confirm: "경고: 모든 참가자의 기록과 채점 점수가 초기화됩니다. 계속하시겠습니까?",
    alert_reset_success: "모든 응시 결과가 성공적으로 초기화되었습니다.",
    alert_reset_fail: "초기화에 실패했습니다.",
    alert_image_size: "이미지 용량이 너무 큽니다 (최대 2MB). 더 작은 이미지를 사용해 주세요.",
    alert_cheating_warning: "⚠️ 경고: 시험 중에 화면을 벗어나면 부정행위로 간주되어 기록에 남습니다!",
    toggle_exam_text_start: "시험 시작",
    toggle_exam_text_locked: "시험지 잠금"
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
    
    // Room Code Labels
    room_code_label: "Mã phòng (Room Code)",
    room_code_placeholder: "Nhập mã phòng 4 chữ số",
    room_select_title: "Quản lý phòng thi",
    room_select_desc: "Tạo phòng thi mới hoặc tham gia vào phòng thi đang hoạt động.",
    room_create_btn: "Tạo phòng thi mới",
    room_enter_label: "Tham gia phòng đã có",
    room_enter_btn: "Vào phòng",
    
    // Student Wait
    wait_title: "Đang chờ thi...",
    wait_desc: "Vui lòng đợi giáo viên bắt đầu bài thi. Màn hình sẽ tự động chuyển khi bắt đầu.",
    timer_label: "Thời gian còn lại:",
    modal_detail_title: "Chi tiết bài làm",
    nav_prev: "Câu trước",
    nav_next: "Câu sau",
    btn_close: "Đóng",
    stats_correct_rate: "Tỉ lệ đúng",
    stats_correct_rate_empty: "Tỉ lệ đúng: - (Chưa nộp)",
    stats_correct_rate_format: "Tỉ lệ đúng: {rate}% (Đúng {correct}/{total} thí sinh)",
    detail_q_num: "Câu {num}",
    detail_user_ans: "Bài làm của thí sinh",
    detail_correct_ans: "Đáp án đúng",
    detail_unanswered: "(Không trả lời)",
    
    // Teacher PIN Login
    admin_login_title: "Xác thực Giáo viên",
    admin_login_desc: "Nhập mã PIN để truy cập bảng điều khiển.",
    admin_pin_label: "Mã PIN (Mặc định: 1234)",
    admin_pin_placeholder: "Nhập mã PIN",
    admin_login_btn: "Xác thực",

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
    q_options_label: "Cấu hình lựa chọn (4 hoặc 5 lựa chọn)",
    q_correct_label: "Đáp án đúng",
    q_correct_placeholder: "Nhập đáp án đúng (Với trắc nghiệm phải khớp chính xác với văn bản lựa chọn)",
    btn_cancel: "Hủy bỏ",
    btn_save: "Lưu lại",
    btn_edit: "Sửa",
    btn_delete: "Xóa",
    btn_export: "Xuất file",
    btn_import: "Nhập file",
    btn_clear: "Xóa",
    admin_list_title: "Danh sách câu hỏi đã đăng ký",
    q_preview_correct: "Đáp án",
    admin_stats_title: "Kết quả & Thống kê trực tiếp",
    admin_reset_btn: "Đặt lại toàn bộ kết quả",
    stat_players_label: "Số thí sinh",
    stat_avg_label: "Điểm trung bình",
    live_status_title: "Tình trạng thi & Xếp hạng",
    qr_access_title: "Kết nối nhanh di động",
    qr_access_desc: "Quét bằng camera điện thoại kết nối cùng mạng Wifi để vào thi ngay lập tức.",
    cheats_col: "Rời màn hình",
    
    // Dynamic Previews
    q_preview_empty_title: "Không có câu hỏi nào.",
    q_preview_empty_desc: "Vui lòng đợi quản trị viên tạo câu hỏi.",
    admin_list_empty: "Không có câu hỏi nào. Nhấp 'Thêm câu hỏi mới' để bắt đầu.",
    leaderboard_empty: "Chưa có thí sinh nào hoàn thành bài thi.",
    short_answer_placeholder_text: "Nhập đáp án của bạn.",
    
    // Alerts/Prompts
    alert_pin_success: "Xác thực giáo viên thành công!",
    alert_pin_fail: "Mã PIN không chính xác.",
    alert_room_empty: "Vui lòng nhập mã phòng.",
    alert_room_invalid: "Mã phòng phải là 4 chữ số.",
    alert_room_not_found: "Không tìm thấy mã phòng này.",
    alert_room_created: "Đã tạo phòng thi mới thành công! Mã: {code}",
    alert_import_success: "Nhập câu hỏi thành công!",
    alert_import_fail: "Định dạng tệp không hợp lệ hoặc nhập thất bại.",
    alert_join_empty: "Vui lòng nhập biệt danh của bạn.",
    alert_join_fail: "Không thể tham gia phòng thi.",
    alert_server_error: "Không thể kết nối máy chủ. Vui lòng kiểm tra xem máy chủ có đang chạy không.",
    alert_profile_missing: "Thông tin thí sinh bị thiếu. Vui lòng đăng nhập lại.",
    alert_unanswered: "Bạn còn {count} câu hỏi chưa trả lời. Bạn vẫn muốn nộp bài chứ?",
    alert_submit_fail: "Nộp bài thất bại.",
    alert_submit_error: "Đã xảy ra lỗi khi nộp bài lên máy chủ.",
    alert_mcq_options_empty: "Vui lòng điền đầy đủ ít nhất 4 lựa chọn trắc nghiệm (Lựa chọn 5 không bắt buộc).",
    alert_question_save_error: "Đã xảy ra lỗi khi lưu câu hỏi.",
    alert_question_delete_confirm: "Bạn có chắc chắn muốn xóa câu hỏi này không?",
    alert_question_delete_fail: "Xóa câu hỏi thất bại.",
    alert_reset_confirm: "CẢNH BÁO: Tất cả kết quả thi của thí sinh sẽ bị xóa sạch. Bạn có muốn tiếp tục?",
    alert_reset_success: "Đã đặt lại toàn bộ kết quả thi thành công.",
    alert_reset_fail: "Đặt lại thất bại.",
    alert_image_size: "Dung lượng ảnh quá lớn (Tối đa 2MB). Vui lòng chọn ảnh nhỏ hơn.",
    alert_cheating_warning: "⚠️ Cảnh báo: Rời khỏi màn hình khi đang làm bài sẽ bị tính là vi phạm!",
    toggle_exam_text_start: "Bắt đầu thi",
    toggle_exam_text_locked: "Khóa đề thi"
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
    
    // Room Code Labels
    room_code_label: "Room Code",
    room_code_placeholder: "Enter 4-digit Room Code",
    room_select_title: "Quiz Room Management",
    room_select_desc: "Create a new quiz room or enter an active room.",
    room_create_btn: "Create New Quiz Room",
    room_enter_label: "Enter Existing Room",
    room_enter_btn: "Enter Room",
    
    // Student Wait
    wait_title: "Waiting for Exam...",
    wait_desc: "Please wait until the teacher starts the exam. The screen will automatically transition when started.",
    timer_label: "Time Remaining:",
    modal_detail_title: "Detailed Answers",
    nav_prev: "Previous",
    nav_next: "Next",
    btn_close: "Close",
    stats_correct_rate: "Correct Rate",
    stats_correct_rate_empty: "Correct Rate: - (No submissions)",
    stats_correct_rate_format: "Correct Rate: {rate}% ({correct}/{total} correct)",
    detail_q_num: "Question {num}",
    detail_user_ans: "Student Answer",
    detail_correct_ans: "Correct Answer",
    detail_unanswered: "(Unanswered)",
    
    // Teacher PIN Login
    admin_login_title: "Teacher Authentication",
    admin_login_desc: "Enter the PIN code to access the dashboard.",
    admin_pin_label: "PIN Code (Default: 1234)",
    admin_pin_placeholder: "Enter PIN code",
    admin_login_btn: "Authenticate",
 
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
    q_options_label: "Multiple Choice Options (4 or 5 Choices)",
    q_correct_label: "Correct Answer",
    q_correct_placeholder: "Enter the correct answer (must match the option text exactly for multiple-choice)",
    btn_cancel: "Cancel",
    btn_save: "Save Question",
    btn_edit: "Edit",
    btn_delete: "Delete",
    btn_export: "Export",
    btn_import: "Import",
    btn_clear: "Clear",
    admin_list_title: "Registered Questions List",
    q_preview_correct: "Correct Answer",
    admin_stats_title: "Live Results & Statistics",
    admin_reset_btn: "Reset All Quiz Data",
    stat_players_label: "Total Players",
    stat_avg_label: "Average Score",
    live_status_title: "Live Standings & Rankings",
    qr_access_title: "Mobile Quick Access",
    qr_access_desc: "Scan with your phone camera on the same Wi-Fi network to enter immediately.",
    cheats_col: "Tab Switches",
    
    // Dynamic Previews
    q_preview_empty_title: "No questions registered.",
    q_preview_empty_desc: "Please wait until the admin creates questions.",
    admin_list_empty: "No questions found. Click 'Add New Question' to start.",
    leaderboard_empty: "No participants have completed the quiz yet.",
    short_answer_placeholder_text: "Enter your answer.",
    
    // Alerts/Prompts
    alert_pin_success: "Teacher authenticated successfully!",
    alert_pin_fail: "Invalid PIN code.",
    alert_room_empty: "Please enter a Room Code.",
    alert_room_invalid: "Room Code must be 4 digits.",
    alert_room_not_found: "Room not found.",
    alert_room_created: "New quiz room created! Room Code: {code}",
    alert_import_success: "Questions imported successfully!",
    alert_import_fail: "Invalid file format or import failed.",
    alert_join_empty: "Please enter a nickname.",
    alert_join_fail: "Failed to join.",
    alert_server_error: "Failed to connect to server. Please verify the server is running.",
    alert_profile_missing: "Participant profile missing. Please log in again.",
    alert_unanswered: "You have {count} unanswered questions. Submit anyway?",
    alert_submit_fail: "Failed to submit answers.",
    alert_submit_error: "Error occurred during submission.",
    alert_mcq_options_empty: "Please fill out at least 4 multiple-choice options (5th option is optional).",
    alert_question_save_error: "Error occurred while saving question.",
    alert_question_delete_confirm: "Are you sure you want to delete this question?",
    alert_question_delete_fail: "Failed to delete question.",
    alert_reset_confirm: "WARNING: All participant scores and records will be wiped out. Continue?",
    alert_reset_success: "All quiz results reset successfully.",
    alert_reset_fail: "Failed to reset.",
    alert_image_size: "Image size is too large (max 2MB). Please select a smaller image.",
    alert_cheating_warning: "⚠️ Warning: Leaving the screen during the exam will be recorded as cheating!",
    toggle_exam_text_start: "Start Exam",
    toggle_exam_text_locked: "Lock Exam"
  }
};

// ==========================================================================
// APP STATE & CONFIGURATION
// ==========================================================================
const API_BASE = window.location.origin; // Same origin (e.g. http://localhost:8000)

let state = {
  activeTab: 'student', // 'student' | 'admin'
  nickname: sessionStorage.getItem('quiz_nickname') || null,
  roomCode: sessionStorage.getItem('quiz_room_code') || null,
  questions: [],
  answers: {}, // { questionId: answerText }
  results: [],
  pollingInterval: null,
  editingQuestionId: null, // null if adding new
  currentQuestionImage: null, // Base64 string of the selected image
  currentLang: localStorage.getItem('quiz_lang') || 'en',
  adminToken: sessionStorage.getItem('admin_token') || null, // PIN string if authenticated
  examState: 'locked', // 'locked' | 'active'
  tabSwitches: 0,
  examStateInterval: null,
  currentQuestionIdx: 0,
  slideDirection: 'next'
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
  el.viewWait = document.getElementById('view-wait');
  el.viewQuiz = document.getElementById('view-quiz');
  el.viewScore = document.getElementById('view-score');
  el.viewAdminLogin = document.getElementById('view-admin-login');
  el.viewAdminRoomSelect = document.getElementById('view-admin-room-select');
  el.viewAdmin = document.getElementById('view-admin');
  el.waitInfoBox = document.getElementById('wait-info-box');
  el.waitInfoText = document.getElementById('wait-info-text');
  el.statHardestQ = document.getElementById('admin-hardest-q');
  
  // Forms
  el.joinForm = document.getElementById('join-form');
  el.studentRoomCodeInput = document.getElementById('room-code');
  el.studentNicknameInput = document.getElementById('student-nickname');
  el.quizForm = document.getElementById('quiz-form');
  el.questionsContainer = document.getElementById('questions-container');
  
  el.adminLoginForm = document.getElementById('admin-login-form');
  el.adminPinInput = document.getElementById('admin-pin-input');
  
  el.adminTimerInput = document.getElementById('admin-timer-input');
  el.quizTimerBanner = document.getElementById('quiz-timer-banner');
  el.timerCountdown = document.getElementById('timer-countdown');
  
  el.quizNavBar = document.getElementById('quiz-nav-bar');
  el.btnPrevQ = document.getElementById('btn-prev-q');
  el.btnNextQ = document.getElementById('btn-next-q');
  el.quizQIndicator = document.getElementById('quiz-q-indicator');
  el.quizSubmitContainer = document.getElementById('quiz-submit-container');
  
  el.studentDetailModal = document.getElementById('student-detail-modal');
  el.modalStudentName = document.getElementById('modal-student-name');
  el.modalStudentAnswersList = document.getElementById('modal-student-answers-list');
  el.btnCloseModal = document.getElementById('btn-close-modal');
  el.btnCloseModalFooter = document.getElementById('btn-close-modal-footer');
  
  el.btnCreateRoom = document.getElementById('btn-create-room');
  el.adminRoomEnterForm = document.getElementById('admin-room-enter-form');
  el.adminRoomCodeInput = document.getElementById('admin-room-code-input');
  el.displayRoomCode = document.getElementById('display-room-code');
  
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
  el.btnExportQuestions = document.getElementById('btn-export-questions');
  el.btnImportQuestions = document.getElementById('btn-import-questions');
  el.importFile = document.getElementById('import-file');
  el.btnClearOpt5 = document.getElementById('btn-clear-opt5');
  el.btnToggleExam = document.getElementById('btn-toggle-exam');
  el.toggleExamText = document.getElementById('toggle-exam-text');
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

  // Admin Login
  el.adminLoginForm.addEventListener('submit', handleAdminLogin);

  // Room Create & Enter
  if (el.btnCreateRoom) {
    el.btnCreateRoom.addEventListener('click', handleCreateRoom);
  }
  if (el.adminRoomEnterForm) {
    el.adminRoomEnterForm.addEventListener('submit', handleEnterRoom);
  }

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

  // Backup / Restore
  el.btnExportQuestions.addEventListener('click', handleExportQuestions);
  el.btnImportQuestions.addEventListener('click', () => el.importFile.click());
  el.importFile.addEventListener('change', handleImportQuestions);

  // Clear Option E
  if (el.btnClearOpt5) {
    el.btnClearOpt5.addEventListener('click', () => {
      const opt4 = document.getElementById('opt-4');
      if (opt4) opt4.value = '';
    });
  }

  // Lock / Unlock Exam State
  el.btnToggleExam.addEventListener('click', handleToggleExamState);

  // Close Student Detail Modal
  if (el.btnCloseModal) {
    el.btnCloseModal.addEventListener('click', () => el.studentDetailModal.classList.add('hidden'));
  }
  if (el.btnCloseModalFooter) {
    el.btnCloseModalFooter.addEventListener('click', () => el.studentDetailModal.classList.add('hidden'));
  }
  if (el.studentDetailModal) {
    el.studentDetailModal.addEventListener('click', (e) => {
      if (e.target === el.studentDetailModal) {
        el.studentDetailModal.classList.add('hidden');
      }
    });
  }

  // Slide question navigation
  if (el.btnPrevQ) {
    el.btnPrevQ.addEventListener('click', () => {
      if (state.currentQuestionIdx > 0) {
        state.slideDirection = 'prev';
        state.currentQuestionIdx--;
        updateQuizSliderView();
      }
    });
  }
  if (el.btnNextQ) {
    el.btnNextQ.addEventListener('click', () => {
      if (state.currentQuestionIdx < state.questions.length - 1) {
        state.slideDirection = 'next';
        state.currentQuestionIdx++;
        updateQuizSliderView();
      }
    });
  }
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
  updateExamToggleButtonUI();
}

// ==========================================================================
// TAB ROUTING & POLLING MANAGEMENT
// ==========================================================================
function switchTab(tab) {
  state.activeTab = tab;
  
  if (tab === 'student') {
    stopCheatingDetection(); // Make sure no student events trigger on load
    
    if (state.nickname && state.roomCode) {
      // Check if user already submitted answers
      const alreadySubmitted = state.results.some(p => p.nickname.toLowerCase() === state.nickname.toLowerCase());
      if (alreadySubmitted) {
        stopQuizTimer();
        showView('view-score');
        startResultsPolling();
      } else {
        checkExamStateAndProceed();
      }
    } else {
      stopQuizTimer();
      showView('view-join');
      stopResultsPolling();
    }
  } else {
    // Admin View
    stopQuizTimer();
    stopExamStateCheck();
    showView('view-admin');
    if (el.displayRoomCode) {
      el.displayRoomCode.textContent = state.roomCode;
    }
    setupQrCode();
    fetchQuestions();
    fetchResults();
    startResultsPolling();
  }
}

function checkRoute() {
  applyLanguage(state.currentLang); // Apply saved/default language on load
  const path = window.location.pathname.toLowerCase().replace(/\/$/, "");
  
  if (path === '/admin') {
    if (state.adminToken) {
      if (state.roomCode) {
        switchTab('admin');
      } else {
        showView('view-admin-room-select');
      }
    } else {
      showView('view-admin-login');
    }
  } else {
    // Check if query contains ?room=xxxx
    const urlParams = new URLSearchParams(window.location.search);
    const roomParam = urlParams.get('room');
    if (roomParam && roomParam.match(/^\d{4}$/)) {
      state.roomCode = roomParam;
      sessionStorage.setItem('quiz_room_code', roomParam);
      if (el.studentRoomCodeInput) {
        el.studentRoomCodeInput.value = roomParam;
        el.studentRoomCodeInput.disabled = true; // Block edits
      }
    }

    if (state.nickname && state.roomCode) {
      fetchResults().then(() => {
        switchTab('student');
      });
    } else {
      switchTab('student');
    }
  }
}

// ==========================================================================
// SECURITY & CHEATING PREVENTION (Visibility API)
// ==========================================================================
function startCheatingDetection() {
  state.tabSwitches = 0;
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

function stopCheatingDetection() {
  document.removeEventListener('visibilitychange', handleVisibilityChange);
}

function handleVisibilityChange() {
  if (document.visibilityState === 'hidden') {
    state.tabSwitches++;
    reportProgress();
    alert(t('alert_cheating_warning'));
  }
}

function reportProgress() {
  if (!state.nickname || !state.roomCode) return;
  fetch(`${API_BASE}/api/progress`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nickname: state.nickname,
      roomCode: state.roomCode,
      currentQuestionIdx: state.currentQuestionIdx,
      tabSwitches: state.tabSwitches
    })
  }).catch(err => console.error("Error reporting progress:", err));
}

// ==========================================================================
// EXAM LOCK / SYNCHRONIZATION BEHAVIOR
// ==========================================================================
let quizTimerInterval = null;

function startQuizTimer(endTimeStr) {
  if (quizTimerInterval) clearInterval(quizTimerInterval);
  if (!endTimeStr) {
    el.quizTimerBanner.classList.add('hidden');
    return;
  }

  const endTime = new Date(endTimeStr).getTime();
  el.quizTimerBanner.classList.remove('hidden');

  function tick() {
    const now = new Date().getTime();
    const diff = endTime - now;

    if (diff <= 0) {
      clearInterval(quizTimerInterval);
      el.timerCountdown.textContent = "00:00";
      alert("제한 시간이 모두 경과하여 답안이 자동으로 제출됩니다.");
      handleQuizSubmit(null, true); // Trigger auto submit!
      return;
    }

    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (num) => String(num).padStart(2, '0');
    el.timerCountdown.textContent = `${pad(minutes)}:${pad(seconds)}`;

    // Flash background red if under 30 seconds
    if (diff < 30 * 1000) {
      el.quizTimerBanner.style.background = (seconds % 2 === 0) ? 'rgba(239, 68, 68, 0.25)' : 'rgba(239, 68, 68, 0.1)';
      el.quizTimerBanner.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    } else {
      el.quizTimerBanner.style.background = 'rgba(239, 68, 68, 0.1)';
      el.quizTimerBanner.style.borderColor = 'rgba(239, 68, 68, 0.2)';
    }
  }

  tick();
  quizTimerInterval = setInterval(tick, 1000);
}

function stopQuizTimer() {
  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }
  if (el.quizTimerBanner) {
    el.quizTimerBanner.classList.add('hidden');
  }
}

async function checkExamStateAndProceed() {
  try {
    const res = await fetch(`${API_BASE}/api/exam/state?roomCode=${state.roomCode}`);
    const data = await res.json();
    state.examState = data.examState;

    if (state.examState === 'locked') {
      showView('view-wait');
      updateLobbyStatus(data); // Update lobby status information!
      stopQuizTimer();
      startExamStateCheck();
    } else {
      stopExamStateCheck();
      await fetchQuestions(); // Fetch the questions and render them!
      showView('view-quiz');
      startCheatingDetection(); // Enable cheating prevention when quiz starts!
      startQuizTimer(data.examEndTime); // Start timer countdown!
    }
  } catch (error) {
    console.error("Error fetching exam state:", error);
    showView('view-quiz'); // Fallback in case of server error
  }
}

function startExamStateCheck() {
  if (state.examStateInterval) clearInterval(state.examStateInterval);
  state.examStateInterval = setInterval(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/exam/state?roomCode=${state.roomCode}`);
      const data = await res.json();
      if (data.examState === 'active') {
        stopExamStateCheck();
        await fetchQuestions(); // Fetch the questions and render them!
        showView('view-quiz');
        startCheatingDetection(); // Enable cheating prevention when quiz unlocks!
        startQuizTimer(data.examEndTime); // Start timer countdown!
      } else {
        updateLobbyStatus(data); // Keep lobby status updated!
      }
    } catch (e) {
      console.error(e);
    }
  }, 2000);
}

function stopExamStateCheck() {
  if (state.examStateInterval) {
    clearInterval(state.examStateInterval);
    state.examStateInterval = null;
  }
}

function updateLobbyStatus(data) {
  if (!el.waitInfoBox || !el.waitInfoText) return;
  if (data && data.questionCount > 0) {
    const qCount = data.questionCount;
    const tLimit = data.timeLimit || 0;
    
    let text = "";
    if (state.currentLang === 'ko') {
      text = `⏱️ 총 ${qCount}문항 출제됨 ${tLimit > 0 ? `(제한시간: ${tLimit}분)` : '(제한시간 없음)'}`;
    } else if (state.currentLang === 'vi') {
      text = `⏱️ Tổng số ${qCount} câu hỏi ${tLimit > 0 ? `(Thời gian: ${tLimit} phút)` : '(Không giới hạn)'}`;
    } else {
      text = `⏱️ Total ${qCount} questions ${tLimit > 0 ? `(Time Limit: ${tLimit}m)` : '(No Time Limit)'}`;
    }
    
    el.waitInfoText.textContent = text;
    el.waitInfoBox.classList.remove('hidden');
  } else {
    el.waitInfoBox.classList.add('hidden');
  }
}

// ==========================================================================
// IMAGE & QR HELPER FUNCTIONS
// ==========================================================================
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
  const views = [el.viewJoin, el.viewWait, el.viewQuiz, el.viewScore, el.viewAdminLogin, el.viewAdminRoomSelect, el.viewAdmin];
  views.forEach(v => {
    if (v.id === viewId) {
      v.classList.add('active');
    } else {
      v.classList.remove('active');
    }
  });
}

function startResultsPolling() {
  if (state.pollingInterval) clearInterval(state.pollingInterval);
  state.pollingInterval = setInterval(() => {
    fetchResults();
  }, 3000);
}

function stopResultsPolling() {
  if (state.pollingInterval) {
    clearInterval(state.pollingInterval);
    state.pollingInterval = null;
  }
}

let qrCodeInstance = null;

async function setupQrCode() {
  try {
    const hostname = window.location.hostname;
    const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.') || hostname.startsWith('10.') || hostname.startsWith('172.');
    
    let targetUrl = `${window.location.origin}/?room=${state.roomCode}`;
    
    if (isLocal) {
      try {
        const res = await fetch(`${API_BASE}/api/info`);
        if (res.ok) {
          const info = await res.json();
          const ip = info.localIp || '127.0.0.1';
          const port = info.port || 8000;
          if (ip !== '127.0.0.1') {
            targetUrl = `http://${ip}:${port}/?room=${state.roomCode}`;
          }
        }
      } catch (e) {
        console.error("Local IP fetch failed, falling back to window.location.origin", e);
      }
    }

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

// Helper to make authenticated requests to Admin APIs
function getAdminHeaders() {
  return {
    'Content-Type': 'application/json',
    'X-Admin-PIN': state.adminToken || ''
  };
}

// Handle Admin Authenticate (PIN check)
async function handleAdminLogin(e) {
  e.preventDefault();
  const pin = el.adminPinInput.value.trim();
  if (!pin) return;

  try {
    const res = await fetch(`${API_BASE}/api/admin/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin })
    });
    
    const data = await res.json();
    if (!res.ok) {
      alert(data.error || t('alert_pin_fail'));
      return;
    }

    state.adminToken = pin;
    sessionStorage.setItem('admin_token', pin);
    alert(t('alert_pin_success'));
    showView('view-admin-room-select');
  } catch (error) {
    console.error("Auth error:", error);
    alert(t('alert_server_error'));
  }
}

// Create New Room (Admin)
async function handleCreateRoom() {
  try {
    const res = await fetch(`${API_BASE}/api/room/create`, {
      method: 'POST',
      headers: getAdminHeaders()
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.error || '방 생성 실패');
      return;
    }

    state.roomCode = data.roomCode;
    sessionStorage.setItem('quiz_room_code', data.roomCode);
    alert(t('alert_room_created').replace('{code}', data.roomCode));
    switchTab('admin');
  } catch (error) {
    console.error("Room creation error:", error);
    alert(t('alert_server_error'));
  }
}

// Enter Existing Room (Admin)
async function handleEnterRoom(e) {
  e.preventDefault();
  const code = el.adminRoomCodeInput.value.trim();
  if (!code || code.length !== 4) {
    alert(t('alert_room_invalid'));
    return;
  }

  try {
    // Verify room existence by fetching its questions
    const res = await fetch(`${API_BASE}/api/questions?roomCode=${code}`);
    if (res.status === 404) {
      alert(t('alert_room_not_found'));
      return;
    }

    state.roomCode = code;
    sessionStorage.setItem('quiz_room_code', code);
    switchTab('admin');
  } catch (error) {
    console.error("Enter room error:", error);
    alert(t('alert_server_error'));
  }
}

// Fetch Questions
async function fetchQuestions() {
  try {
    const res = await fetch(`${API_BASE}/api/questions?roomCode=${state.roomCode}`);
    if (!res.ok) throw new Error('Failed to fetch questions');
    state.questions = await res.json();
    
    if (el.adminQuestionsCount) {
      el.adminQuestionsCount.textContent = state.questions.length;
    }
    
    renderStudentQuiz();
    renderAdminQuestions();
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
}

// Fetch Participant Results
async function fetchResults() {
  try {
    if (!state.roomCode) return;
    
    const headers = state.adminToken ? { 'X-Admin-PIN': state.adminToken } : {};
    const res = await fetch(`${API_BASE}/api/results?roomCode=${state.roomCode}`, { headers });
    
    if (res.status === 401) {
      return;
    }
    
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
  const roomCode = el.studentRoomCodeInput.value.trim();
  const nickname = el.studentNicknameInput.value.trim();
  
  if (!roomCode) {
    alert(t('alert_room_empty'));
    return;
  }
  if (!nickname) {
    alert(t('alert_join_empty'));
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/api/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nickname, roomCode })
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.error || t('alert_join_fail'));
      return;
    }

    state.nickname = data.nickname;
    state.roomCode = data.roomCode;
    sessionStorage.setItem('quiz_nickname', data.nickname);
    sessionStorage.setItem('quiz_room_code', data.roomCode);
    el.displayNickname.textContent = data.nickname;
    state.answers = {};
    
    checkExamStateAndProceed();
  } catch (error) {
    console.error('Error joining:', error);
    alert(t('alert_server_error'));
  }
}

// Handle Student Quiz Answers Submit
async function handleQuizSubmit(e, isAutoSubmit = false) {
  if (e && e.preventDefault) e.preventDefault();
  
  if (!state.nickname || !state.roomCode) {
    alert(t('alert_profile_missing'));
    switchTab('student');
    return;
  }

  if (!isAutoSubmit) {
    const unansweredCount = state.questions.length - Object.keys(state.answers).length;
    if (unansweredCount > 0) {
      const msg = t('alert_unanswered').replace('{count}', unansweredCount);
      if (!confirm(msg)) {
        return;
      }
    }
  }

  stopCheatingDetection();
  stopQuizTimer();

  try {
    const res = await fetch(`${API_BASE}/api/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nickname: state.nickname,
        roomCode: state.roomCode,
        answers: state.answers,
        tabSwitches: state.tabSwitches
      })
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.error || t('alert_submit_fail'));
      return;
    }

    await fetchResults();
    
    el.scorePercentage.textContent = data.score;
    el.scoreCorrectCount.textContent = `${data.correctCount} / ${data.totalCount}`;
    
    const timeString = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    el.scoreSubmitTime.textContent = timeString;
    
    showView('view-score');
    triggerConfetti(); // Trigger the beautiful celebration confetti!
    startResultsPolling();
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
  let correctAnswer = el.qCorrect.value.trim();
  
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
    const opt5 = document.getElementById('opt-4').value.trim();
    if (opt5) {
      options.push(opt5);
    }

    // Resolve index input (1-5 or A-E) to the actual option text
    const valLower = correctAnswer.toLowerCase();
    let optIdx = -1;
    if (correctAnswer.match(/^[1-5]$/)) {
      optIdx = parseInt(correctAnswer) - 1;
    } else if (valLower.match(/^[a-e]$/)) {
      optIdx = valLower.charCodeAt(0) - 97;
    }

    if (optIdx >= 0 && optIdx < options.length) {
      correctAnswer = options[optIdx];
      el.qCorrect.value = correctAnswer; // Update UI for visual confirmation
    }
  }

  const payload = { roomCode: state.roomCode, type, questionText, correctAnswer, options, imageUrl: state.currentQuestionImage };
  const method = state.editingQuestionId ? 'PUT' : 'POST';
  
  // Pass roomCode inside query parameter for PUT updates
  const endpoint = state.editingQuestionId 
    ? `${API_BASE}/api/questions/${state.editingQuestionId}?roomCode=${state.roomCode}`
    : `${API_BASE}/api/questions`;

  try {
    const res = await fetch(endpoint, {
      method,
      headers: getAdminHeaders(),
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || 'Failed to save question');
    }

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
    const res = await fetch(`${API_BASE}/api/questions/${qId}?roomCode=${state.roomCode}`, {
      method: 'DELETE',
      headers: getAdminHeaders()
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
      method: 'POST',
      headers: getAdminHeaders(),
      body: JSON.stringify({ roomCode: state.roomCode })
    });
    if (!res.ok) throw new Error('Failed to reset quiz data');

    sessionStorage.removeItem('quiz_nickname');
    state.nickname = null;
    state.answers = {};

    await fetchResults();
    alert(t('alert_reset_success'));
    
    if (state.activeTab === 'student') {
      switchTab('student');
    }
  } catch (error) {
    console.error('Error resetting quiz:', error);
    alert(t('alert_reset_fail'));
  }
}

// ==========================================================================
// EXAM START / LOCK TOGGLE (Admin)
// ==========================================================================
async function handleToggleExamState() {
  const nextState = state.examState === 'locked' ? 'active' : 'locked';
  const timeLimit = el.adminTimerInput ? (parseInt(el.adminTimerInput.value.trim()) || 0) : 0;

  try {
    const res = await fetch(`${API_BASE}/api/exam/state`, {
      method: 'POST',
      headers: getAdminHeaders(),
      body: JSON.stringify({ roomCode: state.roomCode, examState: nextState, timeLimit })
    });
    const data = await res.json();
    if (res.ok) {
      state.examState = data.examState;
      updateExamToggleButtonUI();
    } else {
      alert(data.error || "시험지 상태 변경 실패");
    }
  } catch (error) {
    console.error("Toggle exam state error:", error);
  }
}

function updateExamToggleButtonUI() {
  if (!el.btnToggleExam) return;
  
  const iconEl = el.btnToggleExam.querySelector('i, svg');
  if (state.examState === 'active') {
    el.btnToggleExam.className = "btn btn-danger btn-block btn-sm";
    el.toggleExamText.textContent = t('toggle_exam_text_locked') || "Lock Exam";
    if (iconEl) iconEl.setAttribute('data-lucide', 'lock');
  } else {
    el.btnToggleExam.className = "btn btn-emerald btn-block btn-sm";
    el.toggleExamText.textContent = t('toggle_exam_text_start') || "Start Exam";
    if (iconEl) iconEl.setAttribute('data-lucide', 'unlock');
  }
  lucide.createIcons();
}

// ==========================================================================
// QUESTION BACKUP & RESTORE (Admin Export/Import JSON)
// ==========================================================================
function handleExportQuestions() {
  if (state.questions.length === 0) {
    alert("No questions to export.");
    return;
  }
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.questions, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `quiz_questions_backup_room_${state.roomCode}_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function handleImportQuestions(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async (event) => {
    try {
      const parsedJson = JSON.parse(event.target.result);
      const listToImport = Array.isArray(parsedJson) ? parsedJson : (parsedJson.questions || null);
      if (!listToImport || !Array.isArray(listToImport)) {
        throw new Error("Invalid json format");
      }

      const res = await fetch(`${API_BASE}/api/questions/import`, {
        method: 'POST',
        headers: getAdminHeaders(),
        body: JSON.stringify({ roomCode: state.roomCode, questions: listToImport })
      });

      const data = await res.json();
      if (res.ok) {
        alert(t('alert_import_success'));
        fetchQuestions();
      } else {
        alert(data.error || t('alert_import_fail'));
      }
    } catch (err) {
      console.error(err);
      alert(t('alert_import_fail'));
    } finally {
      el.importFile.value = ''; // Reset input
    }
  };
  reader.readAsText(file);
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
    if (el.quizNavBar) el.quizNavBar.classList.add('hidden');
    if (el.quizSubmitContainer) el.quizSubmitContainer.classList.add('hidden');
    lucide.createIcons();
    updateProgressBar();
    return;
  }

  // Ensure index is within bounds
  if (state.currentQuestionIdx >= state.questions.length) {
    state.currentQuestionIdx = 0;
  }

  state.questions.forEach((q, idx) => {
    const qCard = document.createElement('div');
    qCard.className = 'card question-card student-question-slide';
    qCard.style.animationDelay = '0s'; // Reset delay for slider

    // Number Badge
    const badge = document.createElement('span');
    badge.className = 'q-num-badge';
    badge.textContent = `Q ${idx + 1}`;
    qCard.appendChild(badge);

    // Question Text
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
        marker.textContent = String.fromCharCode(65 + optIdx); // A, B, C, D, E
        
        const label = document.createElement('span');
        label.textContent = opt;

        btn.appendChild(marker);
        btn.appendChild(label);

        btn.addEventListener('click', () => {
          const siblings = optionsGrid.querySelectorAll('.option-btn');
          siblings.forEach(s => s.classList.remove('selected'));
          btn.classList.add('selected');
          state.answers[q.id] = opt;
          updateProgressBar();
        });

        optionsGrid.appendChild(btn);
      });
      qCard.appendChild(optionsGrid);
    } else {
      const saContainer = document.createElement('div');
      saContainer.className = 'short-answer-input-container';

      const textarea = document.createElement('textarea');
      textarea.rows = 2;
      textarea.placeholder = t('short_answer_placeholder_text');
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

  // Enable slider UI
  if (el.quizNavBar) el.quizNavBar.classList.remove('hidden');
  updateQuizSliderView();
  updateProgressBar();
  lucide.createIcons();
}

function updateQuizSliderView() {
  const slides = el.questionsContainer.querySelectorAll('.student-question-slide');
  if (slides.length === 0) return;
  
  slides.forEach((slide, idx) => {
    slide.classList.remove('slide-active', 'slide-prev-direction');
    if (idx === state.currentQuestionIdx) {
      slide.classList.add('slide-active');
      if (state.slideDirection === 'prev') {
        slide.classList.add('slide-prev-direction');
      }
    }
  });

  // Update indicators
  if (el.quizQIndicator) {
    el.quizQIndicator.textContent = `${state.currentQuestionIdx + 1} / ${state.questions.length}`;
  }

  // Update buttons state
  if (el.btnPrevQ) {
    el.btnPrevQ.disabled = (state.currentQuestionIdx === 0);
  }

  if (state.currentQuestionIdx === state.questions.length - 1) {
    if (el.btnNextQ) el.btnNextQ.classList.add('hidden');
    if (el.quizSubmitContainer) el.quizSubmitContainer.classList.remove('hidden');
  } else {
    if (el.btnNextQ) el.btnNextQ.classList.remove('hidden');
    if (el.quizSubmitContainer) el.quizSubmitContainer.classList.add('hidden');
  }

  // Report index to server
  reportProgress();
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

    const actions = document.createElement('div');
    actions.className = 'q-item-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'btn-icon edit';
    editBtn.title = t('btn_edit');
    editBtn.innerHTML = '<i data-lucide="edit-3"></i>';
    editBtn.addEventListener('click', () => editQuestion(q));

    const delBtn = document.createElement('button');
    delBtn.className = 'btn-icon delete';
    delBtn.title = t('btn_delete');
    delBtn.innerHTML = '<i data-lucide="trash-2"></i>';
    delBtn.addEventListener('click', () => deleteQuestion(q.id));

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);
    header.appendChild(actions);
    item.appendChild(header);

    const body = document.createElement('div');
    body.className = 'admin-question-body';
    body.textContent = q.questionText;
    item.appendChild(body);

    if (q.imageUrl) {
      const img = document.createElement('img');
      img.src = q.imageUrl;
      img.className = 'question-image';
      img.style.maxHeight = '120px';
      img.alt = 'Question Image';
      item.appendChild(img);
    }

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

    const corr = document.createElement('div');
    corr.className = 'admin-question-correct text-emerald';
    corr.innerHTML = `<i data-lucide="check-circle-2"></i> ${t('q_preview_correct')}: <strong>${q.correctAnswer}</strong>`;
    item.appendChild(corr);

    // Calculate Correct Rate Statistics
    const submittedParticipants = state.results.filter(p => p.score !== null);
    const totalSubmitted = submittedParticipants.length;
    let statsHtml = '';
    
    if (totalSubmitted === 0) {
      statsHtml = `<span style="font-size: 0.78rem; font-weight: 500; color: var(--text-muted);"><i data-lucide="info" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle; margin-right: 3px;"></i>${t('stats_correct_rate_empty')}</span>`;
    } else {
      let correctCount = 0;
      submittedParticipants.forEach(p => {
        const userAns = p.answers && p.answers[q.id];
        if (userAns && String(userAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase()) {
          correctCount++;
        }
      });
      const rate = Math.round((correctCount / totalSubmitted) * 100);
      
      let rateColor = '#ef4444'; // Red
      if (rate >= 70) {
        rateColor = '#10b981'; // Green
      } else if (rate >= 40) {
        rateColor = '#f59e0b'; // Orange
      }
      
      const formatStr = t('stats_correct_rate_format')
        .replace('{rate}', rate)
        .replace('{total}', totalSubmitted)
        .replace('{correct}', correctCount);
        
      statsHtml = `<span style="font-size: 0.78rem; font-weight: 700; color: ${rateColor}; display: flex; align-items: center; gap: 0.3rem;"><i data-lucide="pie-chart" style="width: 13px; height: 13px;"></i>${formatStr}</span>`;
    }
    
    const statsContainer = document.createElement('div');
    statsContainer.style.marginTop = '0.5rem';
    statsContainer.style.padding = '0.4rem 0.6rem';
    statsContainer.style.background = 'rgba(255, 255, 255, 0.02)';
    statsContainer.style.border = '1px dashed var(--border-color)';
    statsContainer.style.borderRadius = 'var(--radius-sm)';
    statsContainer.innerHTML = statsHtml;
    item.appendChild(statsContainer);

    el.adminQuestionsList.appendChild(item);
  });

  lucide.createIcons();
}

// 3. Render Leaderboards (Student Rank and Admin Monitor)
function renderLeaderboards() {
  el.studentLeaderboardBody.innerHTML = '';
  el.adminLeaderboardBody.innerHTML = '';

  if (state.results.length === 0) {
    const emptyRow = `
      <tr>
        <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 2rem;">
          ${t('leaderboard_empty')}
        </td>
      </tr>
    `;
    el.studentLeaderboardBody.innerHTML = emptyRow;
    el.adminLeaderboardBody.innerHTML = emptyRow;
    return;
  }

  // Filter completed participants for the student scoreboard
  const completedResults = state.results.filter(p => p.score !== null);
  
  if (completedResults.length === 0) {
    el.studentLeaderboardBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">
          ${t('leaderboard_empty')}
        </td>
      </tr>
    `;
  } else {
    completedResults.forEach((p, idx) => {
      const rank = idx + 1;
      const isCurrentUser = state.nickname && p.nickname.toLowerCase() === state.nickname.toLowerCase();
      
      let rankBadgeClass = 'rank-other';
      if (rank === 1) rankBadgeClass = 'rank-1';
      else if (rank === 2) rankBadgeClass = 'rank-2';
      else if (rank === 3) rankBadgeClass = 'rank-3';

      const rankBadge = `<span class="rank-badge ${rankBadgeClass}">${rank}</span>`;
      const time = new Date(p.submittedAt);
      const timeStr = time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

      const studentRow = document.createElement('tr');
      if (isCurrentUser) studentRow.style.backgroundColor = 'rgba(99, 102, 241, 0.08)';
      studentRow.innerHTML = `
        <td>${rankBadge}</td>
        <td><strong>${p.nickname}</strong> ${isCurrentUser ? `<span class="text-gold">(${state.currentLang === 'ko' ? '나' : (state.currentLang === 'vi' ? 'Tôi' : 'You')})</span>` : ''}</td>
        <td>${Number(p.correctCount).toString()} / ${p.totalCount}</td>
        <td><span class="text-emerald" style="font-weight: 800;">${p.score}${t('score_label')}</span></td>
        <td style="color: var(--text-muted); font-size: 0.8rem;">${timeStr}</td>
      `;
      el.studentLeaderboardBody.appendChild(studentRow);
    });
  }

  // Admin Dashboard displays all participants (completed and in-progress)
  state.results.forEach((p, idx) => {
    const rank = idx + 1;
    let rankBadgeClass = 'rank-other';
    if (rank === 1) rankBadgeClass = 'rank-1';
    else if (rank === 2) rankBadgeClass = 'rank-2';
    else if (rank === 3) rankBadgeClass = 'rank-3';

    const rankBadge = `<span class="rank-badge ${rankBadgeClass}">${rank}</span>`;
    
    const isCompleted = p.score !== null;
    let timeStr = '-';
    if (isCompleted && p.submittedAt) {
      const time = new Date(p.submittedAt);
      timeStr = time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    const switches = p.tabSwitches || 0;
    let switchClass = '';
    if (switches > 3) switchClass = 'switch-warn-red';
    else if (switches > 0) switchClass = 'switch-warn-orange';

    const qIndex = p.currentQuestionIdx !== undefined ? p.currentQuestionIdx : 0;
    const totalQ = p.totalCount || state.questions.length || 1;
    const progressLabel = state.currentLang === 'ko' 
      ? `진행 중 (Q${qIndex + 1}/${totalQ})` 
      : (state.currentLang === 'vi' 
        ? `Đang thi (Q${qIndex + 1}/${totalQ})` 
        : `In Progress (Q${qIndex + 1}/${totalQ})`);

    const statusBadge = isCompleted 
      ? `<span class="status-badge status-completed">${t('state_completed')}</span>`
      : `<span class="status-badge status-pending" style="background: rgba(245, 158, 11, 0.1); color: #f59e0b; padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.75rem; border: 1px solid rgba(245, 158, 11, 0.2); font-weight: 600;">${progressLabel}</span>`;

    const scoreText = isCompleted
      ? `<span style="font-weight: 700;">${p.score}%</span> (${Number(p.correctCount).toString()}/${p.totalCount})`
      : `-`;

    const adminRow = document.createElement('tr');
    
    if (isCompleted) {
      adminRow.style.cursor = 'pointer';
      adminRow.title = state.currentLang === 'ko' ? "클릭하여 상세 답안지 확인" : (state.currentLang === 'vi' ? "Click để xem chi tiết bài làm" : "Click to view detailed answer sheet");
      adminRow.addEventListener('click', () => {
        showStudentDetailModal(p);
      });
    } else {
      adminRow.style.opacity = '0.75';
      adminRow.title = state.currentLang === 'ko' ? "현재 시험 진행 중인 학생입니다" : (state.currentLang === 'vi' ? "Thí sinh đang làm bài" : "Student is currently taking the exam");
    }

    adminRow.innerHTML = `
      <td>${rankBadge}</td>
      <td><strong>${p.nickname}</strong></td>
      <td>${statusBadge}</td>
      <td>${scoreText}</td>
      <td><span class="${switchClass}">${switches}</span></td>
      <td style="color: var(--text-muted); font-size: 0.8rem;">${timeStr}</td>
    `;
    el.adminLeaderboardBody.appendChild(adminRow);
  });
}

function showStudentDetailModal(p) {
  if (!el.studentDetailModal) return;
  
  el.modalStudentName.textContent = p.nickname;
  el.modalStudentAnswersList.innerHTML = '';
  
  state.questions.forEach((q, idx) => {
    const qCard = document.createElement('div');
    qCard.className = 'modal-q-card';
    
    const meta = document.createElement('div');
    meta.className = 'modal-q-meta';
    
    const num = document.createElement('span');
    num.textContent = t('detail_q_num').replace('{num}', idx + 1);
    meta.appendChild(num);
    
    const typeBadge = document.createElement('span');
    typeBadge.className = `q-type-badge ${q.type === 'multiple-choice' ? 'type-mcq' : 'type-sa'}`;
    typeBadge.style.fontSize = '0.7rem';
    typeBadge.style.padding = '0.1rem 0.3rem';
    typeBadge.textContent = q.type === 'multiple-choice' ? t('q_type_mcq_short') : t('q_type_sa_short');
    meta.appendChild(typeBadge);
    
    qCard.appendChild(meta);
    
    const text = document.createElement('div');
    text.className = 'modal-q-text';
    text.textContent = q.questionText;
    qCard.appendChild(text);
    
    if (q.imageUrl) {
      const img = document.createElement('img');
      img.src = q.imageUrl;
      img.style.maxHeight = '80px';
      img.style.borderRadius = 'var(--radius-sm)';
      img.style.objectFit = 'contain';
      qCard.appendChild(img);
    }
    
    // User answer
    const userAns = p.answers && p.answers[q.id] !== undefined ? p.answers[q.id] : '';
    const userAnsStr = userAns !== '' ? String(userAns).trim() : t('detail_unanswered');
    
    // Determine the current grade (1.0 to 0.0)
    const isCorrectExact = userAns !== '' && String(userAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
    const currentGrade = p.grades && p.grades[q.id] !== undefined ? p.grades[q.id] : (isCorrectExact ? 1.0 : 0.0);
    
    let ansRowClass = 'incorrect';
    let ansRowIcon = 'x-circle';
    let gradeLabel = '0%';
    
    if (Math.abs(currentGrade - 1.0) < 0.01) {
      ansRowClass = 'correct';
      ansRowIcon = 'check-circle';
      gradeLabel = '100%';
    } else if (currentGrade > 0.0) {
      ansRowClass = 'partial';
      ansRowIcon = 'alert-circle';
      gradeLabel = `${Math.round(currentGrade * 100)}%`;
    }
    
    const userAnsRow = document.createElement('div');
    userAnsRow.className = `modal-ans-row ${ansRowClass}`;
    
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', ansRowIcon);
    icon.style.width = '16px';
    icon.style.height = '16px';
    
    const textSpan = document.createElement('span');
    textSpan.innerHTML = `${t('detail_user_ans')}: <strong>${userAnsStr}</strong> (${gradeLabel})`;
    
    userAnsRow.appendChild(icon);
    userAnsRow.appendChild(textSpan);
    qCard.appendChild(userAnsRow);
    
    // If not fully correct, show correct answer reference
    if (Math.abs(currentGrade - 1.0) >= 0.01) {
      const correctRow = document.createElement('div');
      correctRow.style.fontSize = '0.85rem';
      correctRow.style.color = '#34d399';
      correctRow.style.paddingLeft = '0.5rem';
      correctRow.style.marginTop = '0.2rem';
      correctRow.innerHTML = `<i data-lucide="check" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>${t('detail_correct_ans')}: <strong>${q.correctAnswer}</strong>`;
      qCard.appendChild(correctRow);
    }
    
    // Teacher manual override controls
    const controlsRow = document.createElement('div');
    controlsRow.style.display = 'flex';
    controlsRow.style.gap = '0.4rem';
    controlsRow.style.marginTop = '0.5rem';
    controlsRow.style.justifyContent = 'flex-end';
    controlsRow.style.alignItems = 'center';
    
    const createPresetBtn = (label, val, activeColor) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.style.padding = '0.2rem 0.5rem';
      btn.style.fontSize = '0.72rem';
      btn.style.borderRadius = 'var(--radius-sm)';
      btn.style.border = '1px solid var(--border-color)';
      btn.style.cursor = 'pointer';
      btn.style.transition = 'all 0.2s';
      
      const isSelected = Math.abs(currentGrade - val) < 0.01;
      if (isSelected) {
        btn.style.background = activeColor;
        btn.style.color = '#ffffff';
        btn.style.borderColor = activeColor;
        btn.style.fontWeight = 'bold';
      } else {
        btn.style.background = 'rgba(255, 255, 255, 0.04)';
        btn.style.color = 'var(--text-muted)';
        btn.style.borderColor = 'var(--border-color)';
      }
      
      btn.textContent = label;
      
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        await overrideGrade(p.nickname, q.id, val);
        await fetchResults();
        const updatedP = state.results.find(resP => resP.nickname.toLowerCase() === p.nickname.toLowerCase());
        if (updatedP) {
          showStudentDetailModal(updatedP);
        }
      });
      
      return btn;
    };
    
    const btnCorrect = createPresetBtn(state.currentLang === 'ko' ? '정답 (1.0)' : (state.currentLang === 'vi' ? 'Đúng (1.0)' : 'Correct (1.0)'), 1.0, '#10b981');
    const btnIncorrect = createPresetBtn(state.currentLang === 'ko' ? '오답 (0.0)' : (state.currentLang === 'vi' ? 'Sai (0.0)' : 'Incorrect (0.0)'), 0.0, '#ef4444');
    
    // Direct input box for custom partial score
    const inputLabel = document.createElement('label');
    inputLabel.style.fontSize = '0.72rem';
    inputLabel.style.color = 'var(--text-muted)';
    inputLabel.textContent = state.currentLang === 'ko' ? '점수:' : (state.currentLang === 'vi' ? 'Điểm:' : 'Score:');
    
    const scoreInput = document.createElement('input');
    scoreInput.type = 'number';
    scoreInput.min = '0.0';
    scoreInput.max = '1.0';
    scoreInput.step = '0.1';
    scoreInput.value = Number(currentGrade).toString();
    scoreInput.style.width = '55px';
    scoreInput.style.height = '24px';
    scoreInput.style.textAlign = 'center';
    scoreInput.style.background = 'rgba(0,0,0,0.2)';
    scoreInput.style.border = '1px solid var(--border-color)';
    scoreInput.style.borderRadius = 'var(--radius-sm)';
    scoreInput.style.color = 'var(--text-light)';
    scoreInput.style.fontSize = '0.75rem';
    scoreInput.style.fontWeight = 'bold';
    
    scoreInput.addEventListener('change', async (e) => {
      e.stopPropagation();
      let val = parseFloat(scoreInput.value);
      if (isNaN(val) || val < 0.0 || val > 1.0) {
        alert(state.currentLang === 'ko' ? "0.0에서 1.0 사이의 값을 입력하세요." : "Please enter a value between 0.0 and 1.0.");
        scoreInput.value = Number(currentGrade).toString();
        return;
      }
      val = Math.round(val * 100) / 100;
      await overrideGrade(p.nickname, q.id, val);
      await fetchResults();
      const updatedP = state.results.find(resP => resP.nickname.toLowerCase() === p.nickname.toLowerCase());
      if (updatedP) {
        showStudentDetailModal(updatedP);
      }
    });
    
    controlsRow.appendChild(btnCorrect);
    controlsRow.appendChild(btnIncorrect);
    controlsRow.appendChild(inputLabel);
    controlsRow.appendChild(scoreInput);
    
    qCard.appendChild(controlsRow);
    
    el.modalStudentAnswersList.appendChild(qCard);
  });
  
  el.studentDetailModal.classList.remove('hidden');
  lucide.createIcons();
}

async function overrideGrade(nickname, questionId, gradeValue) {
  try {
    const res = await fetch(`${API_BASE}/api/grade/override`, {
      method: 'POST',
      headers: getAdminHeaders(),
      body: JSON.stringify({
        roomCode: state.roomCode,
        nickname: nickname,
        questionId: questionId,
        grade: gradeValue
      })
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.error || "성적 수정 실패");
    }
  } catch (error) {
    console.error("Error overriding grade:", error);
    alert("서버 연결 실패");
  }
}

// 4. Update Stats Box in Admin
function updateAdminStats() {
  const total = state.results.length;
  if (el.statTotalPlayers) el.statTotalPlayers.textContent = total;

  if (total === 0) {
    if (el.statAvgScore) el.statAvgScore.textContent = '0%';
    if (el.statHardestQ) el.statHardestQ.style.display = 'none';
    return;
  }

  // Calculate Average Score of completed participants
  const completedParticipants = state.results.filter(p => p.score !== null);
  if (completedParticipants.length > 0) {
    const sum = completedParticipants.reduce((acc, curr) => acc + (curr.score || 0), 0);
    const avg = Math.round(sum / completedParticipants.length);
    if (el.statAvgScore) el.statAvgScore.textContent = `${avg}%`;
  } else {
    if (el.statAvgScore) el.statAvgScore.textContent = '0%';
  }

  // Calculate Hardest Question
  if (completedParticipants.length > 0 && state.questions.length > 0 && el.statHardestQ) {
    let hardestQIdx = -1;
    let lowestRate = 101; // higher than 100%

    state.questions.forEach((q, idx) => {
      let correctCount = 0;
      completedParticipants.forEach(p => {
        const isCorrectExact = p.answers && p.answers[q.id] !== undefined && String(p.answers[q.id]).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
        const currentGrade = p.grades && p.grades[q.id] !== undefined ? p.grades[q.id] : (isCorrectExact ? 1.0 : 0.0);
        correctCount += currentGrade;
      });
      const rate = (correctCount / completedParticipants.length) * 100;
      if (rate < lowestRate) {
        lowestRate = rate;
        hardestQIdx = idx;
      }
    });

    if (hardestQIdx !== -1 && lowestRate < 100) {
      const errRate = Math.round(100 - lowestRate);
      let label = "";
      if (state.currentLang === 'ko') {
        label = `🔥 가장 많이 틀린 문제: Q${hardestQIdx + 1} (오답률 ${errRate}%)`;
      } else if (state.currentLang === 'vi') {
        label = `🔥 Câu sai nhiều nhất: Q${hardestQIdx + 1} (Tỉ lệ sai ${errRate}%)`;
      } else {
        label = `🔥 Hardest Question: Q${hardestQIdx + 1} (${errRate}% Incorrect)`;
      }
      el.statHardestQ.textContent = label;
      el.statHardestQ.style.display = 'inline-block';
    } else {
      el.statHardestQ.style.display = 'none';
    }
  } else {
    if (el.statHardestQ) el.statHardestQ.style.display = 'none';
  }
}

// ==========================================================================
// ADMIN QUESTION FORM BEHAVIORS
// ==========================================================================
function showQuestionForm(titleKey = 'admin_form_new', q = null) {
  el.questionFormContainer.classList.remove('hidden');
  el.questionFormTitle.textContent = t(titleKey);
  
  if (q) {
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
        const optInput = document.getElementById(`opt-${idx}`);
        if (optInput) optInput.value = opt;
      });
      // If editing a 4-choice question, ensure Option 5 input is cleared
      if (q.options.length < 5) {
        const opt4 = document.getElementById('opt-4');
        if (opt4) opt4.value = '';
      }
    } else {
      el.mcqOptionsContainer.classList.add('hidden');
      toggleMcqOptionsRequired(false);
      clearMcqOptionFields();
    }
  } else {
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

// Edit existing question
function editQuestion(q) {
  showQuestionForm('admin_form_edit', q);
}

function clearMcqOptionFields() {
  for (let i = 0; i < 5; i++) {
    const elOpt = document.getElementById(`opt-${i}`);
    if (elOpt) elOpt.value = '';
  }
}

function toggleMcqOptionsRequired(isRequired) {
  // Only option fields 1 to 4 are strictly required for multiple choice.
  for (let i = 0; i < 4; i++) {
    const elOpt = document.getElementById(`opt-${i}`);
    if (elOpt) elOpt.required = isRequired;
  }
}

// Celebration Confetti HTML5 Canvas generator
function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.id = 'confetti-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const colors = ['#6366f1', '#a855f7', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];
  const particles = [];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height - height, // Start above screen
      r: Math.random() * 6 + 4,
      d: Math.random() * height,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0
    });
  }

  let animationId;
  function draw() {
    ctx.clearRect(0, 0, width, height);
    let active = false;

    particles.forEach((p, idx) => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.x += Math.sin(p.tiltAngle);
      p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;

      if (p.y <= height) {
        active = true;
      }

      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();
    });

    if (active) {
      animationId = requestAnimationFrame(draw);
    } else {
      canvas.remove();
    }
  }

  draw();
  setTimeout(() => {
    cancelAnimationFrame(animationId);
    canvas.remove();
  }, 6000);
}
