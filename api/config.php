<?php


// Create connection
$conn =mysqli_connect("localhost", "root", "", "registerapp");

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully";
?>