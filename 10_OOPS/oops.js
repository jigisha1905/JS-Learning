//OOPS
const user={
    username:"jigisha",//properties of object
    logincount:8,
    singin:true,
    getuserdetail: function(){ //methods of object
        //console.log("got user details")
        //console.log(`username:${this.username}`)
        console.log(this)
    }
}
//object literal

console.log(user.username)
//console.log(user.getuserdetail())
console.log(this)
//this keyword=>used to refer current object

//CONSTRUCTOR FUNCTION
//const promiseone=new Promise()
//const date=new Date()
//new keyword is used to make new instance/context/copy
//this is called constructor function

function User(username,logincount,isloggedin){
    this.username=username
    this.logincount=logincount
    this.isloggedin=isloggedin

    this.greeting=function(){
        console.log(`welcome ${this.username}`)
    }
    //return this(implicitly defined)
}

const user1= new User("jigisha",7,true)
const user2= new User("hitesh",10,false)
console.log(user1)
console.log(user2)
//whenever new keyword is used a empty object is created
//a constructor function is called due to new keyword
//properties will be added with this and created

console.log(user1.constructor)
//constructor is a reference about itself