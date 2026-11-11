@echo off
title Hassan Dental - Starting Development Server
echo ============================================================
echo   Hassan Dental - Starting Live Dev Server...
echo ============================================================
echo.
echo Opening browser at http://localhost:3000 ...
start http://localhost:3000
echo.
npm run dev -- --port 3000
pause
