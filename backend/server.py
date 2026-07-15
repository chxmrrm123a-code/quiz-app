import http.server
import json
import os
import re
import urllib.parse
import socket
import random
from datetime import datetime, timedelta

# Define base paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, 'data', 'db.json')
FRONTEND_DIR = os.path.abspath(os.path.join(BASE_DIR, '..', 'frontend'))

DEFAULT_QUESTIONS = [
    {
        "id": "q1",
        "type": "multiple-choice",
        "questionText": "대한민국의 수도는 어디인가요?",
        "options": ["부산", "인천", "서울", "대구"],
        "correctAnswer": "서울",
        "imageUrl": None
    },
    {
        "id": "q2",
        "type": "short-answer",
        "questionText": "인터넷 브라우저에서 웹페이지를 구조화하는 데 사용되는 기본 마크업 언어의 약자(영어 4글자)는 무엇인가요?",
        "correctAnswer": "HTML",
        "imageUrl": None
    },
    {
        "id": "q3",
        "type": "multiple-choice",
        "questionText": "다음 중 자바스크립트(JavaScript)의 기본 데이터 타입이 아닌 것은 무엇인가요?",
        "options": ["Number", "String", "Boolean", "Class"],
        "correctAnswer": "Class",
        "imageUrl": None
    }
]

# Ensure data directory and db.json exist
os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
if not os.path.exists(DB_PATH):
    default_db = {
        "rooms": {}
    }
    with open(DB_PATH, 'w', encoding='utf-8') as f:
        json.dump(default_db, f, indent=2, ensure_ascii=False)


def read_db():
    try:
        with open(DB_PATH, 'r', encoding='utf-8') as f:
            db = json.load(f)
            if "rooms" not in db:
                db["rooms"] = {}
            return db
    except Exception as e:
        print(f"Error reading database: {e}")
        return {"rooms": {}}


def write_db(data):
    try:
        with open(DB_PATH, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f"Error writing database: {e}")


def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('10.254.254.254', 1))
        ip = s.getsockname()[0]
    except Exception:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip


class QuizRequestHandler(http.server.BaseHTTPRequestHandler):

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, X-Admin-PIN')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def check_admin_auth(self):
        auth_pin = self.headers.get('X-Admin-PIN', '')
        correct_pin = os.environ.get('ADMIN_PIN', '1234')
        if auth_pin != correct_pin:
            self.send_error_response(401, "인증 실패: 잘못된 PIN 번호입니다.")
            return False
        return True

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path
        query = urllib.parse.parse_qs(parsed_url.query)

        # Helper to get parameter
        room_code = query.get('roomCode', [None])[0]

        # --- API Endpoints ---
        if path == '/api/questions':
            if not room_code:
                self.send_error_response(400, "방 번호(roomCode)가 필요합니다.")
                return
            db = read_db()
            room = db.get("rooms", {}).get(room_code)
            if not room:
                self.send_json_response(200, []) # Return empty if room doesn't exist yet
                return
            self.send_json_response(200, room.get("questions", []))
            return
        
        elif path == '/api/info':
            self.send_json_response(200, {
                "localIp": get_local_ip(),
                "port": self.server.server_address[1]
            })
            return

        elif path == '/api/exam/state':
            if not room_code:
                self.send_error_response(400, "방 번호(roomCode)가 필요합니다.")
                return
            db = read_db()
            room = db.get("rooms", {}).get(room_code)
            if not room:
                self.send_json_response(200, {"examState": "locked", "timeLimit": 0, "examEndTime": None, "questionCount": 0})
                return
            self.send_json_response(200, {
                "examState": room.get("examState", "locked"),
                "timeLimit": room.get("timeLimit", 0),
                "examEndTime": room.get("examEndTime", None),
                "questionCount": len(room.get("questions", []))
            })
            return
        
        elif path == '/api/results':
            if not room_code:
                self.send_error_response(400, "방 번호(roomCode)가 필요합니다.")
                return

            db = read_db()
            room = db.get("rooms", {}).get(room_code)
            if not room:
                self.send_json_response(200, [])
                return

            auth_pin = self.headers.get('X-Admin-PIN', '')
            correct_pin = os.environ.get('ADMIN_PIN', '1234')
            is_admin = (auth_pin == correct_pin)

            participants = room.get("participants", [])
            
            # Filter and sanitize results based on admin role
            results = []
            for p in participants:
                if is_admin:
                    # Admin sees everything (including in-progress and tab switches)
                    results.append(p)
                elif p.get("score") is not None:
                    # Students only see completed participants without answers/cheating details
                    results.append({
                        "nickname": p["nickname"],
                        "score": p["score"],
                        "correctCount": p["correctCount"],
                        "totalCount": p["totalCount"],
                        "submittedAt": p["submittedAt"]
                    })
            
            # Sort by completion (completed first), then by score desc, then by speed (submittedAt asc)
            def get_sort_key(p):
                score = p.get("score")
                if score is not None:
                    sub_time = p.get("submittedAt", "")
                    try:
                        ts = datetime.fromisoformat(sub_time.replace("Z", "+00:00")).timestamp()
                    except Exception:
                        ts = 9999999999
                    return (0, -score, ts)
                else:
                    return (1, 0, p.get("nickname", "").lower())
            
            results.sort(key=get_sort_key)
            self.send_json_response(200, results)
            return

        # --- Static File Serving ---
        else:
            if path == '/' or path == '/admin':
                file_path = os.path.join(FRONTEND_DIR, 'index.html')
            else:
                clean_path = path.lstrip('/')
                file_path = os.path.join(FRONTEND_DIR, clean_path)

            real_file_path = os.path.abspath(file_path)
            if not real_file_path.startswith(FRONTEND_DIR):
                self.send_error_response(403, "Access Denied")
                return

            if os.path.exists(real_file_path) and os.path.isfile(real_file_path):
                self.serve_static_file(real_file_path)
            else:
                fallback_path = os.path.join(FRONTEND_DIR, 'index.html')
                if os.path.exists(fallback_path):
                    self.serve_static_file(fallback_path)
                else:
                    self.send_error_response(404, "File Not Found")

    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path

        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        
        try:
            body = json.loads(post_data.decode('utf-8')) if post_data else {}
        except Exception:
            self.send_error_response(400, "Invalid JSON body")
            return

        # Check Admin credentials
        if path == '/api/admin/auth':
            pin = body.get('pin', '').strip()
            correct_pin = os.environ.get('ADMIN_PIN', '1234')
            if pin == correct_pin:
                self.send_json_response(200, {"success": True, "token": "admin-authorized"})
            else:
                self.send_error_response(401, "잘못된 PIN 번호입니다.")
            return

        # Create new quiz room (Admin)
        elif path == '/api/room/create':
            if not self.check_admin_auth(): return

            db = read_db()
            rooms = db.get("rooms", {})

            # Generate unique 4-digit code
            room_code = None
            for _ in range(50):
                candidate = str(random.randint(1000, 9999))
                if candidate not in rooms:
                    room_code = candidate
                    break
            
            if not room_code:
                self.send_error_response(500, "방 코드를 생성할 수 없습니다. 다시 시도해 주세요.")
                return

            # Initialize room
            db["rooms"][room_code] = {
                "questions": DEFAULT_QUESTIONS.copy(),
                "participants": [],
                "examState": "locked",
                "timeLimit": 0,
                "examEndTime": None,
                "createdAt": datetime.utcnow().isoformat() + "Z"
            }
            write_db(db)

            self.send_json_response(201, {"success": True, "roomCode": room_code})
            return

        # Record screen switch (Student)
        elif path == '/api/tabswitch':
            nickname = body.get('nickname', '').strip()
            room_code = str(body.get('roomCode', '')).strip()
            tab_switches = int(body.get('tabSwitches', 0))

            if not nickname or not room_code:
                self.send_error_response(400, "Nickname and roomCode are required")
                return

            db = read_db()
            rooms = db.get("rooms", {})
            if room_code not in rooms:
                self.send_error_response(404, "Room not found")
                return

            participants = rooms[room_code].get("participants", [])
            user_idx = next((i for i, p in enumerate(participants) if p["nickname"].lower() == nickname.lower()), -1)
            
            if user_idx == -1:
                self.send_error_response(404, "Participant not found")
                return

            db["rooms"][room_code]["participants"][user_idx]["tabSwitches"] = tab_switches
            write_db(db)

            self.send_json_response(200, {"success": True, "tabSwitches": tab_switches})
            return

        # Record live student progress (Student)
        elif path == '/api/progress':
            nickname = body.get('nickname', '').strip()
            room_code = str(body.get('roomCode', '')).strip()
            current_q_idx = int(body.get('currentQuestionIdx', 0))
            tab_switches = int(body.get('tabSwitches', 0))

            if not nickname or not room_code:
                self.send_error_response(400, "Nickname and roomCode are required")
                return

            db = read_db()
            rooms = db.get("rooms", {})
            if room_code not in rooms:
                self.send_error_response(404, "Room not found")
                return

            participants = rooms[room_code].get("participants", [])
            user_idx = next((i for i, p in enumerate(participants) if p["nickname"].lower() == nickname.lower()), -1)
            
            if user_idx == -1:
                self.send_error_response(404, "Participant not found")
                return

            db["rooms"][room_code]["participants"][user_idx]["currentQuestionIdx"] = current_q_idx
            db["rooms"][room_code]["participants"][user_idx]["tabSwitches"] = tab_switches
            write_db(db)

            self.send_json_response(200, {"success": True, "currentQuestionIdx": current_q_idx, "tabSwitches": tab_switches})
            return

        # Join as participant (Student)
        elif path == '/api/join':
            nickname = body.get('nickname', '').strip()
            room_code = str(body.get('roomCode', '')).strip()

            if not nickname:
                self.send_error_response(400, "닉네임을 입력해 주세요.")
                return
            if not room_code:
                self.send_error_response(400, "방 번호를 입력해 주세요.")
                return

            db = read_db()
            rooms = db.get("rooms", {})

            if room_code not in rooms:
                self.send_error_response(404, "존재하지 않는 방 번호입니다.")
                return

            participants = rooms[room_code].get("participants", [])

            if any(p["nickname"].lower() == nickname.lower() for p in participants):
                self.send_error_response(400, "이미 사용 중인 닉네임입니다. 다른 닉네임을 입력해 주세요.")
                return

            new_participant = {
                "nickname": nickname,
                "score": None,
                "correctCount": None,
                "totalCount": None,
                "submittedAt": None,
                "answers": {},
                "grades": {},
                "tabSwitches": 0,
                "currentQuestionIdx": 0
            }
            db["rooms"][room_code]["participants"].append(new_participant)
            write_db(db)

            self.send_json_response(201, {"success": True, "nickname": nickname, "roomCode": room_code})
            return

        # Submit answers (Student)
        elif path == '/api/submit':
            nickname = body.get('nickname', '').strip()
            room_code = str(body.get('roomCode', '')).strip()
            answers = body.get('answers', {})
            tab_switches = int(body.get('tabSwitches', 0))

            if not nickname or not room_code:
                self.send_error_response(400, "Nickname and roomCode are required")
                return

            db = read_db()
            rooms = db.get("rooms", {})
            if room_code not in rooms:
                self.send_error_response(404, "존재하지 않는 방 번호입니다.")
                return

            participants = rooms[room_code].get("participants", [])
            user_idx = next((i for i, p in enumerate(participants) if p["nickname"].lower() == nickname.lower()), -1)
            
            if user_idx == -1:
                self.send_error_response(404, "등록되지 않은 참가자입니다. 먼저 입장해 주세요.")
                return

            questions = rooms[room_code].get("questions", [])
            score_count = 0.0
            total_count = len(questions)
            grades = {}

            for q in questions:
                q_id = q["id"]
                user_ans = str(answers.get(q_id, "")).strip().lower()
                # Split synonyms by comma or semicolon
                corr_ans_list = [ans.strip().lower() for ans in str(q["correctAnswer"]).replace(";", ",").split(",")]
                if user_ans in corr_ans_list:
                    grades[q_id] = 1.0
                    score_count += 1.0
                else:
                    grades[q_id] = 0.0

            percentage_score = round((score_count / total_count) * 100) if total_count > 0 else 0

            db["rooms"][room_code]["participants"][user_idx]["score"] = percentage_score
            db["rooms"][room_code]["participants"][user_idx]["correctCount"] = score_count
            db["rooms"][room_code]["participants"][user_idx]["totalCount"] = total_count
            db["rooms"][room_code]["participants"][user_idx]["submittedAt"] = datetime.utcnow().isoformat() + "Z"
            db["rooms"][room_code]["participants"][user_idx]["answers"] = answers
            db["rooms"][room_code]["participants"][user_idx]["grades"] = grades
            db["rooms"][room_code]["participants"][user_idx]["tabSwitches"] = tab_switches
            write_db(db)

            self.send_json_response(200, {
                "success": True,
                "score": percentage_score,
                "correctCount": score_count,
                "totalCount": total_count
            })
            return

        # --- Admin Authenticated Actions ---
        
        # Add question
        elif path == '/api/questions':
            if not self.check_admin_auth(): return

            room_code = str(body.get('roomCode', '')).strip()
            q_type = body.get('type')
            q_text = body.get('questionText')
            q_correct = body.get('correctAnswer')
            q_options = body.get('options', [])
            q_image = body.get('imageUrl', None)

            if not room_code or not q_type or not q_text or q_correct is None:
                self.send_error_response(400, "Missing required fields")
                return

            db = read_db()
            if room_code not in db.get("rooms", {}):
                self.send_error_response(404, "Room not found")
                return

            new_question = {
                "id": f"q_{int(datetime.now().timestamp() * 1000)}",
                "type": q_type,
                "questionText": q_text,
                "options": q_options if q_type == "multiple-choice" else [],
                "correctAnswer": str(q_correct).strip(),
                "imageUrl": q_image
            }
            db["rooms"][room_code]["questions"].append(new_question)
            write_db(db)

            self.send_json_response(201, new_question)
            return

        # Import questions from backup JSON
        elif path == '/api/questions/import':
            if not self.check_admin_auth(): return

            room_code = str(body.get('roomCode', '')).strip()
            import_list = body.get('questions', [])

            if not room_code:
                self.send_error_response(400, "roomCode is required")
                return
            if not isinstance(import_list, list):
                self.send_error_response(400, "Invalid questions format. Must be an array.")
                return

            db = read_db()
            if room_code not in db.get("rooms", {}):
                self.send_error_response(404, "Room not found")
                return

            db["rooms"][room_code]["questions"] = import_list
            write_db(db)
            self.send_json_response(200, {"success": True, "count": len(import_list)})
            return

        # Set Exam State (locked / active)
        elif path == '/api/exam/state':
            if not self.check_admin_auth(): return

            room_code = str(body.get('roomCode', '')).strip()
            state_val = body.get('examState', 'locked')
            time_limit = int(body.get('timeLimit', 0))

            if not room_code:
                self.send_error_response(400, "roomCode is required")
                return
            if state_val not in ['locked', 'active']:
                self.send_error_response(400, "Invalid examState value")
                return

            db = read_db()
            if room_code not in db.get("rooms", {}):
                self.send_error_response(404, "Room not found")
                return

            db["rooms"][room_code]["examState"] = state_val
            
            if state_val == 'active' and time_limit > 0:
                db["rooms"][room_code]["timeLimit"] = time_limit
                db["rooms"][room_code]["examEndTime"] = (datetime.utcnow() + timedelta(minutes=time_limit)).isoformat() + "Z"
            else:
                db["rooms"][room_code]["timeLimit"] = 0
                db["rooms"][room_code]["examEndTime"] = None

            write_db(db)
            self.send_json_response(200, {
                "success": True,
                "examState": state_val,
                "timeLimit": db["rooms"][room_code]["timeLimit"],
                "examEndTime": db["rooms"][room_code]["examEndTime"]
            })
            return

        # Override a participant's score for a specific question (Admin)
        elif path == '/api/grade/override':
            if not self.check_admin_auth(): return

            room_code = str(body.get('roomCode', '')).strip()
            nickname = body.get('nickname', '').strip()
            question_id = str(body.get('questionId', '')).strip()
            grade_value = float(body.get('grade', 0.0)) # 1.0, 0.5, 0.0

            if not room_code or not nickname or not question_id:
                self.send_error_response(400, "roomCode, nickname, and questionId are required")
                return

            db = read_db()
            if room_code not in db.get("rooms", {}):
                self.send_error_response(404, "Room not found")
                return

            participants = db["rooms"][room_code].get("participants", [])
            user_idx = next((i for i, p in enumerate(participants) if p["nickname"].lower() == nickname.lower()), -1)
            if user_idx == -1:
                self.send_error_response(404, "Participant not found")
                return

            p = participants[user_idx]
            
            # Backwards compatibility populate grades if missing
            grades = p.get("grades", {})
            if not grades:
                questions = db["rooms"][room_code].get("questions", [])
                grades = {}
                for q in questions:
                    q_id = q["id"]
                    user_ans = str(p.get("answers", {}).get(q_id, "")).strip().lower()
                    corr_ans_list = [ans.strip().lower() for ans in str(q["correctAnswer"]).replace(";", ",").split(",")]
                    if user_ans in corr_ans_list:
                        grades[q_id] = 1.0
                    else:
                        grades[q_id] = 0.0
            
            # Update the override
            grades[question_id] = grade_value
            p["grades"] = grades
            
            # Recalculate sums
            score_count = sum(grades.values())
            total_count = len(db["rooms"][room_code].get("questions", []))
            percentage_score = round((score_count / total_count) * 100) if total_count > 0 else 0
            
            p["score"] = percentage_score
            p["correctCount"] = score_count
            p["totalCount"] = total_count
            
            db["rooms"][room_code]["participants"][user_idx] = p
            write_db(db)
            
            self.send_json_response(200, {
                "success": True, 
                "score": percentage_score, 
                "correctCount": score_count, 
                "totalCount": total_count
            })
            return

        # Reset all results for a room
        elif path == '/api/reset':
            if not self.check_admin_auth(): return

            room_code = str(body.get('roomCode', '')).strip()
            if not room_code:
                self.send_error_response(400, "roomCode is required")
                return

            db = read_db()
            if room_code not in db.get("rooms", {}):
                self.send_error_response(404, "Room not found")
                return

            db["rooms"][room_code]["participants"] = []
            write_db(db)
            self.send_json_response(200, {"success": True, "message": "Room results reset successfully."})
            return

        else:
            self.send_error_response(404, "Not Found")

    def do_PUT(self):
        if not self.check_admin_auth(): return

        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path
        query = urllib.parse.parse_qs(parsed_url.query)
        room_code = query.get('roomCode', [None])[0]

        if not room_code:
            self.send_error_response(400, "roomCode query param is required")
            return

        match = re.match(r'^/api/questions/([^/?]+)', path)
        if match:
            q_id = match.group(1)
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                body = json.loads(post_data.decode('utf-8'))
            except Exception:
                self.send_error_response(400, "Invalid JSON body")
                return

            db = read_db()
            room = db.get("rooms", {}).get(room_code)
            if not room:
                self.send_error_response(404, "Room not found")
                return

            questions = room.get("questions", [])
            q_idx = next((i for i, q in enumerate(questions) if q["id"] == q_id), -1)
            if q_idx == -1:
                self.send_error_response(404, "Question not found")
                return

            questions[q_idx]["questionText"] = body.get("questionText", questions[q_idx]["questionText"])
            questions[q_idx]["type"] = body.get("type", questions[q_idx]["type"])
            questions[q_idx]["correctAnswer"] = str(body.get("correctAnswer", questions[q_idx]["correctAnswer"])).strip()
            questions[q_idx]["imageUrl"] = body.get("imageUrl", questions[q_idx].get("imageUrl", None))
            
            if questions[q_idx]["type"] == "multiple-choice":
                questions[q_idx]["options"] = body.get("options", questions[q_idx].get("options", []))
            else:
                questions[q_idx]["options"] = []

            db["rooms"][room_code]["questions"] = questions
            write_db(db)

            self.send_json_response(200, questions[q_idx])
            return
        
        self.send_error_response(404, "Not Found")

    def do_DELETE(self):
        if not self.check_admin_auth(): return

        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path
        query = urllib.parse.parse_qs(parsed_url.query)
        room_code = query.get('roomCode', [None])[0]

        if not room_code:
            self.send_error_response(400, "roomCode query param is required")
            return

        match = re.match(r'^/api/questions/([^/?]+)', path)
        if match:
            q_id = match.group(1)
            db = read_db()
            room = db.get("rooms", {}).get(room_code)
            if not room:
                self.send_error_response(404, "Room not found")
                return

            questions = room.get("questions", [])
            filtered = [q for q in questions if q["id"] != q_id]
            if len(filtered) == len(questions):
                self.send_error_response(404, "Question not found")
                return

            db["rooms"][room_code]["questions"] = filtered
            write_db(db)
            self.send_json_response(200, {"success": True, "message": "Question deleted successfully"})
            return

        self.send_error_response(404, "Not Found")

    # --- HTTP Helper Methods ---

    def send_json_response(self, status, data):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        response_bytes = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_header('Content-Length', len(response_bytes))
        self.end_headers()
        self.wfile.write(response_bytes)

    def send_error_response(self, status, message):
        self.send_json_response(status, {"error": message})

    def serve_static_file(self, file_path):
        _, ext = os.path.splitext(file_path)
        content_types = {
            '.html': 'text/html; charset=utf-8',
            '.css': 'text/css; charset=utf-8',
            '.js': 'application/javascript; charset=utf-8',
            '.json': 'application/json; charset=utf-8',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.ico': 'image/x-icon'
        }
        content_type = content_types.get(ext.lower(), 'application/octet-stream')

        try:
            with open(file_path, 'rb') as f:
                content = f.read()
            self.send_response(200)
            self.send_header('Content-Type', content_type)
            self.send_header('Content-Length', len(content))
            self.end_headers()
            self.wfile.write(content)
        except Exception as e:
            print(f"Error serving file: {e}")
            self.send_error_response(500, "Internal Server Error")


def run(server_class=http.server.ThreadingHTTPServer, handler_class=QuizRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"============================================================")
    print(f"  Quiz Web Server is running!")
    print(f"  - Local access:        http://localhost:{port}")
    print(f"  - Admin Dashboard:    http://localhost:{port}/admin")
    print(f"============================================================")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
        httpd.server_close()


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))
    run(port=port)
