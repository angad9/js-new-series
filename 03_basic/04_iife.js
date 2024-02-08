// Immediately Invoked Function Expression (IIFE)

(function chai (){
    //named IIFE
    console.log("DB CONNECTWD");
})() ;

(  (name) =>  {
    console.log(`DB CONNECTED TWO $(name)`);
})('Angad') 

