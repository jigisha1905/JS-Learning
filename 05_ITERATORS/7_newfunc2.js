//reduce method
/*
const mynums=[1,2,3]
const mytotal=mynums.reduce(function(acc,curval){
    console.log(`acc:${acc} and curval:${curval}`)
    return acc+curval
},0)//from where accumulator has to start i.e 0
console.log(mytotal)
*/

//by using function
const mynums=[1,2,3]
const mytotal=mynums.reduce((acc,curval)=>acc+curval+0)
console.log(mytotal)