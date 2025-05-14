<?php
header("Content-Type: application/json; charset=UTF-8");
require_once('includes/connect.php');

$fname = $_POST['first-name'];
$lname = $_POST['last-name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$msg = $_POST['message'];

$errors = [];

if (empty(trim($fname))) $errors[] = 'First Name is required.';
if (empty(trim($lname))) $errors[] = 'Last Name is required.';
if (empty(trim($email))) $errors[] = 'Email is required.';
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Invalid email format.';
if (empty(trim($mobile))) $errors[] = 'Mobile Number is required.';
if (empty(trim($msg))) $errors[] = 'Message is required.';

if (!empty($errors)) {
    echo json_encode(["errors" => $errors]);
    exit;
}

$query = "INSERT INTO contact (firstname, lastname, email, mobile, message) VALUES (?, ?, ?, ?, ?)";
$stmt = $connection->prepare($query);
$stmt->bindParam(1, $fname, PDO::PARAM_STR);
$stmt->bindParam(2, $lname, PDO::PARAM_STR);
$stmt->bindParam(3, $email, PDO::PARAM_STR);
$stmt->bindParam(4, $mobile, PDO::PARAM_STR);
$stmt->bindParam(5, $msg, PDO::PARAM_STR);

if ($stmt->execute()) {
    $to = 'bernardomacfanshawe@gmail.com';
    $email_subject = "BAA Website - Email Received";
    $email_message = "You've received a new message:\n\n";
    $email_message .= "Name: $fname $lname\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Mobile: $mobile\n";
    $email_message .= "Message: $msg\n";

    mail($to, $email_subject, $email_message);
    echo json_encode(["message" => "Form submitted. Thank you!"]);
} else {
    echo json_encode(["errors" => ["Database error. Please try again later."]]);
}

$stmt = $connection = null;
?>