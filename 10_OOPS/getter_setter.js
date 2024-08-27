//GETTERS AND SETTERS
class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
        //return should be there
    }
    set email(value){
        this._email=value
    }
    //_email is a new email which is not given to everyone

    //contructor is setting the email not password
    //password is overwritten
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        //this._password=value.toUpperCase()
        this._password=value
    }
    //as both getters and setters are doing there work they r mainly racing this is a problem
}
//by deafult present in every class
//getters and setters can be applied on all variables or properties
//both getters and setters has to be used in a class

//get=>gets a value from memory(overwrite)
//setters=>sets a value
const jigisha=new user("jigi@123","abc")
console.log(jigisha.password)
console.log(jigisha.email)

//getters and setters r the methods which is kept above the property