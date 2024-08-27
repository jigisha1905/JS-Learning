function multiply(num){
    return num*5
}
multiply.power=2
console.log(multiply(5))
console.log(multiply.power)
console.log(multiply.prototype)//gives methods+internal properties
//everything in js is an object 
//function is a function and also an object

//object reference is null 
//can be getters and setters

function createuser(username,score){
    this.username=username
    this.score=score
}
createuser.prototype.increment=function(){
    this.score++ //work with current context
}
createuser.prototype.printme=function(){
    console.log(`price is ${this.score}`)
}
//createuser gets confused btw both(doesn't get context)
const chai=new createuser("chai",25)
const tea=createuser("tea",250)
//after getting new keyword u know what to do
chai.printme()
