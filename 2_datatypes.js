"use strict";
//Treats all JS code as newer version.

/*
alert(3+3)
Gives an error while running the code,
because these are used in browser or with html & we r using node js.
*/

console.log(3+3);console.log("hello");
//Code readability is priority.(should be high)

let name="jigisha" //string
let age= 20 //number
let isLoggedIn =false //boolean type

/*Primitive Datatypes:
1.number-> 2 to the power 53
2.string->" "
3.boolean->true/false
4.null->stand alone value (type),representation of empty value.(eg-temp)
5.undefined->when value is not assigned,onlt variable is declared.
6.symbol->to find uniqueness,used in react.
6.BigInt->For large integer values
*/

console.log(typeof age);
//gives the type i.e number

console.log(typeof null);
//null is an object

console.log(typeof undefined);
//it is also undefined

/*
Non Primitive or reference datatypes:
1.Array
2.Objects
3.Functions
*/

//Defining symbols:
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId) //values are same still they are not equal

//Defining Arrays:
const heros=["batman","spiderman","ironman"]

//Defining Objects:
let myObj={
    name:"jigisha",//can be any datatypes
    age:20,
}

//Defining function:
const myfunc=function(){
    console.log("hii guyzz")
}