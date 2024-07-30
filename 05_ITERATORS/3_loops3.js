/*------for of------*/

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}

const greeting="hello world"
for (const greet of greeting) {
    console.log(greet)
}

/*-------maps-------*/
const map=new Map() //map is a keyword which holds object
map.set('IN',"india")
map.set('USA',"united states of america")
console.log(map)

for (const [key,value] of map) {
    console.log(key,':-',value)
}

//for of loop on an object-not iteratable