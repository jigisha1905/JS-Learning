/*------Object de-structure------*/
const course={
    cousrename:"js",
    price:"999",
    courseinstructor:"hitesh"
}
//const{courseinstructor}=course
//console.log(courseinstructor)

const{courseinstructor:instructor}=course
console.log(instructor)
//This way u can change the name of keys and cll it

/*
const navbar=({company})=>{
}
navbar(company="jigisha")
Used in react.
*/

/*----------API----------*/
/*
{
    "name":"jigisha",
    "price":"free",
    "cousrename":"js"
}
JSON is a javascrpt object notation.  
JSON is also an object but without any name.
Here both keys and values should be in quotes i.e string.
JSON formater is a tool to understand API.
*/
