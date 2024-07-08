//All these const var let are keywords.

const account_Id=12345 
/*
const keyword is used to declare constants.
The value with const can't be changed,(locked)
whatever the value is given remains same during the whole program.
*/

//account_Id=6789 (not allowed)

let account_Email="jigisha@gmail.com"
var account_Password="2004"
account_City="Jaipur" 
//var and let keywords are used to create variables.
//Whose values can be changed.

/*
Prefer not to use var,
because of issue in block scope and functional scope.
*/

let account_State;
//semicolon may be used or not in js.

account_Email="rimjhim@google.com"
account_Password="2003"
account_City="delhi"
/*
Variables can be declared without any keywords too.
But this is not a good approach.
*/

console.log(account_Id)
//Used to print a single variable in one go.

console.table([account_Id,account_Email,account_Password,account_City,account_State])
/*
Using this command all the variables can be printed in one go,
in the form of a table.
*/