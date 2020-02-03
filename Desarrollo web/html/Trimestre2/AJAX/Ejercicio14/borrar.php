<?php
  $link = @new mysqli("localhost","aritz", "aritz", "aritz");
  if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
  }

  $id = $_GET["id"];


   $sql_del = "DELETE FROM diccionario WHERE id =" .$id;
   echo $sql_del;
   if(!$link->query($sql_del))//compruebo si la inserccion a sido correcta antes de devolver nada
         echo "error";

//   mysqli_close($link);

 ?>
