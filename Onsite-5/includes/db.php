<?php
$host = 'localhost';
$dbname = 'school_competetion';
$username = 'root';
$password = '';
$dsn = "mysql:host=$host; dbname=$dbname";

try {
    $pdo = new PDO($dsn , $username,$password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: ". $e->getMessage());
}

?>