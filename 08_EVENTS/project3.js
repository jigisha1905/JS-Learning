//generate a random color(in hexcode)
const randomcolor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
        //get random values btw 0 to 16
    }
    return color
}
console.log(randomcolor())

let intervalId
const startchangingcolor=function(){
    if(!intervalId){
    intervalId=setInterval(changebgcolor,1000)//for changing color per second
    }
    function changebgcolor(){
    document.body.style.backgroundColor=randomcolor()
    }
}
const stopchangingcolor=function(){
    clearInterval(intervalId)
    intervalId=null
}

document.querySelector('#start').addEventListener('click',startchangingcolor)
document.querySelector('#stop').addEventListener('click',stopchangingcolor)
//floor->lower bound values
//ceil->upper bound values