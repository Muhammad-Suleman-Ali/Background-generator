var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var bodycolor =document.querySelector("#gradient");



function backgroundcolor(){
    bodycolor.style.background = "linear-gradient(to right,"
    + color1.value +","
    +color2.value
     +")"; 
}
color1.addEventListener("input", backgroundcolor);


color2.addEventListener("input", backgroundcolor);
   