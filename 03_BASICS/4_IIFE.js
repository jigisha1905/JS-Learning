//Immediately Invoked Function Expressions (IIFE)
/*
WHY IIFE??
no pollution from global scope(from variables)
and immediately execute
*/

(function chai(){ //named IIFE
    console.log(`DB CONNECTED`)
})();//execution call
//IIFE invoked but doesn't know where to stop, hence a semi-colon is req

( ()=>{ //arrow function
    console.log(`DB CONNECTED TWO`)
})();

( (name)=>{  //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})('jigisha') 
//passing an argument 
