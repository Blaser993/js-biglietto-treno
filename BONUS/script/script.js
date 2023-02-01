
const d = new Date();
document.getElementById("giorno").innerHTML = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();

const t = new Date();
document.getElementById("ora").innerHTML =  t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();

// numero di chilometri che vuole percorrere?
// l’età del passeggero?

let yourName = prompt("Scrivi il tuo nome");
document.getElementById("nome");
nome.innerHTML = (yourName); 

let yourSurname = prompt("Scrivi il tuo cognome");
document.getElementById("cognome");
cognome.innerHTML = (yourSurname); 


let yourAge = prompt("Scrivi la tua età");
document.getElementById("age");
age.innerHTML = (yourAge +  " anni"); 


// prezzo totale del viaggio!
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
let yourDistance = prompt("Scrivi la distanza in Km che vuoi percorrere in Km");
document.getElementById("distance");
distance.innerHTML = (yourDistance +  " Km"); 

const billPrize = (yourDistance * 0.21);
document.getElementById("costo");
costo.innerHTML = (billPrize +  " €"); 

const discount20 = (billPrize * 0.2);
const discount40 = (billPrize * 0.4);



let billPrize18 = parseFloat(billPrize - discount20).toFixed(2);
let billPrize65 = parseFloat(billPrize - discount40).toFixed(2);


console.log ("Biglietto di", yourName, yourSurname);
console.log ("Per una tratta di", yourDistance, "Km");
console.log ("Al costo di", billPrize, "€");
console.log ("Età del passeggero:", yourAge, "anni");


// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

if ((yourAge >= 18) && (yourAge <= 65)) {

    document.getElementById("sconto");
    sconto.innerHTML = ("NESSUNO SCONTO"); 
    
    console.log ("Il prezzo del biglietto non scontato è di", billPrize, "€" );
    const result = document.getElementById("result");
    result.innerHTML = (billPrize + " €");


} else if  (yourAge > 65) {

    document.getElementById("sconto");
    sconto.innerHTML = ("40% - OVER 65");
    
    console.log ("Il prezzo del biglietto scontato è di", billPrize65, "€" );
    const result = document.getElementById("result");
    result.innerHTML = (billPrize65 + " €");


} else if (yourAge < 18) {

    document.getElementById("sconto");
    sconto.innerHTML = ("20% - UNDER 18"); 
    
    console.log ("Il prezzo del biglietto scontato è di", billPrize18, "€" );
    const result = document.getElementById("result");
    result.innerHTML = (billPrize18 + " €");
}



// - prezzo finale con massimo 2 decimali
