/*------while and do while loops-------*/
let index=0
while (index<=10) {
    console.log(`value of index is ${index}`)
    index=index+2
}

//while loop for array
let myarr1=["spiderman","snowwhite","tomnjerry","superman"]
let arr=0
while (arr<myarr1.length) {
    console.log(`value is ${myarr1[arr]}`)
    arr=arr+1
}

let score=11
do {
    console.log(`score is ${score}`)//atleast once the code is executed
    score++
} while (score<=10);
