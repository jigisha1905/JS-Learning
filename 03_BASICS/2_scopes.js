//cruly brackets with if-else,function->called scopes
let a=400 //(global scope)
if(true){
    let a=10//(local scope)
    const b=20
    //var c=30
    console.log(a)
}
console.log(a) //present inside if block can't be called outside,global variable can be called
//console.log(b)
//console.log(c) //it can be called(avoid use of var)

/*
Scopes in nested function??
function one(){
    const uname="jigisha"
    function two(){
        const website="yt"
        console.log(uname)
    }
    two()
}
one()
child function can access parent variables
*/

/*
Scopes in nested if-else??
if(true){
    const user="jigisha"
    if(user==="jigisha"){
        const website=" youtube"
        console.log(user+website)
    }
    //console.log(website)
}
*/

/*------EXAMPLE------*/

//Different ways to make function
function addone(num){
    return num+1
}
addone(5)
addtwo(5)//calling a function before declaring(hoisting concept)
const addtwo=function(num){
    return num+2
}
//addtwo(5)
