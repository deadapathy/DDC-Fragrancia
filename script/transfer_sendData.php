<?php
ini_set('display_errors', 1);

$sendData = $_POST['transfer_array'];
$sendData1 = $_POST['transfer_array_update'];
$sendData2 = $_POST['transfer_array_commission'];

$ip = "localhost";
$userName = "root";
$dbName = "fragrancia";
$pass = "root";

$dbconn = mysqli_connect($ip, $userName, $pass, $dbName) or die("Unable to connect to DB");
mysqli_set_charset($dbconn,'utf8');

foreach($sendData as $element){
    


    $sql = "INSERT INTO `dds_db` (`id`, `total`, `date`, `payment_account`, `exchange_rate`, `category`, `comment`) 
    values ('$element[0]', '$element[1]', '$element[2]', '$element[3]', '$element[4]', '$element[5]', '$element[6]')";

    $query = mysqli_query($dbconn, $sql);
    echo mysqli_error($dbconn);
}

// foreach($sendData1 as $element){
    
//     $sql = "INSERT INTO `inserts_data` (`id`, `total`, `date`, `payment_account`, `exchange_rate`, `category`, `comment`) 
//     values ('$element[0]', '$element[1]', '$element[2]', '$element[3]', '$element[4]', '$element[5]', '$element[6]')";

//     $query = mysqli_query($dbconn, $sql);
//     echo mysqli_error($dbconn);
// }

// foreach($sendData2 as $element){
//     $sql = "INSERT INTO `inserts_data` (`id`, `total`, `payment_account`, `exchange_rate`, `category`, `comment`)
//     values ('$element[0]', '-$element[1]', '$element[2]', '$element[3]', '$element[4]', '$element[5]', '$element[6]')";

//     $query = mysqli_query($dbconn, $sql);
//     echo mysqli_error($dbconn);
// }

?>