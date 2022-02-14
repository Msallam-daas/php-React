<?php
require_once 'config.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header("Content-Type: application/json");

$query="select * from products";
$results =$conn->query($query);

$output = [];
while($item = $results->fetch_assoc()){
    $output[]=$item;
}

echo json_encode($output);




?>