/*-------for each-------*/
const coding=["js","py","cpp","ruby"]//basically used for arrays

/*coding.forEach(  function (item) {
    console.log(item)
})

coding.forEach( (item)=>{
    console.log(item)
})

function printme(item){
    console.log(item)
}
coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})*/

//How to access variables within an array's object?(used in DBMS)
/*
const mycoding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"python",
        languagefilename:"py"
    },
    {
        languagename:"c++",
        languagefilename:"cpp"
    }
]
mycoding.forEach((item)=>{
    console.log(item.languagename)
})
const values=coding.forEach((item) => {
    console.log(item)
    return item
});
console.log(values)//for each loop doesn't return any value
*/

const mynum=[1,2,3,4,5,6,7,8,9]
//const newnums=mynum.filter( (num) => num>4)//returns values
//console.log(newnums)

/*const newnums=mynum.filter( (num) => {
    return num>4 //if {} scopes are used then return keyword has to be used
})
console.log(newnums)*/

const newnums=[]
mynum.forEach((num) => {
    if (num>4) {
        newnums.push(num)
    }
});
console.log(newnums)

//filter is used to find a particular obj from an array