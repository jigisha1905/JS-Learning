/*----------THIS Keyword----------*/

const  user={
    username:"jigisha",
    price:999,
    welcomemsg:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }//this keyword is used for current context
}
//user.welcomemsg()
//user.username="sammy"//here context is changed
//user.welcomemsg()
//console.log(this)//shows empty object

/*
function one(){
    let username0="jigisha"
    console.log(this)
    //console.log(this.username)//this keyword can be used in obj but not in function
}
one()
*/

//Different ways of defining an arrow function

const chai=()=>{ //syntax:()=>{}
    let username0="jigisha"
    console.log(this)
}
chai()

/*
const addtwo=(num1,num2)=>{ //explicit return
    return num1+num2
}
console.log(addtwo(3,8))
*/

/*
const addtwo=(num1,num2)=>num1+num2//implicit return
console.log(addtwo(3,8))
*/

/*
const addtwo=(num1,num2)=>(num1+num2)
console.log(addtwo(3,8))
*/

//{}=>return keyword is complusory
//()=>return keyword is not required

const addtwo=(num1,num2)=>({username:"jigisha"})
console.log(addtwo(3,8))
