<?php


 function getConnection() {
    global $db;
    $dsn="mysql:host=localhost:3307;dbname=tandmsql";
    $dbuser="root";
    $dbpass="admin";
    //$dbname="celler";
    $db = new PDO($dsn, $dbuser, $dbpass);
    //$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
}
//getConnection();

?>

