// Simulierte die fetch funktion, die eine API-Abfrage imitiert
function simulateFetch() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: "John Doe", age: 25 };
        resolve(data);
      }, 2000); // Simuliert eine Verzögerung von 2 Sekunden
    });
  }
  
  // Asynchrone Funktion, die auf die fetchData-Funktion wartet
  async function getUserData() {
    console.log("Daten werden abgerufen...");
    
    try {
      const userData = await simulateFetch();
      console.log("Daten abgerufen:", userData);
    } catch (error) {
      console.error("Fehler beim Abrufen der Daten:", error);
    }
  }
  
  // Aufruf der asynchronen Funktion
  getUserData();
  
  console.log("Dieser Log erscheint sofort, da die Daten asynchron abgerufen werden.");
  