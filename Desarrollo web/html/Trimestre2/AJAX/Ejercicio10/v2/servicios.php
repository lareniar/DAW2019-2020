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



$sql = "SELECT * from Tiempo";




$resultado = $link->query($sql); 

 

$filas=$resultado->num_rows;

 
$tabla ="";
$tabla.= '<table>
            <tr>
            <td>Ciudad</td>
            <td>Tiempo</td>
            </tr>';
for ($i=0;$i<$filas;$i++){

    $fila = mysqli_fetch_array($resultado);

        $tabla .= '<tr><td>' 
                    .$fila["Ciudad"].
                    '</td>
                    <td><img src="../resources/'
                    .$fila["Estado"].
                    '.png" alt="aa"></td>
                    </tr>';
        


}
$tabla .= '</table>';
echo  json_encode($tabla);

 

mysqli_close($link);

 

?>