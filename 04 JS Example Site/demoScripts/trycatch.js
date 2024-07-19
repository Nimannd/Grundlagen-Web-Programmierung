// Beispiel für try-catch in JavaScript
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division durch Null ist nicht erlaubt");
        }
        let result = a / b;
        console.log(`Das Ergebnis ist: ${result}`);
    } catch (error) {
        console.error(`Fehler: ${error.message}`);
    }
    finally {
        console.log("Finally wird immer ausgeführt.");
    }
}

// Testfälle
divide(10, 2); // Erwartetes Ergebnis: Das Ergebnis ist: 5
divide(10, 0); // Erwartetes Ergebnis: Fehler: Division durch Null ist nicht erlaubt
throw new Error("Ein weiterer Fehler"); // unhandeled exceptions brechen sonst den Code ab