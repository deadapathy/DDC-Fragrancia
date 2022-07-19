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

foreach($sendData2 as $element){
    $sql = "INSERT INTO `inserts_data` (`id`, `total`, `date`, `payment_account`, `exchange_rate`, `category`, `comment`)
    values ('$element[0]', '$element[1]', '$element[2]', '$element[3]', '$element[4]', '$element[5]', '$element[6]')";

    $query = mysqli_query($dbconn, $sql);
    echo mysqli_error($dbconn);
}

// $sql = "UPDATE inserts_data SET total = '{$sendData2[0][0]}', 
//                         date = '{$sendData2[0][1]}', 
//                         payment_account = '{$sendData2[0][2]}',
//                         exchange_rate = '{$sendData2[0][3]}', 
//                         category = '{$sendData2[0][4]}', 
//                         comment = '{$sendData2[0][5]}' WHERE id = '{$sendData2[0][6]}'";

// ?>