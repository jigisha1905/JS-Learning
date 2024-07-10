function saymyname(){//function declare+define
    console.log("jigisha")
}
//saymyname()//function call
saymyname//reference of function

/*
function addtwonum(num1,num2){//parameters
//it's not necessary to give datatypes in js
    console.log(num1+num2)
}
addtwonum(3,7)//arguments
addtwonum(3,"7")
addtwonum(5,null)
*/

function addtwonum(num1,num2){
    let result=num1+num2
    console.log("jigisha")
    return result//after return statement nothing extra can be printed
    //return num1+num2(another way of representation)
}
const result=addtwonum(3,6)
//console.log(result)

function loginusermsg(username="sammy"){//giving default value
    if(username===undefined){ //(!username)eqivalent to username===undefined
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
//console.log(loginusermsg("jigisha"))
//console.log(loginusermsg()) //undefined
//When no parameters are given default values are taken

//Example->Shopping cart app
//How multiple parameters are passed in an array??
/*
function calculatecartprice(...numcart){//rest operator
    return numcart
}
console.log(calculatecartprice(200,400,700))
//With rest operator it put all the values into a array
*/
function calculatecartprice(val1,val2,...numcart){
    return numcart
}
console.log(calculatecartprice(200,500,700,300,600))
//first two values goes into val1&val2 rest into the array

//How to handle object in a function??
const user={
    username:"jigisha",
    price:999
}

function handleobject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}
handleobject(user)
handleobject({ //directly passing an obj
    username:"tommy",
    price:99
})

//How to handle arrays in a function??
const newarr=[200,60,800,59,49]

function returnarry(getarr){
    return getarr[1]
}
console.log(returnarry(newarr))
console.log(returnarry([30,79,800,60]))//directly passing an array
