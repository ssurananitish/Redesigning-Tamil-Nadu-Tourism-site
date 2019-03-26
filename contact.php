<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname="project";
// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$name = mysqli_real_escape_string($conn, $_REQUEST['name']);
$subject = mysqli_real_escape_string($conn, $_REQUEST['subject']);
$email = mysqli_real_escape_string($conn, $_REQUEST['email']);
$comment = mysqli_real_escape_string($conn, $_REQUEST['comment']);

echo "$name,$subject,$email,$comment";
$sql = "INSERT INTO persons (name, email, subject,comment) VALUES ('$name', '$email','$subject','$comment')";
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
 
// Close connection
mysqli_close($conn);
?>

?>