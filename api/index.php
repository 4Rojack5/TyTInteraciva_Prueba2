<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

require 'flight/Flight.php';

Flight::register('db', 'PDO', array('mysql:host=localhost; dbname=api_crud','root',''));

/* Lee los datos y los muestra en la interfaz de Angular */
Flight::route('GET /empleados', function () {

    $sentencia = Flight::db()->prepare("SELECT * FROM `empleados`");
    $sentencia->execute();
    $datos=$sentencia->fetchAll();
    Flight::json($datos);
    
});
/* Recepciona los datos de los input de Angular por el metodo POST y hace un insert */
Flight::route('POST /empleados', function () {

    $cedula=(Flight::request()->data->cedula);
    $nombres_Emp=(Flight::request()->data->nombres_Emp);
    $apellidos_Emp=(Flight::request()->data->apellidos_Emp);

    $sql="INSERT INTO empleados (cedula,nombres_Emp,apellidos_Emp) values (?,?,?)";
    $sentencia = Flight::db()->prepare($sql);
    $sentencia->bindParam(1,$cedula);
    $sentencia->bindParam(2,$nombres_Emp);
    $sentencia->bindParam(3,$apellidos_Emp);
    $sentencia->execute();

    Flight::json(["Empleado Agregado"]);
    
});

//Borrar Registro

Flight::route('DELETE /empleados', function () {

    $id=(Flight::request()->data->id);

    $sql="DELETE FROM empleados WHERE id=?";
    $sentencia = Flight::db()->prepare($sql);
    $sentencia->bindParam(1,$id);
    $sentencia->execute();

    Flight::json(["Empleado Borrado"]);
    
});

//Actualizar Registros

Flight::route('PUT /empleados', function () {

    $id=(Flight::request()->data->id);
    $cedula=(Flight::request()->data->cedula);
    $nombres_Emp=(Flight::request()->data->nombres_Emp);
    $apellidos_Emp=(Flight::request()->data->apellidos_Emp);

    $sql="UPDATE empleados SET cedula = ?, nombres_Emp = ?, apellidos_Emp = ? WHERE id = ?";

    $sentencia = Flight::db()->prepare($sql);

    $sentencia->bindParam(1,$cedula);
    $sentencia->bindParam(2,$nombres_Emp);
    $sentencia->bindParam(3,$apellidos_Emp);
    $sentencia->bindParam(4,$id);

    $sentencia->execute();

    Flight::json(["Empleado Actualizado!"]);
    
});

//Lectura de un registro

Flight::route('GET /empleados/@id', function ($id) {

    $sentencia = Flight::db()->prepare("SELECT * FROM `empleados` where id = ?");

    $sentencia->bindParam(1,$id);

    $sentencia->execute();
    $datos=$sentencia->fetchAll();
    Flight::json($datos);
    
});

Flight::start();
