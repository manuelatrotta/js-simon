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
//deve partire un timer di 30 secondi e dopo l'utente deve inserire i numeri che ricorda (for con i<5)
//variabile in cui verranno inseriti i numeri uguali a quelli generati random dal pc
var numbersFind = [];
setTimeout (function() {
  var numbersOk =[];
  for(var i = 0; i < 5; i++) {
    var numberUser = parseInt(prompt('inserisci il numero che ricordi ' + (i + 1)));
    // devo controllare che il numero inseito dal''utente  deve essere in numberRandom e se sono presenti push in numbersFind
    if(randomNumbers.includes(numberUser)) {
      numbersFind.push(numberUser)
    }
  }
  console.log(numbersFind);
  //alert con numeri trovati uguali e punteggio con .length
  alert(numbersFind + ' '+ 'hai indovinato' + ' '+ numbersFind.length + ' '+ 'numeri');
}, 30000)
