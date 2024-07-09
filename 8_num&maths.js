const balance=new Number(400)
console.log(balance)
//Gives the type of object i.e Number

/*-----Different number properties-----*/

console.log(balance.toString())
/*
changes num to string type,
since it is a string now all string property can be used
*/

console.log(balance.toFixed(2))
//gives upto two decimal places only

const other=12.894
console.log(other.toPrecision(3))
/*
Gives a precise value upto given char,
converts num into string type.
Gets priority before decimal.
*/

const num1=1000000
console.log(num1.toLocaleString())
console.log(num1.toLocaleString('en-IN'))//gets indian method of calculation

/*------------Maths Library------------*/
console.log(Math)

console.log(Math.abs(-4))
//only changes from -ve to +ve

console.log(Math.round(4.6))
console.log(Math.ceil(4.3))//choose top value
console.log(Math.floor(4.9))//choose lower value

console.log(Math.random())
/*value is between 0 to 1,
any random value is choosen*/
console.log(Math.random()*10 +1)//to get values btw 1 to 9

//Formula:Math.random()*(max-min+1)