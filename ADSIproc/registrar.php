<?php

include ('conexion.php');

if(isset($_POST['registrar'])){
	//variables 
	$username = $_POST['username'];
	$mail = $_POST['mail'] ;
	$clave = md5($_POST['clave']);
	$genero = $_POST['genero'];
	//insertar datos en BD
	$consulta = "INSERT INTO usuarios (username, mail, genero, clave) VALUES ('$username', '$mail', '$genero', '$clave') ";
	$resultado= mysqli_query($conn,$consulta);
	if ($resultado == 1){
		echo("Funcionó!!!!");
	}// cierre $resultado==1
	else{
          if($resultado<1){
           die("Error no se puedo registar en la BD!... Error");
		}}//cierre else
	}//cierre if isset



mysqli_close($conn);

?>