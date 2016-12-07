<?php
//include 'database.php';
//getConnection();
            
function getMaterials(){
    $query="SELECT * FROM materials ORDER BY name";
    try{
        getConnection();
        global $db;    
        $Materials = $db->query($query);
        $Material = $Materials->fetchAll(PDO::FETCH_ASSOC);
        echo '{"Materials": '.  json_encode($Material).'}';             
    } catch (Exception $e) {
        echo '{"error":{"text":'.$e->getMessage() .'}}';
    }
}
function getMaxId(){
    $query="SELECT MAX(ID) FROM materials";
    try{
        getConnection();
        global $db;    
        $Materials = $db->query($query);
        $Material = $Materials->fetch(PDO::FETCH_ASSOC);
        echo '{"Materials": '.  json_encode($Material).'}';             
    } catch (Exception $e) {
        echo '{"error":{"text":'.$e->getMessage() .'}}';
    }
}
function getMaterialById($id){
    $query="SELECT * FROM materials WHERE ID ='$id'";
    try{
        getConnection();
        global $db;   
        $Materials = $db->query($query);
        $Material = $Materials->fetch(PDO::FETCH_ASSOC);
        header("Content-Type: application/json", true);
        echo json_encode($Material);             
    } catch (Exception $e) {
        echo '{"error":{"text":'.$e->getMessage() .'}}';
    }
}
   function getMaterialByName($name){
       $query="SELECT * FROM materials WHERE Name LIKE '%$name%' ORDER BY Name";
     try{
        getConnection();
        global $db;   
        $Materials = $db->query($query);
        $Material = $Materials->fetchAll(PDO::FETCH_ASSOC);
        header("Content-Type: application/json", true);
        echo '{"Materials": '.  json_encode($Material).'}';             
    } catch (Exception $e) {
        echo '{"error":{"text":'.$e->getMessage() .'}}';
    }  
   }
   function addMaterial(){
     //include_once 'index.php';
        global $app;
        $request=$app->request();
        $material=json_decode($request->getBody());
        $name=$material->Name;
        $type=$material->Type;
        $quantity=$material->Quantity;
        $diameter=$material->Diameter;
        $length=$material->Length;
        $thickness=$material->Thickness;
        $outdoor=$material->Outdoor;
        $colour=$material->Colour;
        $price=$material->price;
        //$id=$material->ID;
        $query="INSERT INTO materials"
                . "(Name, Type, Quantity, Diameter, Length, Thickness, Outdoor, Colour, Price, Image)"
                . " VALUES ('$name', '$type', $quantity, $diameter, $length, $thickness, '$outdoor', '$colour', $price, 'nails.jpg')";
        try{
           getConnection();
           global $db;
           
           $materials = $db->exec($query);
           // $statement = $db->prepare($query);
           //$db->$query->execute();
           //$db->exec($query);
           $material->id = $db->lastInsertId();
           //echo json_encode($materials); 
           echo json_encode($materials);
       } catch (Exception $e) {
           echo '{"error":{"text":'.$e->getMessage().'}}';
       }
    } 
    function updateMaterial($id){
     //include_once 'index.php';
        global $app;
        $request=$app->request();
        $material=json_decode($request->getBody());
        $name=$material->Name;
        $type=$material->Type;
        $quantity=$material->Quantity;
        $diameter=$material->Diameter;
        $length=$material->Length;
        $thickness=$material->Thickness;
        $outdoor=$material->Outdoor;
        $colour=$material->Colour;
        $price=$material->price;
        $id=$material->ID;
        $query="UPDATE materials SET Name='$name', Type='$type', Quantity=$quantity, Diameter=$diameter, Length=$length, Thickness=$thickness, Outdoor='$outdoor', Colour='$colour', price=$price WHERE ID=$id;";
        try{
           getConnection();
           global $db;
           
           $materials = $db->exec($query);
           // $statement = $db->prepare($query);
           //$db->$query->execute();
           $db->exec($query);
           //$material->id = $db->lastInsertId();
           echo json_encode($materials); 
           //echo json_encode($material);
       } catch (Exception $e) {
           echo '{"error":{"text":'.$e->getMessage().'}}';
       }
       
    }
       function deleteMaterial($id){
           echo $id;
           $query = "DELETE FROM materials WHERE ID = $id";
           echo $query;
           try{
               getConnection();
               global $db;
               $db->exec($query);
           } catch (Exception $e) {
                echo '{"error":{"text":'.$e->getMessage().'}}';
           }
       }
     

?>


