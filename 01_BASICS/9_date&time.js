/*-----Dates-----*/

let mydate=new Date()
//Different methods to change the format of date:
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(typeof mydate) //it's an object

let createdate=new Date(2024,0,23)
console.log(createdate.toDateString())
//months in JS starts with 0

let mycreatedate=new Date("2024-01-14") //months start with1
console.log(mycreatedate.toLocaleDateString())

let date1=new Date("01-14-2024") //india prefer this method
console.log(date1.toLocaleTimeString())

let mytimespan=Date.now()
console.log(mytimespan)

console.log(mycreatedate.getTime())

console.log(Math.floor(Date.now()/1000))
//to get time in seconds (divide by 1000)
