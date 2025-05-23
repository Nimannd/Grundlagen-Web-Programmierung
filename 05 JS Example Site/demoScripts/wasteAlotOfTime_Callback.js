function wasteAlotOfTime_Callback(callback) {
  console.log("wasteAlotOfTime_Callback");
  // Simuliert eine lange Berechnung
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  callback(result);
  return result;
}

function executeCallbackDemo() {
  // Hier wird die Funktion wasteAlotOfTime_Callback aufgerufen. Diesmal aber mit einem sogenannten Callback.
  wasteAlotOfTime_Callback((result) => {
    console.log("Ergebnis im Callback:", result);
  });
  console.log("Auch dieser Log erscheint erst, nach dem Resultat.");
}

// Add event listener to the button
document.getElementById('btn-callback').addEventListener('click', executeCallbackDemo);
