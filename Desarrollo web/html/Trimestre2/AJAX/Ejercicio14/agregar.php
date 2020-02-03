<?php
  $link = @new mysqli("localhost","aritz", "aritz", "aritz");
  if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
  }

  $hitza = $_GET["hitza"];
  $palabra = $_GET["palabra"];
  $word = $_GET["word"];
  $parole = $_GET["parole"];

  $sql_insert = "INSERT INTO diccionario VALUES (null, '$hitza','$palabra','$word','$parole')";
  if($link->query($sql_insert)){//compruebo si la inserccion a sido correcta antes de devolver nada
    $sql_select = "SELECT * FROM diccionario ORDER BY id DESC LIMIT 1";//Solo pido informacion sobre la ultima fila introducida
    $res = $link->query($sql_select);
    $fila = mysqli_fetch_array($res, MYSQLI_NUM);
    echo  json_encode($fila);
  }else{
    echo "error";
  }
  mysqli_close($link);

 ?>
