'use strict'

// Creo array numeri
let listaNumeri = []

// Definisco variabile somma
let sommaNumeri = 0

// Ciclo per i prompt e calcolo somma
for (let i = 0; i < 10; i++) {
    let itemNumero = Number(prompt('Inserisci un numero'));
    listaNumeri.push(itemNumero);
    sommaNumeri += itemNumero;
}

console.log(listaNumeri)
console.log(`La somma dei numeri dentro l'Array è ${sommaNumeri}`)