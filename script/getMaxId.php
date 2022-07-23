<?php
ini_set('display_errors', 1);

$ip = "localhost";
$userName = "root";
$dbName = "fragrancia";
$pass = "root";

$dbconn = mysqli_connect($ip, $userName, $pass, $dbName) or die("Unable to connect to DB");
mysqli_set_charset($dbconn,'utf8');

$sql = "SELECT MAX(id) FROM dds_db";
$result = mysqli_query($dbconn, $sql);
$q = mysqli_fetch_all($result);

echo json_encode($q);


?>