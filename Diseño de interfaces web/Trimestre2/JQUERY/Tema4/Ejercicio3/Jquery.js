//JQUERY DOCUMENT
$(document).ready(function(){
    var clickHeader= true;
    var clickMenu= true;
    var clickCuerpo= true;

    //header main footer div#sidebar
    $('#cabecera').click(function(){
        if(clickHeader){
            $('#header').fadeIn(2000);
            clickHeader = !clickHeader
        }else{
            $('#header').fadeOut(0);
            clickHeader = !clickHeader
        };
           
    });

    $('#cuerpo').click(function(){
        if(clickMenu){
            $('#main').fadeIn(2000);
            clickMenu = !clickMenu
        }else{
            $('#main').fadeOut(0);
            clickMenu = !clickMenu
        };
           
    });

    $('#menu').click(function(){
        if(clickCuerpo){
            $('#sidebar').fadeIn(2000);
            clickCuerpo = !clickCuerpo
        }else{
            $('#sidebar').fadeOut(0);
            clickCuerpo = !clickCuerpo
        };
           
    });

    $('#finaliza').click(function(){

            $('#cabecera').delay(0).fadeOut(500);
            $('#menu').delay(500).fadeOut(500);
            $('#cuerpo').delay(1000).fadeOut(500);
            $('#finaliza').delay(1500).fadeOut(500);
            setTimeout(function(){ 
                $( "#footer" ).append( "Este es el nuevo pie de pagina" );
             }, 2000);
            
           
    });

});