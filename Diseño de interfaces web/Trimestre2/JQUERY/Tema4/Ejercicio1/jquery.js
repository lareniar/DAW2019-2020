//JQUERY DOCUMENT
var color = "blue"
$(document).ready(function(){
    $( "#p1" ).bind( "click mouseenter mouseleave", function() {
        color = (color=="red") ? "blue":"red";
        if($(this).css("color", color)  );
      });
    $( "#unbind" ).on( "click mouseenter mouseleave", function() {
        $( "#p1" ).unbind( "click");
    });

    $( "#p2" ).on( "click", function() {
        (this).toggle("color", color) ;
      });
      $( "#contenedorTexto" ).bind( "click mouseenter mouseleave", function() {
        this.append("Append de texto ");
      });
});