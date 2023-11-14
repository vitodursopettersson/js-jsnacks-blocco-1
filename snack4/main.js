'use strict'

// Array vuoto
const listaNumeri = []
let sommaNumeri = 0


// Fino a
while (sommaNumeri < 50) {
    let itemNumero = Number(prompt('Inserisci un numero'));
    listaNumeri.push(itemNumero);
    console.log(`Aggiungo il numero: ${itemNumero}`)

    sommaNumeri += itemNumero;
    console.log(`La somma è: ${sommaNumeri}`)
}

console.log(`Hai raggiunto il limite`)