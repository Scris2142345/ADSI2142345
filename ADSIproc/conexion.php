<?php
$servername ="localhost";
$username ="root";
$password ="";
$dbname="entrenainteligente";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: Error " . mysqli_connect_error());
}
echo "Conexión exitosa!! :D<br>";
?>