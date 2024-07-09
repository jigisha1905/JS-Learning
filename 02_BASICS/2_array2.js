const heros=["ironman","spiderman","batman"]
const disney=["snowwhite","arial","rupenzel"]
/* --------Different methods of adding two arrays--------*/

/*
1.heros.push(disney)
 console.log(heros)
 gives array within an array


//console.log(heros[3][2])


2.heros.concat(disney)
 console.log(heros)

 combines two or more arrays,
 also gives a new array
 
 const alldisney=heros.concat(disney)
 console.log(alldisney)


3.const alldisney=[...heros,...disney]
 console.log(alldisney)
 using spread method
*/

const anotherarry=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarry=anotherarry.flat(Infinity)
console.log(realarry)
//returns a new array with all sub array elements concatenated to it

console.log(Array.isArray("jigisha"))
//checks if this array is present or not

console.log(Array.from("jigisha"))
//converts it into an array

console.log(Array.from({name:"jigisha"}))
//if it is unable to make an array then gives an empty array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
//converts different variables into a single array