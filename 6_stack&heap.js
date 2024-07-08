/*
Stack memory->Primitive datatypes(u get copy)
Heap memory->Non Primitive datatypes(u get reference of value)
*/

//stack memory(form of table)
let MyYoutube="jigisha@123"
let anotherName=MyYoutube
anotherName="js@134"
console.log(MyYoutube)
console.log(anotherName)

//heap memory
let user1={
    email:"abc@1234",
    upi:"abcd78"
}
let user2=user1
user2.email="jigisha@34"
console.log(user1.email)
console.log(user2.email)