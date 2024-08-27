//INHERITANCE
class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`)
    }
}
//extends keyword is used in inheritance
//it inherits the property of another function
class teacher extends user{
    constructor(username,email,password){
        super(username)
        //sees which class it is refering to then gets it's property
        this.email=email
        this.password=password
    }
    addcourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}

const chai=new teacher("chai","chai@123","345")
chai.addcourse()
chai.logme()

const abc=new user("abc")
abc.logme()

//console.log(chai==abc)
//console.log(chai==teacher)
//it's an instance given

console.log(chai instanceof teacher)
console.log(chai instanceof user)