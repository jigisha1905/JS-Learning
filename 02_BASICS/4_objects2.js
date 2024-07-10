
const ytuser1=new Object() //(singleton obj)
const ytuser={} //(non-singleton obj)
//Both are empty object

ytuser.id="123abc"
ytuser.name="sammy"
ytuser.isLoggedIn=false
//console.log(ytuser)//makes a object with assigned values

const regularuser={
    email:"some@gmail.com",
    fullname: {
        firstname:"jgisha",
        lastname:"singh"
    }
}
console.log(regularuser.fullname)
console.log(regularuser.fullname.firstname)
//To access objects within an object

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)//{}is target rest are source(not complusory)
//console.log(obj3)
/*
assign method copies all enumerable own properties,
from one or more obj to target obj.
*/

const obj3={...obj1,...obj2}
console.log(obj3)
//another method of joining two objs

const users=[
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:2,
        email:"cgfd@gmail.com"
    }
]
console.log(users[1].email)
/*
when objects are present in an array,
it can be accessed using indexs
*/

console.log(ytuser)
/*------Different methods------*/

console.log(Object.keys(ytuser))
console.log(Object.values(ytuser))
console.log(Object.entries(ytuser))//every key is made into an array
console.log(ytuser.hasOwnProperty('isLoggedIn'))
//checks if isloggedin is present in the obj or not
