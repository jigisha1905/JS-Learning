/*------if statement------*/

if(true){ 
    //code will be executed in this scope
}
if(false){
    //code will not be executed in this scope
}

/*comparison operators->,<,<=,>=,==(check equal),!=(not equal),===(checks type also),!==*/

/*
const user_logged=true
if(2==="2"){
    console.log("executed")
}
*/
/*------if-else statement------*/

/*
temp=40
if(temp===43){
    console.log("high temp")
}
else{
    console.log("less temp")
}
*/

/*scopes
const score=200
if(score>100){
    let power="fly" (varibles declared within this scope can't be used outside)
    console.log(`user power: ${power}`);
}
console.log(`user power:${power}`) (out of the scope)
*/

const balance=1000
//if (balance>500) console.log("test"); //implicit scope

/*
------if-else if-else------
if(balance<500){
    console.log("less than")
}
else if(balance<750){
    console.log("less than 750")
}
else if(balance<900){
    console.log("less than 900")
}
else{
    console.log("greater than")
}
*/

const userloggedin=true
const debitcard=true
const loggedinemial=true

if(userloggedin && debitcard && 2==3){ //and operator
    console.log("allow")
}
if(userloggedin || loggedinemial){
    console.log("user logged in")  //or operator
}
