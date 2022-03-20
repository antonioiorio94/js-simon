/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.*/

const randomArray = []
const userNumber = [];






//Generare 5 numeri random inseriscili nella viewport
for (let i = 1; i <= 5; i++) {
  let randomNum = randomNumber(1, 100);
  randomArray.push(randomNum);
  const divWithNumber = document.createElement('div');
  divWithNumber.id = 'number' + [i];
  divWithNumber.setAttribute("class", "number");
  divWithNumber.innerHTML = randomNum;
  numberContainer.appendChild(divWithNumber);

}

//Mostrarli nella viewport
console.log(randomArray)
//numberContainer.innerHTML = randomArray;


//funzione numeri random
function randomNumber(min, max){
  const range = max - min + 1;
  const randomNumber = Math.floor(Math.random()*range) + min;
  return randomNumber;
}


//Aggiunta Timeouts
//setTimeout(askUser, 5000);



//funzione per richiedere i numeri
function askUser () {
  let userChoice;
  for (let i = 0; i <5; i++){
    userChoice = parseInt(prompt('Inserisci il numero'));
    userNumber.push(userChoice);
    
  }
  console.log(userNumber);

  const guessedNumbers = [];


//quanti e quali numeri sono stati indovinati
for (let i = 0; i < userNumber.length; i++){

  if(randomArray.includes(userNumber[i])){

    guessedNumbers.push(userNumber[i])
    
      }
  
}
console.log(`Hai indovinato ${guessedNumbers.length} numeri: ${guessedNumbers}`);
  
}


//PROBLEMI DA SISTEMARE
//-----I numeri random non devono ripetersi
//-----l'input utente deve essere un numero
