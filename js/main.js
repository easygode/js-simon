'use strict';

//1. Creo una funzione che genera x numeri casuali da 1 a max e li inserisce in un array

setTimeout (createNumbers, 30000);
let randomNumbers = [];

function createNumbers (times, max){

    for(let i = 0; i < times; i++){
        const num = Math.floor((Math.random() * max)+ 1);
        randomNumbers.push(num);
        console.log(randomNumbers[i]);
    } 
}   
createNumbers (5, 100);

//2. Mostro i 5 numeri generati nella pagina, usando innerHTML
    const simon = document.getElementById('simon-numbers');
    let simonNumbers = document.createElement('li');
    simonNumbers.innerHTML = ([randomNumbers]);
    simon.append(simonNumbers);

//3. Imposto un timer setTimeout che farà scomparire i 5 numeri dalla pagina dopo 30 secondi


/*4. Un altro timer attiverà un prompt  dopo 31 secondi
5. Creo 5 prompt per far indovinare all'utente i numeri mostrati in precedenza
   I prompt saranno inseriti in un ciclo while in modo che l'input sarà terminato quando tutti i 5 minuti saranno inseriti
6. Inserisco i numeri inseriti dall'utente in un'altro array
7. Con un ciclo for e include verifico i numeri inseriti dall'utente con quelli casuali generati
8. Infine mostro in pagina i numeri indovinati e tutti i numeri casuali iniziali*/

