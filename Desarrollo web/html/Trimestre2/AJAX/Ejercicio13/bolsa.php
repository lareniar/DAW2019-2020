<?php

 

$servername = "10.10.17.1";

$username = "aritz";

$password = "aritz";

// Conexión a la base de datos:

$link = @new mysqli($servername, "aritz", "aritz", "aritz");

if ($link->connect_error) {

    die('Connect Error: ' . $link->connect_error);

}

// Consulta



$sql = "SELECT * from Ibex";




$resultado = $link->query($sql); 

 

$filas=$resultado->num_rows;

for ($i=0;$i<$filas;$i++){

    $fila = mysqli_fetch_array($resultado);
    
    $miArray[$i]= array("Empresa"=>utf8_encode($fila["Empresa"]),"Cotizacion"=>$fila["Cotizacion"]);


};

echo  json_encode($miArray);

 

mysqli_close($link);