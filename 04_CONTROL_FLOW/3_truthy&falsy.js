/*------truthy values- 
when we assume that the value is true
"0",'false'," ",[],{},function()-------*/

const useeremail="jigisha@gmail"
if (useeremail) {
    console.log("got user email")
}
else{
console.log("don't have user email")
}

/*-------falsy values includes:-
false,0,-0,BigInt,0n,"",null,undefined,NaN-------*/

//detecting if an obj is empty or not
const emptyobj={}
if (Object.keys(emptyobj).length===0) {
    console.log("Object is empty")
}

//Nullish Coalescing Operator(??):null undefined
let val;
//val=5??10 //(special case)
//val=null??10
//val=undefined??15
//val=null??10??25
console.log(val)

//Ternitary Operator
//condition?true:false
const price=100
price<=80?console.log("less than"):console.log("more than")