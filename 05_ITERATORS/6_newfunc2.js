//map keyword
const mynum=[1,2,3,4,5,6,7,8]
//const newnums=mynum.map((num)=>{return num+10})
//console.log(newnums)

//const newnums=mynum.map((num)=>num+10)
//console.log(newnums)

//chaining method-multiple maps can be used
const newnums=mynum
                    .map((num)=>num*10)
                    .map((num)=>num+1)
console.log(newnums)