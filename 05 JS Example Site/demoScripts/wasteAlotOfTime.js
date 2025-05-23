function wasteAlotOfTime() {
  console.log("wasteAlotOfTime");
  // Simuliert eine lange Berechnung
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
}

function executeNormalAsyncDemo() {
  let result = wasteAlotOfTime();
  console.log("Ergebnis:", result);
  console.log("Dieser Log erscheint erst, nach dem Resultat.");
}

// Add event listener to the button
document.getElementById('btn-normal').addEventListener('click', executeNormalAsyncDemo);
