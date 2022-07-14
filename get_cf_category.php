<?php
ini_set('display_errors', 1);
$ip = "localhost";
$userName = "root";
$dbName = "fragrancia";
$pass = "root";

$dbconn = mysqli_connect($ip, $userName, $pass, $dbName) or die("Unable to connect to DB");


if(!isset($_POST['searchTerm'])){ 
    $fetchData = mysqli_query($dbconn,"SELECT * FROM cf_category_db");
  } else{ 
    $search = $_POST['searchTerm'];   
    $fetchData = mysqli_query($dbconn,"SELECT * FROM cf_category_db WHERE expens_category LIKE '%".$search."%'");
  } 
  
$data = array();
while ($row = mysqli_fetch_array($fetchData)) {    
    $data[] = array("id"=>$row['id'], "text"=>$row['expens_category']);
}
echo json_encode($data);

?>