/*
There are two ways of declaring an object:
1.By literals(not a singleton object)
2.By constructors(singleton obj)
*/

//OBJECT LITERALS

const mysym=Symbol("key1") //declaring a symbol

const jsuser={
    name:"jigisha",
    "full name":"jigisha singh",
    [mysym]:"key1", //symbol acting as keys
    age:20,
    location:"jaipur",
    isLoggedIn:false,
    lastlogindays:["mon","wed"],
    email:"jigisha@gmail.com"
}  
/*
object can contain any datatype,
array can also be used,
syntax->keys:values 
*/
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["full name"])
console.log(jsuser[mysym]) //printing symbol value

jsuser.email="jigisha@google.com"
//to make changes in an object key's values

/*
Object.freeze(jsuser)
jsuser.email="jigisha@yt.com"
console.log(jsuser)
for not able to make any changes in the object key's values
*/

jsuser.greeting=function(){ //declaring a function
    console.log("hello js user")
}
console.log(jsuser.greeting())
//function is treated as a normal variable in js

jsuser.greeting1=function(){
    console.log(`hello js user,${this.name}`)
}
console.log(jsuser.greeting1())
//to access name from the object