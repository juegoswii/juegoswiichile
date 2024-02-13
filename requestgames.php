<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $nombrejuego = $_POST["nombrejuego"];
    $opciones = $_POST["opciones"];
    $email = $_POST["email"];

    $destinatario = "juegoswiichile@chilehero.cl";
    
    $asunto = "Pedido de $nombre";

    $cuerpo .= "Juego: $nombrejuego\n";
    $cuerpo .= "Consola: $opciones\n";
    $cuerpo .= "Correo: $email\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $alerta = "Gracias por pedir tu juego";
    
    mail($destinatario, $asunto, $cuerpo, $headers);

    echo "<script type='text/javascript'>alert('$alerta');</script>";
    exit();
}
?>