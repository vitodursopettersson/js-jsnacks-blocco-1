'use strict'

// Creo array numeri
let listaNumeri = []

// Ciclo per i prompt
for (let i = 0; i < 10; i++) {
    listaNumeri.push(prompt('inserisci un numero'))
}

console.log(listaNumeri)

// Definisco variabile somma
let sommaNumeri = 0

// Calcolo somma
for (let i = 0; i < listaNumeri.length; i++) {
    sommaNumeri = sommaNumeri[i] + listaNumeri[i]
}
console.log(sommaNumeri)
