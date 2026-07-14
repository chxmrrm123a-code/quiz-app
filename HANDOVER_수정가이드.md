# 🛠️ Qurious 퀴즈앱 — 수정 & 재배포 인수인계서

이 문서는 **이미 배포가 끝난 앱을 나중에 수정하는 방법**만 다룹니다.
(최초 배포는 이미 완료됨: https://qurious-quiz.onrender.com)

---

## 0. 가장 중요한 개념 — "수정하면 어떻게 반영되나?"

이 앱은 **GitHub에 올리면 Render가 자동으로 다시 배포**됩니다.
그래서 수정할 때 매번 밟는 순서는 항상 똑같습니다:

```
① 파일 수정  →  ② 로컬에서 테스트  →  ③ GitHub에 올리기(push)  →  ④ Render 자동 재배포(2~5분)
```

Render 대시보드에서 뭔가를 다시 누를 필요가 **없습니다.** `push`만 하면 알아서 됩니다.

- 코드 위치(내 컴퓨터): `C:\Users\chxmr\.gemini\antigravity\scratch\quiz-app`
- GitHub 저장소: https://github.com/chxmrrm123a-code/quiz-app
- 배포 주소: https://qurious-quiz.onrender.com

---

## 1. 어떤 파일을 고쳐야 하나? (파일 지도)

```
quiz-app/
├── backend/
│   ├── server.py          ← 서버 로직·API·PIN 기본값·채점 규칙
│   └── data/db.json        ← 기본 문제 3개가 들어있는 파일 DB
├── frontend/
│   ├── index.html          ← 화면 구조(버튼·제목·입력칸 위치)
│   ├── style.css           ← 색상·글꼴·디자인·애니메이션
│   └── app.js              ← 화면 동작·다국어 번역 텍스트·통신 로직
└── render.yaml             ← 배포 설정 (거의 만질 일 없음)
```

**"무엇을 바꾸고 싶은가"에 따라 파일이 정해집니다:**

| 바꾸고 싶은 것 | 고칠 파일 |
|----------------|-----------|
| 화면에 보이는 글자·버튼 이름·번역 | `frontend/app.js` (번역 텍스트), `frontend/index.html` |
| 색상·디자인·글꼴 | `frontend/style.css` |
| 기본 문제(처음 3문제) 내용 | `backend/data/db.json` |
| 관리자 PIN 기본값 | `backend/server.py` (아래 2번 참고) 또는 Render 환경변수 |
| 채점 방식·API 동작 | `backend/server.py` |

---

## 2. 자주 하는 수정 예시

### (A) 관리자 PIN 바꾸기 — 가장 쉬운 건 Render에서
코드를 안 건드리고 바꾸는 방법(추천):
1. https://dashboard.render.com → `qurious-quiz` 서비스 클릭
2. 왼쪽 메뉴 **Environment** → **Add Environment Variable**
3. Key: `ADMIN_PIN`, Value: `원하는번호(예 9876)` → **Save**
4. 저장하면 자동으로 다시 배포되고, 새 PIN이 적용됩니다.

> 코드로 바꾸려면 `backend/server.py`에서 `'1234'`로 된 부분(2군데)을 원하는 번호로 바꾸면 됩니다.

### (B) 기본 문제 바꾸기
- 운영 중에는 **관리자 화면(/admin)에서 직접 문제를 추가**하는 게 제일 편합니다.
- 단, 무료 플랜은 서버가 재시작되면 문제가 초기화되므로, **관리자 화면의 "내보내기"로 백업** → 나중에 "불러오기"로 복원하세요.
- 아예 처음 3문제 자체를 바꾸려면 `backend/data/db.json`의 `questions` 부분을 편집합니다.

### (C) 화면 글자·색상 바꾸기
- 글자/번역: `frontend/app.js` 안의 번역 텍스트를 찾아서 수정
- 색상/디자인: `frontend/style.css` 수정

---

## 3. 수정 후 로컬에서 먼저 테스트하기

올리기 전에 내 컴퓨터에서 확인하는 습관을 들이면 안전합니다.

1. PowerShell(또는 터미널)을 열고 프로젝트 폴더로 이동:
   ```
   cd C:\Users\chxmr\.gemini\antigravity\scratch\quiz-app
   ```
2. 서버 실행:
   ```
   python backend/server.py
   ```
3. 브라우저에서 확인:
   - 학생용: http://localhost:8000
   - 선생님용: http://localhost:8000/admin (PIN 1234)
4. 확인이 끝나면 터미널에서 **Ctrl + C** 로 서버 종료.

---

## 4. 수정한 내용을 실제 배포에 반영하기 (GitHub에 올리기)

로컬 테스트가 끝났으면, 아래 명령을 프로젝트 폴더에서 순서대로 실행합니다:

```
cd C:\Users\chxmr\.gemini\antigravity\scratch\quiz-app
git add .
git commit -m "무엇을 바꿨는지 간단히 적기"
git push
```

- `git push`가 끝나면 **Render가 자동으로 감지**해서 2~5분 안에 새 버전으로 재배포합니다.
- 진행 상황은 https://dashboard.render.com → `qurious-quiz` → 이벤트 목록에서 "Deploy live"가 뜨는지 보면 됩니다.

> 💡 명령어가 어렵다면, 폴더 안의 `push_to_github.bat` 파일을 더블클릭해도 됩니다.

---

## 5. 문제가 생겼을 때 (체크리스트)

| 증상 | 확인할 것 |
|------|-----------|
| 접속했더니 50초 넘게 로딩 | 정상입니다. 무료 플랜이 잠들었다 깨어나는 중. 한 번 깨면 빨라짐 |
| push했는데 화면이 안 바뀜 | Render 대시보드에서 "Deploy live"가 떴는지 확인. 브라우저 새로고침(Ctrl+F5) |
| 배포가 실패(빨간 Failed) | Render 서비스 화면의 **Logs** 탭에서 빨간 에러 메시지 확인 |
| 만든 문제가 사라짐 | 무료 플랜의 정상 동작. "내보내기" 백업 습관 필요 |
| PIN이 안 먹힘 | Render Environment의 `ADMIN_PIN` 값 확인 (없으면 기본 1234) |

---

## 6. 핵심 요약 (딱 이것만 기억)

1. 파일 고치고 → `python backend/server.py`로 로컬 확인
2. `git add .` → `git commit -m "..."` → `git push`
3. 2~5분 뒤 https://qurious-quiz.onrender.com 에 자동 반영
4. 문제 백업은 관리자 화면 **내보내기**로!

---
*작성일: 2026-07-14 · 최초 배포·검증 완료 상태 기준*
