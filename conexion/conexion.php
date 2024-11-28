<?php
$connectionInfo = array("Database" => "CHECKLIST_EDIFICIOS", "UID" => "sa", "PWD" => "Atn54");
$conn = sqlsrv_connect("172.30.190.47", $connectionInfo);
if (!$conn)
    die(print ("Error conexion a RED "));

$array = array();
$query = "SELECT [id_Insp_Ba] FROM [CHECKLIST_EDIFICIOS].[dbo].[Insp_Ba]";
$stmt = sqlsrv_query($conn, $query);

if ($stmt === false) {

    return null;
} else {

    while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
        array_push($array, $row);

    }
}
sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);

print (json_encode($array, JSON_UNESCAPED_UNICODE));
?>