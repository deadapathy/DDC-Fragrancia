<?php
ini_set('display_errors', 1);

$ip = "localhost";
$userName = "root";
$dbName = "fragrancia";
$pass = "root";

$dbconn = mysqli_connect($ip, $userName, $pass, $dbName) or die("Unable to connect to DB");
mysqli_set_charset($dbconn,'utf8');


// $sql = "SELECT * FROM payments_category_db";
// $result = mysqli_query($dbconn, $sql);

// $q = mysqli_fetch_all($result);

// echo json_encode($q);

if(!isset($_POST['searchTerm'])){ 
    $fetchData = mysqli_query($dbconn,"SELECT * FROM payments_category_db");
  } else{ 
    $search = $_POST['searchTerm'];   
    $fetchData = mysqli_query($dbconn,"SELECT * FROM payments_category_db WHERE pay_category like '%".$search."%'");
  } 
  
$data = array();
while ($row = mysqli_fetch_array($fetchData)) {    
    $data[] = array("id"=>$row['id'], "text"=>$row['pay_category']);
}
echo json_encode($data);



?>