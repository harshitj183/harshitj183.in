@echo off
echo Testing Next.js Build
echo ===================

echo.
echo Cleaning previous builds...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

echo.
echo Building with Next.js...
set NEXT_DISABLE_ESLINT=1
set EXPORT_MODE=true
call npm run build

echo.
echo Build completed!
if exist out (
  echo Static export succeeded - "out" directory exists
) else (
  echo Static export may have failed - no "out" directory found
)

echo.
echo Test complete!
pause
