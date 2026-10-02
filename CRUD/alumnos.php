<?php
    /* Incluye la informacion del archivo conecxion.php */
    include("conexion.php");

    /* Mandamos a llamar para ejecutar la funcion */
    $con = conectar();

    /* Dame todo lo que tengas en la tabla de alumnos */
    $sql = "SELECT * FROM alumnos";

    /* */
    $query = mysqli_query($con, $sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD DE ALUMNOS</title>
</head>
<body>
    HOLA PIN
</body>
</html>