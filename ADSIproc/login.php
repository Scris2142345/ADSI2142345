<!DOCTYPE html>
<html>
<head>
	<title>Iniciar Sesión</title>
	<link rel="stylesheet" type="text/css" href="estilos2.css">
	<meta charset="utf-8">
</head>
<body>
	<form method="POST" action="validar.php">
		<h1>Inicia Sesión</h1>
		<label>Nombre de usuario:</label>
		<input type="text" required placeholder="Ingresa tu nombre de usuario" name="username">
		<label>Contraseña</label>
		<input type="password" placeholder="Ingrese su contraseña" name="clave">
		<input type="Submit" value="Inicar Sesión" name="entrar">

	</form>

</body>
</html>