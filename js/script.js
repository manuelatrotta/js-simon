//alert('hello');
//Un alert espone 5 numeri casuali.Da li parte un timer di 30 secondi.Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

//step 1 : alert con 5 numeri casuali: creazione variabile array e funzione che permette di avere 5 numeri random differenti
var randomNumbers = [];
while (randomNumbers.length <5) {
  var cpuRandomNumber = getRandom(1, 100);
  if(randomNumbers.includes(cpuRandomNumber) == false) {
    randomNumbers.push(cpuRandomNumber);
  }
}
console.log(randomNumbers);
//alert all'utente con i 5 numeri casuali
alert('memorizza questa serie di 5 numeri' +' '+ randomNumbers);

//funzione per numero random
function getRandom (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + min) + 1);
  return random;
}
//deve partire un timer di 30 secondi e dopo l'utente deve inserire i numeri che ricorda.
//variabili per la funzione countDownScore
  setTimeout(getNumbersUser,8000);
  //console.log(numbersUser);
//inserimento 5 numeri utente
//var numbersUser = [];
var numbersUser = [];
function getNumbersUser(array){
for(i=0; i<5; i++){
  var numberMem = parseInt(prompt('inserisci 5 numeri che ricordi'));
  numbersUser.push(numberMem);
  }
}
console.log(numbersUser);
//function getNumbersUser(array){
//for(i=0; i<5; i++){
//  var numberMem = parseInt(prompt('inserisci 5 numeri che ricordi'));
//  numbersUser.push(numberMem);
//}
//  console.log(numbersUser);

//bisogna confrontare i numeri inseriti dall'utente con quelli generati dal pc
//funzione in cui si verifica se il numero da cercare è presente nell'array
