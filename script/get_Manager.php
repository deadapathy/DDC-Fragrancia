<?php
ini_set('display_errors', 1);

$ip = "localhost";
$userName = "root";
$dbName = "fragrancia";
$pass = "root";

$dbconn = mysqli_connect($ip, $userName, $pass, $dbName) or die("Unable to connect to DB");
mysqli_set_charset($dbconn,'utf8');

if(!isset($_POST['searchTerm'])){ 
    $fetchData = mysqli_query($dbconn,"SELECT * FROM managers_category");
  } else{ 
    $search = $_POST['searchTerm'];   
    $fetchData = mysqli_query($dbconn,"SELECT * FROM managers_category WHERE manager like '%".$search."%'");
  } 
  
$data = array();
while ($row = mysqli_fetch_array($fetchData, MYSQLI_ASSOC)) {    
    $data[] = array("id"=>$row['id'], "text"=>$row['manager']);
}
echo json_encode($data);


?>