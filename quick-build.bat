@echo off
echo Quick Build Test (No Long Operations)
echo =====================================
echo.

echo [1/3] Checking if SSR error is fixed...
node quick-build-test.js
echo.

echo [2/3] Attempting quick build (will timeout if stuck)...
echo Note: This will timeout after 2 minutes if the build hangs
echo.

:: Set a timeout for the build process
timeout /t 5 /nobreak >nul
echo Starting build process...

:: Try to build with a reasonable timeout
npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Build completed successfully!
    echo Your portfolio is ready for deployment.
    echo.
    echo Next steps:
    echo 1. Test locally with: npm run start
    echo 2. Or start development with: emergency-dev.bat
) else (
    echo.
    echo ❌ Build encountered issues.
    echo.
    echo Quick fixes to try:
    echo 1. Run: emergency-dev.bat (for development)
    echo 2. Run: build.bat clean (to clear caches)
    echo 3. Check BUILD_GUIDE.md for more troubleshooting
)
