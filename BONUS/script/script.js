// numero di chilometri che vuole percorrere?
// l’età del passeggero?

let yourName = prompt("Scrivi il tuo nome");
let yourSurname = prompt("Scrivi il tuo cognome");
let yourAge = prompt("Scrivi la tua età")


// prezzo totale del viaggio!
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
let yourDistance = prompt("Scrivi la distanza in Km che vuoi percorrere in Km");

const billPrize = (yourDistance * 0.21);

let discount20 = (billPrize * 0.2);
let discount40 = (billPrize * 0.4);

let billPrize18 = parseFloat(billPrize - discount20).toFixed(2);
let billPrize65 = parseFloat(billPrize - discount40).toFixed(2);


console.log ("Biglietto di", yourName, yourSurname);
console.log ("Per una tratta di", yourDistance, "Km");
console.log ("Al costo di", billPrize, "€");
console.log ("Età del passeggero:", yourAge, "anni");


// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

if ((yourAge >= 18) && (yourAge <= 65)) {
    
    console.log ("Il prezzo del biglietto non scontato è di", billPrize, "€" );
    const result = document.getElementById("result");
    result.innerHTML = (billPrize + " €")   


} else if  (yourAge > 65) {
    
    console.log ("Il prezzo del biglietto scontato è di", billPrize65, "€" );
    const result = document.getElementById("result");
    result.innerHTML = (billPrize65 + " €");
   

} -else if (yourAge < 18) {
    
    console.log ("Il prezzo del biglietto scontato è di", billPrize18, "€" );
    const result = document.getElementById("result");
    result.innerHTML = (billPrize18 + " €");
  
}


// - prezzo finale con massimo 2 decimali
