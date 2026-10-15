<?php
    /* Incluye la informacion del archivo conecxion.php */
    include("conexion.php");

    /* Mandamos a llamar para ejecutar la funcion */
    $con = conectar();



    \ 
    /* Dame todo lo que tengas en la tabla de alumnos */
    $sql = "SELECT * FROM alumnos";

    /* */
    $query = mysqli_query($con, $sql);

?>

<!DOCTYPE html>cc\
<div>
	<h1>TABLA DE ALUMNOS</h1>
	<table border="2">
		<thead>
			<tr>
                
				<th>Matrícula</th>
				<th>Nombre</th>
				<th>Apellido Paterno</th>
				<th>Apellido Materno</th>
				<th>Acciones</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>A</td>
				<td>A</td>
				<td>A</td>
				<td>A</td>
			</tr>
		</tbody>
	</table>
</div>