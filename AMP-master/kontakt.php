<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $email_from = 'Reichle Hypnoterapi';
    $email_subject = 'Ny Besked via Reichle Hypnoterapi Kontakt';
    $email_body = "Navn: $name.\n".
                  "Email: $email.\n".
                  "TLF: $phone.\n".
                  "Besked: $message.\n";

    $to = "patrickkoomadsen@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);
    header("location: kontakt-sendt.html");
?>