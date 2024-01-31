// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// *Prima di partire a scrivere codice poniamoci qualche domanda:*
// - Come faccio a sapere se un numero è divisibile per un altro?
// - Abbiamo visto qualcosa di particolare che possiamo usare?
// *Consigli del giorno:*
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// *BONUS 1:*
// - Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// *BONUS 2:*
// - Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

// creo un elemento html da utilizzare nel ciclo "for"
const grigliaElement = document.querySelector("#griglia");

// // creiamo un ciclo for che crei i numeri da 1 a 100
// for(let i = 1; i<=100; i++){

//     // creiamo la condizione che se il numero scritto è un multipo di 3 e di 5 apllico una classe
//     if (i % 3 == 0 && i % 5 == 0) {
//         grigliaElement.innerHTML +=
//         `<div class="square frizzbuzz" >${i}</div>`;
//     // creiamo la condizione che se il numero scritto è un multipo di 3 apllica una seconda classe
//     } else if (i % 3 == 0){
//         grigliaElement.innerHTML +=
//         `<div class="square frizz" >${i}</div>`;
//     // creiamo la condizione che se il numero scritto è sia multipo 5 apllica una terza classe
//     } else if (i % 5 == 0){
//         grigliaElement.innerHTML +=
//         `<div class="square buzz" >${i}</div>`;
//     // altrimenti non applica nessuna classe
//     }else{
//         grigliaElement.innerHTML +=
//         `<div class="square" >${i}</div>`;
//     }
// }// 


// BONUS 1
for(let i = 1; i<=100; i++){

    // creare un elemento HTML
    const newElement = document.createElement("div");
    newElement.className = "square";
    newElement.innerHTML = i;

    grigliaElement.append(newElement);
  
    // creiamo la condizione che se il numero scritto è un multipo di 3 e di 5 apllico una classe
    if (i % 3 == 0 && i % 5 == 0) {
        newElement.className += " frizzbuzz"
    // creiamo la condizione che se il numero scritto è un multipo di 3 apllica una seconda classe
    } else if (i % 3 == 0){
        newElement.className += " frizz"
    // creiamo la condizione che se il numero scritto è sia multipo 5 apllica una terza classe
    } else if (i % 5 == 0){
        newElement.className += " buzz"
    // altrimenti non applica nessuna classe
    }else{
        newElement.innerHTML = i;
    }
}
