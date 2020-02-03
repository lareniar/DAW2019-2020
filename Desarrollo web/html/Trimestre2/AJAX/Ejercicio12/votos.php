<?php

 

$servername = "10.10.17.1";

$username = "aritz";

$password = "aritz";

// Conexión a la base de datos:

$Votos=$_REQUEST["votos"];
$Partido = $_REQUEST["partido"];

$link = @new mysqli($servername, "aritz", "aritz", "aritz");

if ($link->connect_error) {

    die('Connect Error: ' . $link->connect_error);

}

// Consulta



$sql = "UPDATE elecciones SET Votos = '$Votos' WHERE Partidos = '$Partido'";



if ($link->query($sql) === TRUE) {
    echo $sql;
} else {
    echo "Error updating record: " . $link->error;
}



 

mysqli_close($link);

 

?>