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
let numberContainer = document.getElementById('numberContainer');
let divWithNumber;





//Generare 5 numeri random inseriscili nella viewport
for (let i = 1; i <= 5; i++) {
  let randomNum = randomNumber(1, 100);
  randomArray.push(randomNum);
  divWithNumber = document.createElement('div');
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
setTimeout(askUser, 5000);



//funzione per richiedere i numeri
function askUser () {
  numberContainer.innerHTML = '';

      
      for (let i = 0; i <5; i++){
        sendUserInput();
        
      };


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


function clickButton(){

  
  

}


function sendUserInput(){

  const userInput = document.createElement('input');
  userInput.setAttribute("type", "text");
  userInput.id = ("user_input");
  const button = document.createElement('button');
  button.setAttribute("type", "button");
  button.id = ("button_data");
  button.innerHTML = ("Invia")
  numberContainer.appendChild(userInput);
  numberContainer.appendChild(button);
  button.addEventListener ("click", function clickButton(){
    
    const userInputValue = document.getElementById("user_input").value;
    userNumber.push(userInputValue);
  });
        

}

//PROBLEMI DA SISTEMARE
//-----I numeri random non devono ripetersi
//-----l'input utente deve essere un numero
