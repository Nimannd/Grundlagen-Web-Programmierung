# Node.js Übung: Interaktive To-Do Liste

## Aufgabenstellung
Erstelle eine interaktive To-Do Liste, die es dem Benutzer ermöglicht, Aufgaben hinzuzufügen. Diesesmal soll es über einen Node.js Server funktionieren.

1. Erstelle eine HTML Struktur:
   - Ein Eingabefeld, um neue Aufgaben hinzuzufügen.
   - Ein Button, um die neue abzusenden.
   - Eine ungeordnete Liste (`<ul>`), um die Aufgaben anzuzeigen.
2. (optional) erstelle ein CSS oder benutze Bootstrap, damit es nach was aussieht.
> Bis hier hin kannst auch dein Code aus 05 wiederverwenden.

3. Implementiere das Verhalten mit Node.js
   - Die To-Do Website wird über einen Node.js Server serviert. Die To-Dos werden aus einer MongoDB abgerufen und in das HTML eingebettet.
   Der Code für den Zugriff auf die Datenbank ist im Exercise bereitsgestellt. Siehe das Kapitel DB Container um eine MongoDB als Container zu starten.
   - Wenn der Benutzer im Textfeld ein Text eingibt und dann auf den "Hinzufügen" Button klickt, wird ein Form an dein Node.js Server submitted.
   Dieses neue To-Do wird in der DB gespeichert. Wenn das alles funktioniert hat wird die Liste wieder angezeigt mit dem neuen To-Do.
   - Abhacken oder löschen eines To-Dos kannst du Optional umsetzen.
   Denke dabei aber daran, dass es für Updates und Deletes andere HTTP Methoden gibt.

## Sozialform
Einzelarbeit oder in einer Gruppe.

## Hinweise
Benutze dein Wissen aus der Example site. Abgesehen von der Datenbank die dazukommt ist es das selbe Prinzip wie im Example.
Du kannst dein Code aus "05 JS Exercise" wiederverwenden und es mit einem Node.js Webserver upgraden.

### DB Starten
Die aktuellen Ausgangesdateien wie `webserver.js` enthalten ein Beispielcode, der die Verbindung zu einer MongoDB demonstiert.
Wenn du die MongoDB zuerst wie folgt startest, dann kannst du mit `node webserver.js` auf diese verbinden.
```
docker pull mongo
docker run --name some-mongo -d -p 27017:27017 mongo
```
`webserver.js` enthält noch keine Implementationen eines Webservers. Die musst noch erstellt werden.

### Quick Start Cheat Sheet
1. Mit Terminal in die Aufgabe wechseln.
2. NPM Packges installieren.
3. Mongo DB als Image runterladen und dann starten.
4. Webserver starten
```
cd '.\07 Node.js Exercise\'
npm install
docker pull mongo
docker run --name some-mongo -d -p 27017:27017 mongo
node webserver.js
```
Dann kannst du im webserver.js beginne zu entwickeln.