//fetch('https://something.com').then().catch().finally()
//then()=>resonse catch()=>error finally=>everything

//promise object represents the eventual completion(or failure) of an asynchronous(non blocking approach) operation and its resulting value
const promise1=new Promise(function(resolve,reject){
    //do an async task
    //db calls,cryptography,network
    setTimeout(function(){
        console.log('async task is completed')
        resolve()
    },1000);
})

promise1.then(function(){
    console.log("promise1 consumed")
})
//resolve ka connection with .then()

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 consumed")
})
//both making of promise and consumption done in same block

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user)
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"jigisha",password:2004})
        }
        else{
            reject('Error something went wrong')
        }
    },1000)
})
promise4.then((user)=>{
    console.log(user)
    return user.username
    //this is called chaining
    //multiple .then() can be used
}).then((username)=>{
    console.log(username)
}).catch(function(e){
    console.log(e)
}).finally(()=>{
    console.log("the promise is either resolved or rejected")
})

//using promise without then() & catch()
const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"js",password:123})
        }
        else{
            reject('Error js went wrong')
        }
    },1000)
})
async function consumepromise5(){//error won't come
    //can't handle errors on it's own
    try {
        const response=await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumepromise5()

/*
fetch('https://something.com')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))
*/
//fetch has a separate queue called microtask queue or priority queue