import http.server
import json
import os
import re
import urllib.parse
from datetime import datetime

# Define base paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, 'data', 'db.json')
FRONTEND_DIR = os.path.abspath(os.path.join(BASE_DIR, '..', 'frontend'))

# Ensure data directory and db.json exist
os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
if not os.path.exists(DB_PATH):
    default_db = {
        "questions": [
            {
                "id": "q1",
                "type": "multiple-choice",
                "questionText": "대한민국의 수도는 어디인가요?",
                "options": ["부산", "인천", "서울", "대구"],
                "correctAnswer": "서울"
            },
            {
                "id": "q2",
                "type": "short-answer",
                "questionText": "인터넷 브라우저에서 웹페이지를 구조화하는 데 사용되는 기본 마크업 언어의 약자(영어 4글자)는 무엇인가요?",
                "correctAnswer": "HTML"
            },
            {
                "id": "q3",
                "type": "multiple-choice",
                "questionText": "다음 중 자바스크립트(JavaScript)의 기본 데이터 타입이 아닌 것은 무엇인가요?",
                "options": ["Number", "String", "Boolean", "Class"],
                "correctAnswer": "Class"
            }
        ],
        "participants": []
    }
    with open(DB_PATH, 'w', encoding='utf-8') as f:
        json.dump(default_db, f, indent=2, ensure_ascii=False)


def read_db():
    try:
        with open(DB_PATH, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error reading database: {e}")
        return {"questions": [], "participants": []}


def write_db(data):
    try:
        with open(DB_PATH, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f"Error writing database: {e}")


class QuizRequestHandler(http.server.BaseHTTPRequestHandler):

    def end_headers(self):
        # Allow cross-origin requests (CORS) for development convenience
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        # Parse path
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path

        # --- API Endpoints ---
        if path == '/api/questions':
            self.send_json_response(200, read_db().get("questions", []))
            return
        
        elif path == '/api/results':
            db = read_db()
            participants = db.get("participants", [])
            results = [p for p in participants if p.get("score") is not None]
            
            # Sort by score desc, then by speed (submittedAt asc)
            def get_sort_key(p):
                score = p.get("score", 0)
                sub_time = p.get("submittedAt", "")
                # Convert ISO string to timestamp if possible, otherwise use a fallback
                try:
                    ts = datetime.fromisoformat(sub_time.replace("Z", "+00:00")).timestamp()
                except Exception:
                    ts = 9999999999
                return (-score, ts)
            
            results.sort(key=get_sort_key)
            self.send_json_response(200, results)
            return

        # --- Static File Serving ---
        else:
            # Map clean URLs to files
            if path == '/' or path == '/admin':
                file_path = os.path.join(FRONTEND_DIR, 'index.html')
            else:
                # Remove leading slash and construct path
                clean_path = path.lstrip('/')
                file_path = os.path.join(FRONTEND_DIR, clean_path)

            # Prevent directory traversal attacks
            real_file_path = os.path.abspath(file_path)
            if not real_file_path.startswith(FRONTEND_DIR):
                self.send_error_response(403, "Access Denied")
                return

            if os.path.exists(real_file_path) and os.path.isfile(real_file_path):
                self.serve_static_file(real_file_path)
            else:
                # Fallback to index.html for SPA router-like behavior if it's not a direct asset request
                fallback_path = os.path.join(FRONTEND_DIR, 'index.html')
                if os.path.exists(fallback_path):
                    self.serve_static_file(fallback_path)
                else:
                    self.send_error_response(404, "File Not Found")

    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path

        # Read JSON body
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        
        try:
            body = json.loads(post_data.decode('utf-8')) if post_data else {}
        except Exception:
            self.send_error_response(400, "Invalid JSON body")
            return

        # Add question
        if path == '/api/questions':
            q_type = body.get('type')
            q_text = body.get('questionText')
            q_correct = body.get('correctAnswer')
            q_options = body.get('options', [])

            if not q_type or not q_text or q_correct is None:
                self.send_error_response(400, "Missing required fields")
                return

            db = read_db()
            new_question = {
                "id": f"q_{int(datetime.now().timestamp() * 1000)}",
                "type": q_type,
                "questionText": q_text,
                "options": q_options if q_type == "multiple-choice" else [],
                "correctAnswer": str(q_correct).strip()
            }
            db["questions"].append(new_question)
            write_db(db)

            self.send_json_response(201, new_question)
            return

        # Join as participant
        elif path == '/api/join':
            nickname = body.get('nickname', '').strip()
            if not nickname:
                self.send_error_response(400, "닉네임을 입력해 주세요.")
                return

            db = read_db()
            participants = db.get("participants", [])

            # Check if nickname exists
            if any(p["nickname"].lower() == nickname.lower() for p in participants):
                self.send_error_response(400, "이미 사용 중인 닉네임입니다. 다른 닉네임을 입력해 주세요.")
                return

            new_participant = {
                "nickname": nickname,
                "score": None,
                "correctCount": None,
                "totalCount": None,
                "submittedAt": None,
                "answers": {}
            }
            db["participants"].append(new_participant)
            write_db(db)

            self.send_json_response(201, {"success": True, "nickname": nickname})
            return

        # Submit answers
        elif path == '/api/submit':
            nickname = body.get('nickname', '').strip()
            answers = body.get('answers', {})

            if not nickname:
                self.send_error_response(400, "Nickname is required")
                return

            db = read_db()
            participants = db.get("participants", [])
            
            # Find user
            user_idx = next((i for i, p in enumerate(participants) if p["nickname"].lower() == nickname.lower()), -1)
            if user_idx == -1:
                self.send_error_response(404, "등록되지 않은 참가자입니다. 먼저 입장해 주세요.")
                return

            questions = db.get("questions", [])
            score_count = 0
            total_count = len(questions)

            for q in questions:
                q_id = q["id"]
                user_ans = str(answers.get(q_id, "")).strip().lower()
                corr_ans = str(q["correctAnswer"]).strip().lower()
                if user_ans == corr_ans:
                    score_count += 1

            percentage_score = round((score_count / total_count) * 100) if total_count > 0 else 0

            db["participants"][user_idx]["score"] = percentage_score
            db["participants"][user_idx]["correctCount"] = score_count
            db["participants"][user_idx]["totalCount"] = total_count
            db["participants"][user_idx]["submittedAt"] = datetime.utcnow().isoformat() + "Z"
            db["participants"][user_idx]["answers"] = answers
            write_db(db)

            self.send_json_response(200, {
                "success": True,
                "score": percentage_score,
                "correctCount": score_count,
                "totalCount": total_count
            })
            return

        # Reset all results
        elif path == '/api/reset':
            db = read_db()
            db["participants"] = []
            write_db(db)
            self.send_json_response(200, {"success": True, "message": "All participant results have been reset."})
            return

        else:
            self.send_error_response(404, "Not Found")

    def do_PUT(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path

        # Match /api/questions/<id>
        match = re.match(r'^/api/questions/([^/]+)$', path)
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
            questions = db.get("questions", [])
            
            q_idx = next((i for i, q in enumerate(questions) if q["id"] == q_id), -1)
            if q_idx == -1:
                self.send_error_response(404, "Question not found")
                return

            # Update question fields
            questions[q_idx]["questionText"] = body.get("questionText", questions[q_idx]["questionText"])
            questions[q_idx]["type"] = body.get("type", questions[q_idx]["type"])
            questions[q_idx]["correctAnswer"] = str(body.get("correctAnswer", questions[q_idx]["correctAnswer"])).strip()
            
            if questions[q_idx]["type"] == "multiple-choice":
                questions[q_idx]["options"] = body.get("options", questions[q_idx].get("options", []))
            else:
                questions[q_idx]["options"] = []

            db["questions"] = questions
            write_db(db)

            self.send_json_response(200, questions[q_idx])
            return
        
        self.send_error_response(404, "Not Found")

    def do_DELETE(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path

        # Match /api/questions/<id>
        match = re.match(r'^/api/questions/([^/]+)$', path)
        if match:
            q_id = match.group(1)
            db = read_db()
            questions = db.get("questions", [])
            
            filtered = [q for q in questions if q["id"] != q_id]
            if len(filtered) == len(questions):
                self.send_error_response(404, "Question not found")
                return

            db["questions"] = filtered
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
        # Determine content type
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
