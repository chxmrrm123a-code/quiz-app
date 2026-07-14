@echo off
chcp 65001 > nul
echo ============================================================
echo   Qurious Quiz App - GitHub 업로드 도우미
echo ============================================================
echo.
echo 이 스크립트는 로컬 코드를 사용자님의 깃허브 저장소로 업로드합니다.
echo 먼저 웹 브라우저에서 GitHub 저장소(Repository)를 생성해 주세요.
echo.
set /p repo_url="생성하신 깃허브 저장소 주소를 입력하세요: "

if "%repo_url%"=="" (
    echo 주소가 입력되지 않았습니다. 종료합니다.
    pause
    exit /b
)

echo.
echo 원격 저장소 연결 중...
git remote remove origin >nul 2>&1
git remote add origin %repo_url%

echo.
echo 깃허브로 업로드 시작...
git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ============================================================
    echo   성공적으로 깃허브에 업로드되었습니다!
    echo   이제 Render.com에서 이 저장소를 연결하여 배포할 수 있습니다.
    echo ============================================================
) else (
    echo ============================================================
    echo   오류가 발생했습니다. 주소를 확인하고 다시 시도해 주세요.
    echo ============================================================
)
echo.
pause
