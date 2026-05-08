@echo off

cd /d "%~dp0"

echo Installing dependencies...
call npm install

echo.
echo Starting React project...
start http://localhost:5173
call npm run dev

pause