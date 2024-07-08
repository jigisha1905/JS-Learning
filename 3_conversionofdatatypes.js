let score=33
//Here there is a guarantee that score is a int type

/*
const{scores}= req.body
There is no guarantee that it is a int only (can be anything)
*/

console.log(typeof score);
console.log(typeof(score)); //Printing using functions

let scores="33abc" //Given in string
console.log(typeof(scores));

let valueInNum = Number(scores)
console.log(typeof valueInNum);
/*
This method is used to change the datatype 
i.e from string to number
*/
console.log(valueInNum);
//Gives NaN i.e not a number (for 33abc)

/*
1.if let score=null
  value we get is zero.
2.if let score=undefined
  value we get is NaN.
3.if let score=true(boolean)
  value we get is 1.
4.if let score= jigisha(which can't be converted into number)
   value we get is NaN.
*/

let islogged=1
let booleanIsLoggedIn=Boolean(islogged)
console.log(booleanIsLoggedIn)
//To change boolean values to true &false

/*
In boolean:
1=>true
0=>false
empty string("")=>false
any string("jigisha")=>true
*/

let somenum=45
let stringNum=String(somenum)
console.log(stringNum)
console.log(typeof stringNum)
//To convert num to string