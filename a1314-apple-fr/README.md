# Clavier Apple A1314 (AZERTY français) sur Windows — layout « French (Apple) »

Ce dossier transforme un **Magic Keyboard A1314 AZERTY** en clavier parfaitement fidèle à son marquage sous Windows : `!` sur la touche 8, `@` et `#` sur la touche en haut à gauche, `€` sur AltGr+E, `< >` à côté de Maj gauche, etc. — exactement comme sur macOS.

Aucun logiciel à installer : seulement des fichiers **texte** (lisibles et vérifiables) plus une DLL de disposition clavier compilée à partir du source `.klc` fourni.

## Contenu

| Fichier | Rôle |
|---|---|
| `Installer-A1314-Apple-AZERTY.bat` | **Le seul fichier à lancer** (en admin). Copie la DLL, importe le `.reg`, affiche le hash de vérification. |
| `Desinstaller-A1314-Apple-AZERTY.bat` | Annule tout (supprime le layout, restaure Alt/AltGr, efface la DLL). |
| `A1314-Apple-AZERTY.reg` | Enregistrement du layout + échange Option ↔ AltGr (texte pur, vérifiable). |
| `A1314-Reinitialiser.reg` | Fichier de retour arrière utilisé par le désinstalleur. |
| `Apple-FR.dll` | Disposition clavier « French (Apple) » (Windows x64). |
| `French-Apple.klc` | Source de la DLL (Microsoft Keyboard Layout Creator) — pour audit/recompilation. |

## Installation (3 étapes)

1. **Télécharge ce dossier** entier sur le PC Windows (gardez les 6 fichiers ensemble).
2. **Clic droit** sur `Installer-A1314-Apple-AZERTY.bat` → **« Exécuter en tant qu'administrateur »** (obligatoire, le script écrit dans `System32` et dans le registre système).
3. **Redémarre** l'ordinateur, puis :
   `Paramètres > Heure et langue > Langue et région > Français (France) > Options > Ajouter un clavier > French (Apple)`
   Sélectionne ensuite **« French (Apple) »** avec `Win + Espace`.

## Vérification « sans virus »

- Tous les `.bat` / `.reg` / `.klc` / ce README sont du **texte brut** : ouvrez-les dans le Bloc-notes, rien n'est caché.
- Empreinte SHA-256 de la DLL (le script l'affiche aussi à la fin, via `certutil`) :

  ```
  d2c1bf35dc3ffe4d77e98a08555c94e2e8d9664ec2a6f4f3428a2b4cc3dc13bc
  ```

  À vérifier toi-même : `Win + R` → `cmd` → `certutil -hashfile "%SystemRoot%\System32\Apple-FR.dll" SHA256`
- Le `.klc` est la source exacte de la DLL : on peut la recompiler avec le [Microsoft Keyboard Layout Creator](https://www.microsoft.com/en-us/download/details.aspx?id=102134) (outil Microsoft officiel) et comparer.

## Désinstallation

Clic droit sur `Desinstaller-A1314-Apple-AZERTY.bat` → « Exécuter en tant qu'administrateur », puis redémarrer.

## Ce qui change exactement (vs AZERTY Windows)

| Touche physique A1314 | AZERTY Windows | **French (Apple)** |
|---|---|---|
| Touche en haut à gauche (`@ #`) | `< >` | **`@` direct, `#` avec Maj** |
| Touche à côté de Maj gauche (`< >`) | `²` | **`< >`** |
| Touche 8 | `_` / `8` | **`!` direct, `8` avec Maj** |
| Touche 6 | `§` / `6` | **`§` direct** (comme gravé) |
| `€` | AltGr+E | **AltGr+E** (inchangé) |
| ⌥ Option (gauche de ⌘) | Alt | devient **AltGr** (couche Option du layout Mac : `« » € ß …`) |
| ⌘ Command | Win | reste **Alt/Win** pour les raccourcis Windows |

Les touches mortes (`^ ¨ ~ \` ´`) et les majuscules accentuées (`É È Ç À Ù` via Verr.Maj) suivent macOS.
