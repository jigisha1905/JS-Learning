const name="jigisha"
const count=30
console.log(name+count+"value")
//Concatination i.e adding two strings

console.log(`hello my name is ${name} and my count is${count}`)
//String interpollation concept

/*-----Different operations on string-----*/

const game=new String("spiderman")
console.log(game[0])
//to extract an char for a given index

console.log(game.__proto__)
//to get object(gets an empty obj but it's not empty)

console.log(game.length)
//gets the length of string stored in game

console.log(game.toUpperCase())
//converts the string to uppercase

console.log(game.charAt(6))
//for finding the char for a given index

console.log(game.indexOf('m'))
//for finding the index of a given char

const newstr=game.substring(0,5)
console.log(newstr)
//for extracting a part of string(only positive values)

const another=game.slice(-8,4)
console.log(another)
/*for extracting a part of string,
negative values can be also used*/

const newstr1="    jigisha    "
console.log(newstr1)
console.log(newstr1.trim())
//removes all the front and back spaces present in an string

const url="https://jigisha,com/jigisha%30singh"
console.log(url.replace('%30','-'))
//for replacing one char by another

console.log(url.includes('jigisha'))
//to find whether it is present in string or not
