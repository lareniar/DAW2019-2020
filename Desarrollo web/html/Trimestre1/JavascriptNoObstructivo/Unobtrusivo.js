
// Javascript Document



var Parrafos=document.getElementsByTagName("p");



for (var i=0;i<Parrafos.length;i++){


 Parrafos[i].addEventListener("mouseover",CambiarColor);
 Parrafos[i].addEventListener("mouseout",CambiarColorOut);

}



function CambiarColor(){


 this.style.backgroundColor="yellow";

}
function CambiarColorOut(){


    this.style.backgroundColor="red";
   
   }