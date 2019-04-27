

<?php
try {
     $db = new PDO("mysql:host=localhost;dbname=anket", "root", "");
} catch ( PDOException $e ){
     print $e->getMessage();
}
?>