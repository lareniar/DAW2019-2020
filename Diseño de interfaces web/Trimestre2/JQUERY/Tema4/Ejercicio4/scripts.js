$(document).ready(function(){

    contador = 1;
    timer = 0;

    $("#arrowback").on("click", function(){
        if((contador == 1) ? contador=5: contador--)
        timer=0;
        $("#imagencarrusel").toggle();
        $("#imagencarrusel").attr("src", `resources/${contador}.jpg`);
        
        $("#imagencarrusel").fadeTo("slow", 2 );
    });
    $("#arrowforward").on("click", function(){
        if((contador == 5) ? contador=1: contador++)
        timer = 0;
        $("#imagencarrusel").attr("src", `resources/${contador}.jpg`);
    });

    function automatico(){
        timer++
        if (timer>=5){
            timer=0;
            if((contador == 5) ? contador=1: contador++)
            $("#imagencarrusel").attr("src", `resources/${contador}.jpg`);
        }
       
    }
setInterval(automatico, "1000")
});