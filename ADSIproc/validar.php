<?php
include('conexion.php');
session_start();

//Capturar datos del formulario
$username= $_POST['username'];
$clave= md5($_POST['clave']);

$sql="SELECT COUNT(*) as contar from usuarios where username='$username' and clave='$clave' ";
$consulta= mysqli_query($conn,$sql);
$lista= mysqli_fetch_array($consulta);
if($lista['contar']>0){
	//echo "Users exists";
	$_SESSION['user'] = $username;
	header("location:loged.php");
}
else{
	die("Usuario y/o Contraseña Erronea..Revisar");
}




?>