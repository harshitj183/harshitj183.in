@echo off
setlocal enabledelayedexpansion

echo ===========================================
echo EMERGENCY DEVELOPMENT SERVER STARTER
echo ===========================================
echo.
echo This script performs aggressive cleanup and starts
echo the development server with minimal configuration.
echo.

:: Make sure we're in the correct directory
cd /d "%~dp0"

echo [1/7] Killing all Node.js processes...
taskkill /F /IM node.exe /FI "WINDOWTITLE eq next*" 2>nul
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul
echo.

echo [2/7] Cleaning all caches and build artifacts...
echo - Removing .next directory (if exists)...
if exist .next (
    :: Try multiple methods to delete the directory
    call :try_delete_directory .next
)

echo - Clearing node_modules cache (if exists)...
if exist node_modules\.cache (
    call :try_delete_directory node_modules\.cache
)

echo - Removing out directory (if exists)...
if exist out (
    call :try_delete_directory out
)
echo.

echo [3/7] Creating clean environment...
echo # Emergency development mode > .env.local.emergency
echo USE_MOCK_DATA=true >> .env.local.emergency
echo FORCE_REAL_DATA=false >> .env.local.emergency
echo DISABLE_TYPE_CHECK=true >> .env.local.emergency
echo NEXT_DISABLE_SOURCEMAPS=true >> .env.local.emergency
echo.

echo [4/7] Setting performance optimizations...
set NODE_OPTIONS=--max-old-space-size=4096 --no-warnings
set NEXT_TELEMETRY_DISABLED=1
set USE_MOCK_DATA=true
set FORCE_REAL_DATA=false
set DISABLE_TYPE_CHECK=true
echo.

echo [5/7] Creating temporary development config...
echo // Emergency mode configuration > next.config.emergency.js
echo module.exports = { typescript: { ignoreBuildErrors: true }, eslint: { ignoreDuringBuilds: true } } >> next.config.emergency.js
echo.

echo [6/7] Preparing development server...
echo -----------------------------------------------------
echo The site will start in EMERGENCY MODE with mock data.
echo Real APIs will not be called to speed up development.
echo -----------------------------------------------------
echo.

echo [7/7] Starting server...
echo.
echo Your site will be available at: http://localhost:3000
echo Press Ctrl+C twice to stop the server
echo.

:: Running npm directly instead of 'next' command
npm run dev

echo.
echo Server stopped. Cleaning up...
if exist next.config.emergency.js (
    del next.config.emergency.js
)
if exist .env.local.emergency (
    del .env.local.emergency
)

echo Done.
goto :eof

:try_delete_directory
echo   Attempting to delete %1...
:: Try regular rmdir first
rmdir /s /q %1 2>nul
if not exist %1 (
    echo   Success!
    goto :eof
)

:: Try PowerShell if regular rmdir failed
echo   Using PowerShell to force delete...
powershell -Command "Remove-Item -Path '%1' -Recurse -Force -ErrorAction SilentlyContinue" 2>nul
if not exist %1 (
    echo   Success!
    goto :eof
)

:: Final attempt with rd command
echo   Using RD command as last resort...
rd /s /q %1 2>nul
if exist %1 (
    echo   WARNING: Could not fully remove %1, continuing anyway.
)
goto :eof
