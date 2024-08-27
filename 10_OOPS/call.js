function setusername(username){
    this.username=username
    console.log("called")
}

function createuser(username,email,password){
    //my this is used it refers to current obj
    setusername.call(this,username)
    //this is not getting called u have just given it's reference

    this.email=email
    this.password=password
}

const chai=new createuser("chai","chai@123","123")
console.log(chai)
//call ->calls a method of an object,substituting another obj for the current obj
//the variables declared within them is also gone