<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="estilos2.css">
  <title>Formulario Registro</title>
</head>
<body>
  <form method="post" action="">
    <h1>Registro</h1>
    <label>Correo:</label>
    <input type="text" required placeholder="Inserte su dirección de correo " name="mail">
    <label>Nombre de usuario</label>
    <input type="text" required name="username" placeholder="Inserte un nombre de usuario">
    <label>Contraseña</label>
    <input type="password" required placeholder="Inserte una contraseña" name="clave">
    <label>Genero</label>
    <b>Masculino</b><input type="radio" value="M" name="genero" required>
    <b>Femenino</b><input type="radio" value="F" name="genero" required>
    <input type="submit" name="registrar" value="Registrarme">
    
  </form>
  <?php
  include('registrar.php');

  ?>

</body>
</html>