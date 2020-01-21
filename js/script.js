alert('hello');
//Un alert espone 5 numeri casuali.Da li parte un timer di 30 secondi.Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

//step 1 : alert con 5 numeri casuali: creazione variabile array e funzione che permette di avere 5 numeri random differenti
var randomNumbers = [];
while (randomNumbers.length <5) {
  var cpuRandomNumber = getRandom(1, 100);
  if(randomNumbers.includes(cpuRandomNumber) == false) {
    randomNumbers.push(cpuRandomNumber);
  }
}
console.log(randomNumbers.sort());

//funzione per numero random
function getRandom (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + min) + 1);
  return random;
}
