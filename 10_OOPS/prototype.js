let myname="jigisha     "
let mychannel="chai      "
console.log(myname.truelength)
//truelength is undefined

let myheros=["hulk","spiderman"]
let heropower={
    hulk:"power",
    spiderman:"sling"

    //getspiderpower: function(){
    //    console.log(`spidy power is ${this.spiderman}`)
    //}
}
Object.prototype.jigisha=function(){
    console.log(`jigisha is present in all objects`)
}
//heropower.jigisha()
//myheros.jigisha()//array also gets the property
//everything like function,array,string goes through object
//object doesn't have anything higher

Array.prototype.heyjigisha=function(){
    console.log(`jigisha says hello`)
}
myheros.heyjigisha()
myheros.jigisha()
//if power is given to only array so will it go to object as well??
//so power goes to only array
//but if power is given to path it goes to all

//INHERITANCE
const user={
    name:"chai",
    email:"chai@goggle.com"
}
const teacher={
    makevideo:true
}
const teachingsupport={
    isavaliable:false
}
const tasupport={
    makeassignment:"js assignment",
    fulltime:true,
    __proto__:teachingsupport
}
teacher.__proto__=user
//this is prototypal inheritance
//how we can access the properties of others??
//old syntax

//moden syntax
Object.setPrototypeOf(teachingsupport,teacher)

let anotherusername="chaiaurcode   "

String.prototype.truelength=function(){
    //console.log(`${this}`)
    //console.log(`${this.name}`)
    console.log(`true length is:${this.trim().length}`)
}
anotherusername.truelength()
"jigisha".truelength()
"icetea".truelength()