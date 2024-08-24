//All the events in js run sequentially

/*document.getElementById('owl').onclick=function(){
    alert("owl clicked")
}*/

document.getElementById('owl').addEventListener('click',function(){
    alert("owl clicked")
})
//third parameter is the default false hence no need to write it

//attachEvent()
//jQuery-on event listener

document.getElementById('owl').addEventListener('click',function(e){
    console.log(e)
},false)

//type(keyboard,mouse events)
//timestamp
//defaultPrevented(default behaviour change)
//target
//toElement,srcElement,currentTarget
//interview related->clienX,clienY,screenX,screenY
//altkey,ctrlkey,shiftkey,keyCode(keyboard speed)

//Event Propogation->event bubbling and event capturing
document.getElementById('image').addEventListener('click',function(e){
    console.log("clicked")
},false)
document.getElementById('owl').addEventListener('click',function(e){
    console.log("owl clicked")
},false)
//owl is present inside the ul so upper code will also be printed
//Bubbling(lower to upper)->firslty owl clicked then goes to the ul

document.getElementById('image').addEventListener('click',function(e){
    console.log("clicked")
},true)
document.getElementById('owl').addEventListener('click',function(e){
    console.log("owl clicked")
},true)
//Capturing(upper to lower)->firslty ul then owl clicked

document.getElementById('image').addEventListener('click',function(e){
    console.log("clicked")
    e.stopPropagation()
},false)
document.getElementById('owl').addEventListener('click',function(e){
    console.log("owl clicked")
},false)
//To stop bubbling we use a method
//now only owl clicked will be printed it will not go to upper ul

document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault()
    console.log("google clicked")
},false)
//method used to prevent the browser from executing the default action of selected element

//If you want that the image gets removed when it is clicked,what to do?

//event spilover taking place
document.querySelector('#images').addEventListener('clcik',function(){
    console.log(e.target.tagname)//we need whole li

    if(e.target.tagname=='IMG'){
        console.log(e.target.id)
        let remove=e.target.parentNode
        remove.remove()
    }
    //let remove=e.target.parentNode
    //remove.remove()//ul removed
    //emove.parentNode.removeChild(remove)
})