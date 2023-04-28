let input=document.getElementById("input");
let mic=document.getElementById("mic");
let send=document.getElementById("send");
let camera=document.getElementById("camera");
let clip=document.getElementById("clip");
let message=document.querySelector(".message");
let inputSection=document.querySelector(".input-left");
input.addEventListener("click" ,()=>{
    camera.style.display="none"
    clip.style.display="none"
    mic.style.display="none"
    send.style.display="block"
    inputSection.style.width="260px"
})

send.addEventListener("click" , ()=>{
    camera.style.display="block"
    clip.style.display="block"
    mic.style.display="block"
    send.style.display="none"
    inputSection.style.width=""
    if(input.value==""){
        alert("error");
    }
    else{
        message.innerHTML+=`<div class="l">${input.value}</div>`
    }
    input.value="";
})