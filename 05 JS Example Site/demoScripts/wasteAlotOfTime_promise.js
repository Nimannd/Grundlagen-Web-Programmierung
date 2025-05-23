function wasteAlotOfTime_promise() {
  console.log("wasteAlotOfTime_promise");
  return new Promise((resolve, reject) => {
    // Simuliert eine lange Berechnung
    let result = 0;
    for (let i = 0; i < 2000000000; i++) {
      result += i;
    }
    resolve(result);
    // reject(new Error("Fehler beim Berechnen"));
  });
}

function executePromiseDemo() {
  // Hier wird die Funktion wasteAlotOfTime_promise aufgerufen. Diese gibt ebenfalls ein Promise zurück is also analog zu wasteAlotOfTime_async.
  wasteAlotOfTime_promise().then((result) => {
    console.log("wasteAlotOfTime_promise Ergebnis im then:", result);
  });
  console.log("Auch dieser Log erscheint vor dem Resultat.");
}

// Add event listener to the button
document.getElementById('btn-promise').addEventListener('click', executePromiseDemo);
