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