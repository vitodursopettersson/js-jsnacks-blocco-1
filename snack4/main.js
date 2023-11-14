'use strict'

// Array vuoto
const listaNumeri = []
let sommaNumeri = 0

// Ciclo con while
/*
while (sommaNumeri < 50) {
    let itemNumero = Number(prompt('Inserisci un numero'));
    listaNumeri.push(itemNumero);
    console.log(`Aggiungo il numero: ${itemNumero}`)

    sommaNumeri += itemNumero;
    console.log(`La somma è: ${sommaNumeri}`)
}

console.log(`Hai raggiunto il limite`);
*/


// Ciclo con for
let itemNumero = Number(prompt('Inserisci un numero'));
listaNumeri.push(itemNumero);
sommaNumeri += itemNumero;

console.log(`Aggiungo il numero: ${itemNumero}`);

for (let i = 0; i < listaNumeri.length; i++) {
    if (sommaNumeri < 50) {
        let itemNumero = Number(prompt('Inserisci un numero'));
        listaNumeri.push(itemNumero);
        console.log(`Aggiungo il numero: ${itemNumero}`);
        sommaNumeri += itemNumero;
        console.log(`La somma è: ${sommaNumeri}`)

    } else {
        console.log(`Hai raggiunto il limite`);
        break
    }
}