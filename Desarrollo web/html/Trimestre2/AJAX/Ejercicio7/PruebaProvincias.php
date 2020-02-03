<?php

 

$servername = "localhost";

$username = "aritz";

$password = "aritz";

// Conexión a la base de datos:

$link = @new mysqli($servername, "aritz", "aritz", "aritz");

if ($link->connect_error) {

    die('Connect Error: ' . $link->connect_error);

}

// Consulta


$provincia=$_REQUEST["provincia"]; 
$sql = "SELECT * from Provincias WHERE Comunidad='$provincia'";




$resultado = $link->query($sql); 
 

$filas=$resultado->num_rows;
 

for ($i=0;$i<$filas;$i++){

    $fila = mysqli_fetch_array($resultado);
    $miArray[$i]= array("Provincia"=>utf8_encode($fila["Provincia"]),"Extension"=>$fila["Extension"], "Comunidad"=>$fila["Comunidad"]);

}

 

echo  json_encode($miArray);

 

mysqli_close($link);

 

?>