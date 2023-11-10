// L’utente inserisce due parole in successione, con due prompt.

const firstWord = prompt('Inserisci la prima parola');
const secondWord = prompt('Inserisci la seconda parola');

// Il software stampa prima la parola più corta, poi la parola più lunga.
if (firstWord.length > secondWord.length) {
    console.log(firstWord, 'è la parola più lunga');
    console.log(secondWord);
} else if (secondWord > firstWord) {
    console.log(secondWord, 'è la parola più lunga');
    console.log(firstWord);
} else {
    console.log(firstWord, secondWord, 'sono egualmente lunghe')
}
