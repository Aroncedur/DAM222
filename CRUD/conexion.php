<?php

    /* Creacion de una funcion llamada conectar */
    /* Funcion -> Bloque de codigo que podemos mandar a llamar cuando lo necesitemos */
    function conectar(){
        /* Informacion del servidor */
        $host="localhost";
        $user="root";
        $pass="";

        /* Base de datos */
        $db="";

        $con=mysqli_connect($host,$user,$pass);

        mysqli_select_db($con, $db);

        return $con;
    }