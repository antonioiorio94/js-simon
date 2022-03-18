/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.*/

const randomArray = []
let numberContainer = document.getElementById('container');



for (let i = 1; i <= 5; i++) {
  let randomNum = randomNumber(1, 100);
  randomArray.push(randomNum);

}

console.log(randomArray);
numberContainer.innerHTML = randomArray;

function randomNumber(min, max){
  const range = max - min + 1;
  const randomNumber = Math.floor(Math.random()*range) + min;
  return randomNumber;
}