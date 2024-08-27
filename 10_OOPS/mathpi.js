//can we change the value of pi from 3.14 to 4??

//const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
//tells about the hidden properties & things of an object
//console.log(descriptor)

//const mynewobj=Object.create(null)
const chai={
    name:"chai",
    price:250,
    isavailable:true,
    orderchai:function(){
        console.log('chai nhi bani')
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
//name is the property of chai

Object.defineProperty(chai,'name',{
   // writable:false,
    enumerable:false
    //when enumerable is false iteration is stopped
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
//the properties of chai gets changed using defineproperty

for(let[key,value]of Object.entries(chai)){
    //whole function is coming in the op but we want only values
    if(typeof value!='function'){
        console.log(`${key}:${value}`)
    }
}