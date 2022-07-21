<?php
ini_set('display_errors', 1);

$sendData = $_POST['lids_array'];

$ip = "localhost";
$userName = "root";
$dbName = "fragrancia";
$pass = "root";

$dbconn = mysqli_connect($ip, $userName, $pass, $dbName) or die("Unable to connect to DB");

foreach($sendData as $element){

    $sql = "INSERT INTO `lids` (`channel`, `telephone`, `manager`, `date`) 
    values ('$element[0]', '$element[1]', '$element[2]', '$element[3]')";

    $query = mysqli_query($dbconn, $sql);
    echo mysqli_error($dbconn);
}

?>