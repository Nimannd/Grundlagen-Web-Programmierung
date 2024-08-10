# Server seitige Applikation
Hier gehen wir einmal durch die Welt von Node.js, wie man ein Webserver programmiert.
Bisher haben wir eigentlich VS Code mit der Live Preview Extension als "Webserver" eingesetzt.

## Einführung Node.js
Zuerst schauen wir, wie man ein Webserver mit node.js erstellen.

1. Stelle sicher, dass ihr Node.js installiert habt. https://nodejs.org/
```
PS C:\Users\mannni\Repos\Grundlagen-Web-Programmierung> node
Welcome to Node.js v20.14.0.
Type ".help" for more information.
>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
>
```
2. **Demonstration** der direktest Handhabung von HTTP Anfragen. Starte den Node Server mit folgendem Kommando. Im Terminal sollte die URL verfügbar sein. Öffne dann den Browser und besuche diese.
```
node plainHttpServer.js
```
4. Installiere das Express Modul. Mit folgendem Kommando werden aus dem package.json alle Abhängikeiten runtergeladen und in den node_modules Ordner gespeichert.
Für mehr Erklärungen siehe hier: https://expressjs.com/de/starter/installing.html
```
npm install
```
3. **Demonstration** eines Static Content Web Servers mit `express`. Kopiere HTML, CSS und JS Files einer Website, die du im Verlauf des Kurses gemacht hast in den Ordner static. Starte dann den Sever mit folgendem Kommando. Besuche die Seite auf http://localhost/
```
node staticExpressServer.js
```
> Bei Static Content Server wird beim Aufrufen vom Root Pfad `/` standardmassig index.html retourniert. Alle anderen Files sind über den Pfad bzw. Filenamen abrufbar. z.B. http://localhost/test.png

> Bei Chrome kann es sein, dass er immer HTTPS erzwingt und es daher zu Fehlern kommt.

## Dateneingabe
Nun können wir wie vorher eine statische Website aufrufen. Da wir jetzt aber ein expliziter Webserver haben, haben wir nun die Möglichkeit auch eine Eingabe zu machen.

> Aktiviere VS Code Auto Attatch um debugging des Node.js Server zu ermöglichen. https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_auto-attach

1. **Demonstration** einer Rechner Applikation die ganz ohne Client Side JS auskommt und die Berechnung auf Server Side ausführt. Kurz Debugging demonstrieren.
```
node calculatorExpressServer.js
```
1. **Demonstration** den selben Rechner, aber wir render das HTML nun mit dem ejs modul. Falls es ein Resultat hat wird es nun auch in die Seite eingebettet.
```
node calculatorExpressServer2.js
```