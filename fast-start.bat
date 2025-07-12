@echo off
echo Fast Development Server Starter
echo ==============================
echo.

echo Killing any existing Next.js processes...
taskkill /F /IM node.exe /FI "WINDOWTITLE eq next*" 2>nul
timeout /t 1 /nobreak >nul

echo Cleaning build directories...
if exist .next (
    rmdir /s /q .next
)

echo Setting environment variables for fast development...
set NODE_OPTIONS=--max-old-space-size=4096
set USE_MOCK_DATA=true
set FORCE_REAL_DATA=false

echo Starting Next.js in development mode with optimized settings...
echo.
echo Your site will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

call npm run dev

echo Server stopped.
