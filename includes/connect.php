<?php
$dsn = "mysql:host=localhost;dbname=bayfield;charset=utf8mb4";
try {
$connection = new PDO($dsn, 'root', '');
} catch (Exception $e) {
  error_log($e->getMessage());
  exit('unable to connect');
}
?>