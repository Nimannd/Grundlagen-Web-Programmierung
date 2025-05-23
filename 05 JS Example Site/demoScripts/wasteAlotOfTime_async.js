async function wasteAlotOfTime_async() {
  console.log("wasteAlotOfTime_async");
  // Simuliert eine lange Berechnung
  let result = 0;
  for (let i = 0; i < 2000000000; i++) {
    result += i;
  }
  return result;
}

function executeAsyncDemo() {
  // Hier wird die Funktion wasteAlotOfTime_async aufgerufen. Diese benutzt das async Keyword und gibt dadurch ein Promise zurück.
  wasteAlotOfTime_async().then((result) => {
    console.log("wasteAlotOfTime_async Ergebnis im then:", result);
  });
  console.log("Ah, dieser Log erscheint nun vor dem Resultat.");
}

// Add event listener to the button
document.getElementById('btn-async').addEventListener('click', executeAsyncDemo);
