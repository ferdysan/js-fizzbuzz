// Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100 ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.”

//creo un ciclo for con delle condizioni che verificano tramite il modulo il resto
for(var i=1; i<=100; i++){
  //se i è un multiplo di 3 ma non di 5 il programma sostituisce al numero =  fizz
  if ((i % 3 == 0 ) && (i % 5 != 0)){
  console.log("Fizz");
  //se i è un multiplo di 5 ma non di 3 il programma sostituisce al numero =  buzz
}else if ((i % 5 == 0 ) && (i % 3 != 0)) {
    console.log("Buzz");
  //se i è un multiplo di 5 ma anche di 3 il programma sostituisce al numero = Fizbuzz
  }else if (( i % 3 == 0 ) && (i % 5 == 0)){
    console.log("FizzBuzz");
  }else {
    //per tutti gli altri numeri stampa il valore numerico
    console.log(i);
  }
}
