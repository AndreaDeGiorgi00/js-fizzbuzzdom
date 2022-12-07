/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
 per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.*/



 // 1-ti stampa da 1 a 100 
    for (let i=1 ; i <= 100 ; i++){
 // 2- seleziono i diversi valori possibili
    if(i%3==0 && i%5==0){
        /*stampa*/
        console.log("FizzBuzz")
    }else if(i%3==0){
        /*stampa*/
        console.log("Fizz")
    }
    else if(i%5==0){
        /*stampa*/
        console.log("Buzz")
    }else{
        /*stampa*/
        console.log(i)
    }
    
    }