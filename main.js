let kilometri = prompt( "numero kilometri che deve percorrere");
let etaUtente = prompt("Inserisci la tua età");
let prezzo = kilometri * (0.21)

document.getElementById("prezzo").innerHTML = "il costo del biglietto é, " + prezzo;
         


if (etaUtente < 18){
    let prezzoScontato = prezzo - (prezzo *0.2);
    document.getElementById("prezzo").innerHTML = "il costo del biglietto é, " + prezzoScontato; 
}
if (etaUtente > 65){
    let prezzoScontatoOver = prezzo - (prezzo *0.4);
    document.getElementById("prezzo").innerHTML = "il costo del biglietto é, " + prezzoScontatoOver; 
}
