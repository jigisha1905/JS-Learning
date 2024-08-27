//STATIC KEYWORD=>defines static methods for classes
class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username:${this.username}`)
    }
    static createId(){
        //static keyword prevents the access of a property or method
        return `123`
    }
}
const jigisha= new user("jigisha")
//console.log(jigisha.createId())

class teacher extends user{
    constructoronstructor(username,email){
        super.call(username)
        this.email=email
    }
}
const ip=new teacher("ip","ip@124")
ip.logme()
console.log(ip.createId())
//doesn't even letting to inherit from other class