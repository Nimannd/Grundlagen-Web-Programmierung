// Unterschied in der Deklaration und dem Wert
var x = 10;       // `var` erlaubt eine Deklaration und spätere Neuzuordnung
let y = 20;       // `let` erlaubt ebenfalls eine Deklaration und spätere Neuzuordnung
const z = 30;     // `const` verlangt eine Deklaration und Initialisierung, ohne Neuzuordnung

x = 15;           // gültig, x ist nun 15
y = 25;           // gültig, y ist nun 25
// z = 35;        // ungültig, führt zu einem Fehler, da `const` nicht neu zugewiesen werden kann

console.log(x, y, z); // Ausgabe: 15 25 30

// Unterschied im Gültigkeitsbereich (Scope)
function scopeTest() {
    if (true) {
        var a = 1;     // `var` hat Funktions- bzw. globalen Gültigkeitsbereich
        let b = 2;     // `let` hat Block-Gültigkeitsbereich
        const c = 3;   // `const` hat ebenfalls Block-Gültigkeitsbereich
    }
    console.log(a);   // gültig, a ist definiert innerhalb der Funktion
    // console.log(b); // ungültig, führt zu einem Fehler, b ist nur innerhalb des Blocks definiert
    // console.log(c); // ungültig, führt zu einem Fehler, c ist nur innerhalb des Blocks definiert
}

scopeTest();

// Hoisting-Unterschiede
console.log(m); // Ausgabe: undefined, `var` wird gehöist und gilt dadurch schon vor der Deklaration
// console.log(n); // ungültig, führt zu einem Fehler, `let` Variable noch nicht definiert
// console.log(o); // ungültig, führt zu einem Fehler, `const` Variable noch nicht definiert

var m = 100;
let n = 200;
const o = 300;

// Redeklaration von Variablen
var p = 10;
var p = 20; // gültig, `var` erlaubt Redeklaration
console.log(p); // Ausgabe: 20

let q = 30;
// let q = 40; // ungültig, `let` erlaubt keine Redeklaration innerhalb desselben Scopes
console.log(q);

const r = 50;
// const r = 60; // ungültig, `const` erlaubt keine Redeklaration
console.log(r);
