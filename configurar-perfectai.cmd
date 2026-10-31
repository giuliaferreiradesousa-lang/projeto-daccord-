@echo off
setlocal
cd /d "%~dp0backend"
if exist "..\.tools\php\php.exe" (
  "..\.tools\php\php.exe" artisan perfectai:configure
) else (
  php artisan perfectai:configure
)
echo.
pause
