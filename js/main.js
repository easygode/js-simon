'use strict';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function game(){

    const htmlNumbers = document.getElementById('simon-numbers');
    console.log(htmlNumbers);
    const simonNumber = [];
    const timer = 3;

    for(let i = 0; i < 5; i++){
        const randomNumbers = getRndInteger(1,100);
        simonNumber.push(randomNumbers);
    }

    htmlNumbers.innerHTML = simonNumber;

    setTimeout (function(){
        htmlNumbers.innerHTML = '';
    }, timer * 1000)

    setTimeout(function(){
        const userNumber = [];
        for(let i = 0; i <= 5; i++){
            const userNumber = Number(prompt(`Inserisci un numero ${i}`));
            if(simonNumber.includes(userNumber) && !userNumber.includes(userNumber)){
                userNumber.push(userNumber);
            }
            if(userNumber.lenght > 0){
                document.getElementById('result').innerHTML = `Hai indovinato ${userNumber.lenght} numeri. I numeri sono ${userNumber}`;
            } else {
                document.getElementById('result').innerHTML = 'Sei una schiappa';
            }
        }
    }, (timer + 1) * 2000);
}

game();

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

//invoco la funzione per l'esercizio, 5 numeri e numeri da 1 a 100
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

