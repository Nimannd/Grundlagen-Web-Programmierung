//
// Es folgen erst die Funktionen, beginne weiter unten mit Lesen.
//

function wasteAlotOfTime() {
  console.log("wasteAlotOfTime");
  // Simuliert eine lange Berechnung
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  console.log("Ergebnis der Berechnung:", result);

  return result;
}

function wasteAlotOfTime_Callback(callback) {
  console.log("wasteAlotOfTime_Callback");
  // Simuliert eine lange Berechnung
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  console.log("Ergebnis der Berechnung:", result);
  callback(result);
  return result;
}

async function wasteAlotOfTime_async() {
  console.log("wasteAlotOfTime_async");
  // Simuliert eine lange Berechnung
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  console.log("Ergebnis der Berechnung:", result);
  return result;
}

function wasteAlotOfTime_promise() {
  console.log("wasteAlotOfTime_promise");
  return new Promise((resolve, reject) => {
    // Simuliert eine lange Berechnung
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    console.log("Ergebnis der Berechnung:", result);
    resolve(result);
    // reject(new Error("Fehler beim Berechnen"));
  });
}

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
  console.log("getUserData");

  try {
    // Das wäre der echte Webserver Aufruf. fetch() ist ebenfalls ein Browser API
    // const userData = await fetch('https://www.myapi.com/users');
    // Da dieser Server nicht existiert, simulieren wir fetch.
    const userData = await simulateFetch();
    console.log("getUserData abgerufen:", userData);
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
  }
}

//
// Start der Erklärung von Async / Await und Promises
//
// Hier startet das Programm. Das könnte JavaScript in einem HTML sein oder der Start eines Node.js-Skripts.
// Egal wo, die erste Aufrufebene ist IMMER synchron.
// Wenn also dieser Code lange dauert, wird der Browser oder Node.js blockiert.
// Aus sicht eines Computers dauert aber ein Server Request (z.B. 200ms) eine Ewigkeit und ist auch merkbar für den Benutzer.

// Das ist der Grund, warum asynchrone Funktionen so wichtig sind.
// Sie ermöglichen es, dass der Code weiterläuft, während auf eine Antwort gewartet wird.

// Hier wird die Funktion wasteAlotOfTime aufgerufen. Diese Funktion dauert etwas länger und ist synchron.
wasteAlotOfTime();
console.log("Diese Nachricht erscheint erst, nachdem die Funktion wasteAlotOfTime abgeschlossen ist.");

// Hier wird die Funktion wasteAlotOfTime_Callback aufgerufen. Diesmal aber mit einem sogenannten Callback.
wasteAlotOfTime_Callback((result) => {
  console.log("Ergebnis im Callback:", result);
});
console.log("Auch diese Nachricht erscheint erst, nachdem die Funktion wasteAlotOfTime_Callback abgeschlossen ist.");

// Hier wird die Funktion wasteAlotOfTime_async aufgerufen. Diese benutzt das async Keyword und gibt dadurch ein Promise zurück.
wasteAlotOfTime_async().then((result) => {
  console.log("wasteAlotOfTime_async Ergebnis im then:", result);
});;
console.log("Ah, auch diese Nachricht erscheint erst, nachdem die Funktion wasteAlotOfTime_async abgeschlossen ist.");

// Hier wird die Funktion wasteAlotOfTime_promise aufgerufen. Diese gibt ebenfalls ein Promise zurück is also analog zu wasteAlotOfTime_async.
wasteAlotOfTime_promise().then((result) => {
  console.log("wasteAlotOfTime_promise Ergebnis im then:", result);
});;
console.log("... auch diese Nachricht erscheint erst, nachdem die Funktion wasteAlotOfTime_promise abgeschlossen ist.");

// Hier wird die Funktion simulateFetch aufgerufen welche 2 Sekunden dauert um eine Antwort zurück zu geben.
simulateFetch().then((data) => {
  console.log("simulateFetch Daten im then:", data);
});
console.log("Endlich. Diese Nachricht erscheint sofort, da die Funktion simulateFetch eigentlich nur ein timer setzt.");
// simulateFetch ist die erste wirkliche asynchrone Funktion. Das liegt am aufruf von setTimeout.
// Es ist teil des Web Workers APIs und wird in einem eigenen Thread ausgeführt. Es ist ein Browser API.

// Nun aber zum Hauptbeispiel. Hier wird die Funktion getUserData aufgerufen welche ein Serverrequest macht.
getUserData();
console.log("Dieser Log erscheint sofort, da die User Daten asynchron abgerufen werden.");
