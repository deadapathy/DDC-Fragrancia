<?php
ini_set('display_errors', 1);

$sendData = $_POST['consumption_array'];

$ip = "localhost";
$userName = "root";
$dbName = "fragrancia";
$pass = "root";

$dbconn = mysqli_connect($ip, $userName, $pass, $dbName) or die("Unable to connect to DB");
mysqli_set_charset($dbconn,'utf8');


//"SELECT MAX(id) FROM inserts_data";



foreach($sendData as $element){
    $sql = "INSERT INTO `dds_db` (`id`, `total`, `date`, `payment_account`, `exchange_rate`, `category`, `comment`) 
    values ('$element[0]', '$element[1]', '$element[2]', '$element[3]', '$element[4]', '$element[5]', '$element[6]')";

    $query = mysqli_query($dbconn, $sql);
    echo mysqli_error($dbconn);
}


?>