'use strict'

const n = Number(prompt('Inserisci il numero di Array'));
const containerArray = []

for (let i = 0; i < n; i++) {

    const arrayItem = []

    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        arrayItem.push(randomNumber)
    }

    console.log(arrayItem)
}