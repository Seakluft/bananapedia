@echo off
:: Desinstalle la disposition "French (Apple)" et restaure Alt / AltGr d'origine.
:: A executer EN TANT QU'ADMINISTRATEUR.
chcp 65001 >nul
setlocal
set "SRC=%~dp0"

reg import "%SRC%A1314-Reinitialiser.reg" >nul
del /F /Q "%SystemRoot%\System32\Apple-FR.dll" 2>nul

echo Desinstallation terminee. Redemarrez l'ordinateur.
pause
