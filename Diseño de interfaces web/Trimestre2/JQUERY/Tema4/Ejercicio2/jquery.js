//JQUERY DOCUMENT
var color = "blue"
$(document).ready(function(){


    $( "#localizacion" ).on("mouseenter", function() {
        $( ".listalocalizacion" ).show(function(){});
    });
    $( "#recetas" ).on("mouseenter", function() {
        $( ".listarecetas" ).show(function(){});
    });

    $( ".listalocalizacion" ).on("mouseleave", function() {
        $( ".listalocalizacion" ).fadeOut();
    });
    $( ".listarecetas" ).on("mouseleave", function() {
        $( ".listarecetas" ).fadeOut();
    });

    $( "li" ).on("mouseenter mouseleave", function() {
        color = (color=="red") ? "blue":"red";
        if($(this).css("color", color)  );
    });
});