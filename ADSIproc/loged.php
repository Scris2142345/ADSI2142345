<?php
session_start();
$sua1=$_SESSION['user'];
echo "Bienvenido Señor/a.. $sua1";

?>

<!DOCTYPE html>
<html>
<head>
	<title>CORRECT</title>
</head>
<body>
	<h1>Muy bien!! Legaste hasta aquí.....</h1>
	
	<?php/*
	if(isset($_POST['button'])){
		session_destroy();
		header("location:../index.php");
	}*/
	?>

</body>
</html>