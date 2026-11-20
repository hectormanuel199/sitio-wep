@echo off
cd /d "%~dp0"
set "CHROME="
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" set "CHROME=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" set "CHROME=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" set "CHROME=%LocalAppData%\Google\Chrome\Application\chrome.exe"
if "%CHROME%"=="" (
  echo No se encontro Google Chrome. Abre index.html manualmente.
  pause
  exit /b
)
start "" "%CHROME%" "%~dp0index.html" "%~dp0estilos.css" "%~dp0script.js"
