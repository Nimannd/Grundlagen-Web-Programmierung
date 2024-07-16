# React Übung: Interaktive To-Do Liste

## Aufgabenstellung
Erstelle eine interaktive To-Do Liste, die es dem Benutzer ermöglicht, Aufgaben hinzuzufügen. Diesesmal solle es als SPA umgesetzt werden, welche über einen Node.js Server API.

1. Erstelle eine HTML Struktur:
   - Ein Eingabefeld, um neue Aufgaben hinzuzufügen.
   - Ein Button, um die neue abzusenden.
   - Eine ungeordnete Liste (`<ul>`), um die Aufgaben anzuzeigen.
2. (optional) erstelle ein CSS oder benutze Bootstrap, damit es nach was aussieht.
> Bis hier hin kannst auch dein Code aus 05 wiederverwenden.

3. Implementiere das API mit Node.js
   - Damit die SPA Daten abrufen und persistieren kann, soll eine REST API mit Node.js gebaut werden. Das API funktioniert immernoch über GET und POST, aber der Content-Type ist nun JSON. Die To-Dos werden über dieses API aus einer MongoDB abgerufen oder gespeichert.
   Du kannst den meisten Server Code aus der Übung 07 wiederverwenden und auf ein API umbauen.
   - Wenn der Benutzer im Textfeld ein Text eingibt und dann auf den "Hinzufügen" Button klickt, dann sendet die React SPA dieses To-Do an den Server.
   Die SPA kann den neuen Eintrag dann selbst zum State hinzufügen und somit auf dem UI anzeigen.
   - Abhacken oder löschen eines To-Dos kannst du Optional umsetzen.
   Denke dabei aber daran, dass es für Updates und Deletes andere HTTP Methoden gibt.

## Sozialform
Einzelarbeit oder in einer Gruppe.

## Hinweise
Benutze dein Wissen aus der Example site. Wie man eine Datenbank benutzt und wie man ein Request mit Express verarbeitet hast du in Aufgabe 07 bereits umgesetzt.
Du kannst Teile deines Server Codes aus "07 Node.js Exercise" wiederverwenden. Das Rendern des HTML wird ausgebaut und in React neu implementiert.
Sprich in Express musst du keine EJS Templates mehr rendern und stattdessen einfach ein JSON zurückgeben.

### API Testen
Du kannst zuerst das API entwickeln und testen, ohne dass du eine SPA hast.
Ein Get Request kannst du einfach mit einem Browser testen. Hingegen ein Post Request testest du am besten mit Tools wie Postman, Thunder Client (`rangav.vscode-thunder-client`), RapidAPI Client (`RapidAPI.vscode-rapidapi-client`)
So kannst du beim Entwickeln mit React davon ausgehen, dass dein API funktioniert.
`http://localhost/api/todo`

### DB Starten
Die aktuellen Ausgangesdateien wie `webserver.js` enthalten ein Beispielcode, der die Verbindung zu einer MongoDB demonstiert.
Wenn du die MongoDB zuerst wie folgt startest, dann kannst du mit `node webserver.js` auf diese verbinden.
```
docker pull mongo
docker run --name some-mongo -d -p 27017:27017 mongo
```
`webserver.js` enthält noch keine Implementationen eines Webservers. Die musst noch erstellt werden.

### Erstellen einer neuen React App
Du kannst eine neue React app erstellen, indem du im Ordner `09 React Exercise` folgende Befehle druchführst.
```
rm .\todoapp\placeholder
npm install create-react-app
npx create-react-app todoapp

cd todoapp
npm start
```

### Quick Start Cheat Sheet
1. In Temrinal 1 MonogDB in Docker starten
2. In Temrinal 1 API Webserver starten
3. In Terminal 2 React App starten
```
// Terminal 1
docker pull mongo
docker run --name some-mongo -d -p 27017:27017 mongo

cd '.\09 React Exercise\TodoAppAPI'
npm install
node webserver.js

// Terminal 2
cd '.\09 React Exercise\TodoAppUI'
npm install
npm start
```