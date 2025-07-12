@echo off
echo Portfolio Website Build Helper
echo ============================
echo.

if "%1"=="" goto help
if "%1"=="dev" goto dev
if "%1"=="fast-dev" goto fastdev
if "%1"=="minimal-dev" goto minimaldev
if "%1"=="build" goto build
if "%1"=="clean" goto clean
if "%1"=="export" goto export
if "%1"=="fix" goto fix
if "%1"=="fix-doc" goto fixdoc
if "%1"=="fix-ssr" goto fixssr
goto help

:dev
echo Starting development server...
node run.js dev
goto end

:fastdev
echo Starting optimized fast development server...
node fast-dev.js
goto end

:minimaldev
echo Starting minimal development server (fastest startup)...
node minimal-dev.js
goto end

:build
echo Building for production...
node run.js build
goto end

:clean
echo Cleaning build directories...
node run.js clean
goto end

:export
echo Creating static export...
node run.js export
goto end

:fix
echo Fixing build errors...
node fix-build-errors.js
goto end

:fixdoc
echo Fixing document.js errors...
node fix-document-error.js
goto end

:fixssr
echo Fixing Server Components SSR errors...
node fix-server-components.js
goto end

:help
echo Available commands:
echo   build.bat dev     - Start development server
echo   build.bat build   - Build for production
echo   build.bat clean   - Clean build directories
echo   build.bat export  - Create static export
echo   build.bat fix     - Fix common build errors
echo   build.bat fix-doc - Fix _document.js errors
echo   build.bat fix-ssr - Fix Server Components SSR error
echo.

:end
