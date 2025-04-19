# Client seitige Applikation
Hier gehen wir einmal durch die Welt von React, wie man eine Single Page Application programmiert.

## React Intro
Für unsere React Entwicklungsumgebung brauchen wir auch [Node.js](https://nodejs.org/).
Sollte beides bereits installiert sein, aus der Node.js Übung.

Es gibt hier auch ein [W3S Tutorial](https://www.w3schools.com/react/)

### Etwas React Theorie
React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen. Dazu wird im Memory eine Kopie des DOM Tree des Browsers gepfleft. Ein virtueller DOM Tree. Wenn sich daran etwas ändert, vergleicht React das mit dem echten DOM Tree und wendet nur die Differenzen im echten DOM Tree an.
Somit kann React sehr effizient diese Änderungen durchführen troz hoher Komplexität.
Hier noch ein paar wichtige Eigenschaften von React:
- React-Anwendungen bestehen aus einzelnen **Komponenten**. Jede Komponente ist eine in sich geschlossene Einheit, die ihren eigenen Zustand (State) und ihre eigenen Eigenschaften (Props) hat.
Komponenten können andere Komponenten enthalten und bilden so eine hierarchische Struktur.
- Daten oder auch dynamische Werte sind immer als **State** (Zustand) gespeichert und werden nur darüber verändert. Man setzt z.B. nie den Wert eines Input Elements explizit.
- React folgt dem Prinzip des **Unidirektionaler Datenflusses**. Daten fliessen immer von der übergeordneten Komponente zur Untergeordneten.
- React verwendet **JSX**, eine Erweiterung von JavaScript, die es ermöglicht, HTML-ähnlichen Code innerhalb von JavaScript zu schreiben.

## Starten der Example Application
Mit folgenden Schritten die Applikation ausführen.
```
cd '.\08 React Example\calculator'
npm install
npm start
```
Danach die im Terminal angegebene Local URL im Browser öffnen.
Nun kann man die App verändern und beim speichern, sollte sich die Browser Page automatisch aktualisieren.

## Demo
1. Starten und demonstrieren
1. Bei NPM Run wird die App "gebuilded" und dann dem Browser serviert. `npm start` / `npm run build`
1. Das HTML wird in React von index.html über das index.js herab gerendert. Vergleichbar zum Node.js Example.s