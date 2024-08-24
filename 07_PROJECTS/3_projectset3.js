const clock=document.getElementById('clock');//taking clock as reference
//const clock=document.querySelector('#clock')

//for every second the time is displayed
setInterval(function(){
    //display time 
    let date =new Date();
    console.log(clock)
//console.log(date.toLocaleDateString());
clock.innerHTML=date.toLocaleTimeString();
},1000);
