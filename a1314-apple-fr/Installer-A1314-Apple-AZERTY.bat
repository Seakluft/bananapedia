@echo off
:: Installe la disposition clavier "French (Apple)" pour clavier Apple A1314 (AZERTY Mac) sous Windows.
:: A executer EN TANT QU'ADMINISTRATEUR (clic droit > Executer en tant qu'administrateur).
chcp 65001 >nul
setlocal

set "SRC=%~dp0"

:: 1. Copie la DLL du layout dans System32 (elle doit y resider pour etre chargee par Windows)
copy /Y "%SRC%Apple-FR.dll" "%SystemRoot%\System32\Apple-FR.dll" >nul
if errorlevel 1 (
    echo ERREUR : impossible de copier Apple-FR.dll dans System32. Lancez ce script en administrateur.
    pause
    exit /b 1
)

:: 2. Enregistre le layout + l'echange Option/AltGr dans le registre
reg import "%SRC%A1314-Apple-AZERTY.reg" >nul
if errorlevel 1 (
    echo ERREUR : import du fichier .reg echoue.
    pause
    exit /b 1
)

echo.
echo Installation terminee.
echo 1) Redemarrez l'ordinateur (ou deconnectez/reconnectez votre session).
echo 2) Parametres > Heure et langue > Langue et region > Francais > Options
     > Ajouter un clavier > selectionnez "French (Apple)".
echo 3) Utilisez Win + Espace pour basculer vers "French (Apple)".
echo.
echo Verification du fichier DLL (empreinte attendue) :
certutil -hashfile "%SystemRoot%\System32\Apple-FR.dll" SHA256
echo Doit afficher : d2c1bf35dc3ffe4d77e98a08555c94e2e8d9664ec2a6f4f3428a2b4cc3dc13bc
echo.
pause
