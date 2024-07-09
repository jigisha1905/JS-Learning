const myarray=[2,4,56,true,"jigisha"]
/*
Array is a collection of different datatypes in a single variable.
Js arrays are resizeable.
*/
console.log(myarray[1])//accessed using index

const myarry=new Array(1,2,3,4,5,6)//diff way of declaration
console.log(myarry[2])

/*--------Different Operations on Array--------*/

myarry.push(8)
console.log(myarry)
//adds element to array

myarry.pop()
console.log(myarry)
//deletes the last element from array

myarry.unshift(0)
console.log(myarry)
//inserts at the starting of array

myarry.shift()
console.log(myarry)
//deletes the starting element from array

console.log(myarry.indexOf(4))//gives element at given index
console.log(myarry.includes(9))//checks whether the element is present or not

const newarry=myarry.join()
console.log(myarry)
console.log(newarry)
//Binds two array and convert it into string

/*Different between slice and splice */
console.log("a",myarry)
const mya=myarry.slice(1,4)
console.log(mya)
console.log("b",myarry)

const mya1=myarry.splice(1,4)
console.log(mya)
console.log(mya1)
//manipulates the original array