const myimg = document.querySelector("#myimg");
 
let index = 1;
let max = 5;
 
setInterval(() =>{
    myimg.style.marginLeft = `-${index * 100}%`;
    index++;
    if(index == max){
        setTimeout(() =>{
            myimg.style.transition = "none";
            myimg.style.transitionDuration = "1s";
            myimg.style.marginLeft = "";
           
            index = 1;
 
            setTimeout(() =>{
            myimg.style.transition = "1s";
 
            },50);
 
        },1000);
 
 
       
    }
},1000);