<?php
ini_set('display_errors', 1);
$ip = "localhost";
$userName = "root";
$dbName = "fragrancia";
$pass = "root";

$dbconn = mysqli_connect($ip, $userName, $pass, $dbName) or die("Unable to connect to DB");



$sql = "SELECT MAX(id) FROM inserts_data";
$result = mysqli_query($dbconn, $sql);
$q = mysqli_fetch_all($result);

echo json_encode($q);


?>