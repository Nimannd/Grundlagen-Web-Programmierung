// Simulierte die fetch funktion, die eine API-Abfrage imitiert
function simulateFetch() {
  console.log("simulateFetch");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe", age: 25 };
      resolve(data);
    }, 2000); // Simuliert eine Verzögerung von 2 Sekunden
  });
}

// Asynchrone Funktion, die eine Promise antwort mit await abwartet.
async function getUserData() {
  try {
    // Das wäre der echte Webserver Aufruf. fetch() ist ebenfalls ein Browser API
    // const userData = await fetch('https://www.myapi.com/users');
    // Da dieser Server nicht existiert, simulieren wir fetch.
    const userData = await simulateFetch();
    return userData;
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
  }
}

function executeFetchDemo() {
  // Hier wird die Funktion simulateFetch aufgerufen welche 2 Sekunden dauert um eine Antwort zurück zu geben.
  simulateFetch().then((data) => {
    console.log("simulateFetch Daten im then:", data);
  });
  console.log("Dieser Log erscheint sofort, vor dem Resultat.");
  // simulateFetch ist die erste wirkliche asynchrone Funktion. Das liegt am Aufruf von setTimeout.
  // Es ist teil des Web Workers APIs und wird in einem eigenen Thread ausgeführt. Es ist ein Browser API.

  // Nun aber zum Hauptbeispiel. Hier wird die Funktion getUserData aufgerufen welche ein Serverrequest macht.
  // getUserData();
  // console.log("Dieser Log erscheint sofort, vor dem Resultat.");
}

// Add event listener to the button
document.getElementById('btn-fetch').addEventListener('click', executeFetchDemo);