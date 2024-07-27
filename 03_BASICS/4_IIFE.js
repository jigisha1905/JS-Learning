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

//javascript is single threaded

/*
Javascript Execution Context
1.Global Execution Context(this)
2.function Execution Context
3.Eval Execution Context

How does js execute code?
1.global execution phase
2.memory creation phase-allocation of space/memory for variables
3.execution phase-executes the code
(every time a function is made memory creation phase+execution phase occurs)
(when the execution part is completed it gets deleted)
*/
