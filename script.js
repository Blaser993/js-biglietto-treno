console.log("works");

// numero di chilometri che vuole percorrere?
// l’età del passeggero?

let yourName = prompt("Scrivi il tuo nome");
let yourSurname = prompt("Scrivi il tuo cognome");
let yourAge = prompt("Scrivi la tua età")

let yourDistance = prompt("Scrivi la distanza in Km che vuoi percorrere in Km");

console.log ("Biglietto di", yourName, yourSurname);
console.log ("Per una tratta di", yourDistance, "Km");
console.log ("Al costo di", billPrize, "€");
console.log ("Età del passeggero:", yourAge, "anni");



// prezzo totale del viaggio!
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)

const billPrize = (yourDistance * 0.21);


// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - prezzo finale con massimo 2 decimali

