<?php
if(isset($_POST)){
    error_reporting(0);

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];

    $domain = $_SERVER["HTTP_HOST"];
    $to = "fernandogarciafornes@gmail.com";
    $subject = "Contacto desde el formulario del sitio $domain";
    $message = "
    <p>Datos enviados desde el formulario del sitio <b>$domain</b></p>
    <ul>
    <li>Nombre: $name</li>
    <li>Email: $email</li>
    <li>Asunto: $subject</li>
    <li>Mensaje: $comments</li>
    ";
    $headers = "MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=utf-8\r\n"."From: Envio automático, no responder <no-reply@$domain>";

    $send_mail = mail($to, $subject, $message, $headers);

    if($send_mail) {
        $res = [
            "err" => false,
            "message" => "Tus datos han sido enviados"
        ];
    } else {
        $res = [
            "err" => true,
            "message" => "Error al enviar tus datos, inténtalo nuevamente"
        ];
    }

    //El siguiente header es para que acepte las peticiones de cualquier sitio, es mejor la siguiente esta se utiliza por ser localhost
    header("Access-Control-Allow-Origin:*");
    //header("Access-Control-Allow-Origin:https://fernandogarcia.es");
    header("Content-type:application/json");
    echo json_encode($res);
    exit;
}