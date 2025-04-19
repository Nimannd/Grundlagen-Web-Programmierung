// JavaScript basiert auf JSON, auf der JavaScript Object Notation. 
// Die Notation beschreibt wie man mit Text ein Objekt beschreiben kann.

// Folgendes ist Javascript, welches ein Objekt erstellt.
let person = {
    name: "Max Mustermann",
    age: 30,
    email: "max@beispiel.de",
    hobbies: ["Lesen", "Reisen", "Kochen"],
    skills: [
        {
            name: "HTML", level: 3
        },
        {
            name: "CSS", level: 2
        },
        {
            name: "JavaScript", level: 3
        }
    ],

    sayHello: function () {
        console.log("Hello! I'm " + this.name);
    }
};

console.log("JSON-Objekt:", person);
person.sayHello();

// In Javascript ist ein Objekt eigentlich eine Sammlung von Key-Value Paaren.
// Desshalb funktionieren auch folgende Besipiele:
console.log("Name:", person.name);
console.log("Name:", person["name"]);

// Mit einer foreach Schleife können wir durch die Key-Value Paare iterieren
for (let item in person) {
    console.log(item, person[item]);
}

// Da JavaScript nicht per se typsicher ist können wir auch einfach neue Felder hinzufügen
person.city = "Berlin";
console.log("City:", person.city);
