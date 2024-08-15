const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    //How to add event?
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id=='palevioletred'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=='burlywood'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=='greenyellow'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=='purple'){
            body.style.backgroundColor=e.target.id
        }
    })
})