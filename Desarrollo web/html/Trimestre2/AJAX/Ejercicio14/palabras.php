<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>EJ3</title>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
    <script type="text/javascript">

    function borrar(id){
      id = parseInt(id)
      $.ajax({
            url:   'borrar.php?id='+id,
            type:  'GET',
            beforeSend: function () {
            },
            success: function (respuesta) {
              alert(respuesta)
            }
          });
    }
    function agregarAjax()
    {
          var euskera = $("#Euskera").val();
          var castellano = $("#Castellano").val();
          var ingles = $("#Ingles").val();
          var parole = $("#Parole").val();
          $.ajax({
            url:   'agregar.php?hitza='+euskera+'&palabra='+castellano+'&word='+ingles+'&parole='+parole,
            type:  'GET',
            beforeSend: function () {
            },
            success: function (respuesta) {
              if(respuesta != "error"){//Compruebo que no me ha llegado un error antes de añadir la fila
                jResp=JSON.parse(respuesta);
                console.log(respuesta);
                insertarFila(jResp);
              }
            }
          });
    }
    var res;
    function insertarFila(jResp){//Funcion para insertar una nueva fila a un tabla
      res = jResp;
      var tds=$("#palabras tr:first td").length;
      var trs=$("#tabla tr").length;
      var nuevaFila="<tr>";
      for(var i=0;i<jResp.length;i++){
          nuevaFila+="<td>"+jResp[i]+"</td>";
      }
      nuevaFila+="</tr>";
      $("#palabras").append(nuevaFila);
    }
    </script>
  </head>
  <body>
    <?php
      $link = @new mysqli("localhost","aritz", "aritz", "aritz");
      if ($link->connect_errno) {
        die('Connect Error: ' . $link->connect_error);
      }

      $sql_select = "SELECT * from diccionario";
      $res = $link->query($sql_select);
    ?>
      <table id="palabras" border="1">
        <tr>
          <td>P</td><td>Hitza</td><td>Palabra</td><td>Word</td><td>Parole</td>
        </tr>
    <?php
      while($fila = mysqli_fetch_array($res, MYSQLI_ASSOC)){
    ?>
      <tr>
        <td><?php echo utf8_encode($fila["Id"]) ?></td>
        <td><?php echo utf8_encode($fila["Hitza"]) ?></td>
        <td><?php echo utf8_encode($fila["Palabra"]) ?></td>
        <td><?php echo utf8_encode($fila["Word"]) ?></td>
        <td><?php echo utf8_encode($fila["Parole"]) ?></td>
        <td><button onclick="borrar(this.id)" id="<?php echo utf8_encode($fila["Id"]) ?>">Delete</button></td>
      </tr>

    <?php
      }
    ?>
  </table>
    <div class="" id="formulario">
      <p>Euskera <input type="text" id="Euskera" value=""></p>
      <p>Catellano <input type="text" id="Castellano" value=""></p>
      <p>Ingles <input type="text" id="Ingles" value=""></p>
      <p>Parole <input type="text" id="Parole" value=""></p>
      <p><button type="button" name="agregar" onclick="agregarAjax()">Agregar</button></p>
    </div>
  </body>
</html>
