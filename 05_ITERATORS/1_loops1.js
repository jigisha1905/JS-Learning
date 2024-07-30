/*-------for loop-------*/

/*
for (let i= 0; i<= 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is best num")
    }
    console.log(element)
}
*/
//console.log(element)//outside the scope

//loop within loop
/*
for(let i=0;i<=10;i++){
    console.log(`outer loop value:${i}`)
    for(let j=0;j<=10;j++){
        //console.log(`inner loop value ${j} and inner loop ${i}`)
        console.log(i+'*'+j+'='+i*j)
    }
}
*/

let myarr=["flash","batman","spiderman"]
console.log(myarr.length)//to find length of array

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element)
}

/*------break and continue-------*/
/*
for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log(`detected 5`)
        break //gets out of the code
    }
    console.log(`value of i is ${index}`)
    
}
*/
for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log(`detected 5`)
        continue //skips a part of code
    }
    console.log(`value of i is ${index}`)
    
}
