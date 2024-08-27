//classes
/*class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptpassword(){
        return `${this.password}abc`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const jigisha=new user("jigisha","jigisha@goggle.com","123")
console.log(jigisha.encryptpassword())
console.log(jigisha.changeusername())*/

//behind the scenes
function user(username,email,password){
    //user is a function bt behaves as an obj
    this.username=username
        this.email=email
        this.password=password
}
user.prototype.encryptpassword=function(){
    return `${this.password}abc`
}
user.prototype.changeusername=function(){
     return `${this.username.toUpperCase()}`
}

const tea=new user("tea","tea@gmail.com","123")
console.log(tea.encryptpassword())
console.log(tea.changeusername())