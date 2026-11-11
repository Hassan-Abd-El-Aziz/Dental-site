@echo off
title Hassan Dental - Starting Local Server
echo ============================================================
echo   Hassan Dental - Starting Production Server...
echo ============================================================
echo.
echo Opening browser at http://localhost:3000 ...
start http://localhost:3000
echo.
npm run preview -- --port 3000
pause
