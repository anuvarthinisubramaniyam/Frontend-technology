<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST["username"];
    $email = $_POST["email"];
    // You might want to hash the password before storing it
    $password = $_POST["password"];

    // Redirect to success page with form data as query parameters
    header("Location: success.php?username=$username&email=$email&password=$password");
    exit;
}
?>
