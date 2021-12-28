<?php
    $CN=mysqli_connect ("localhost","root","");
    $DB=mysqli_select_db ($CN,"assessment");

    $EncodedData = file_get_contents('php://input');
    $DecodedData = json_decode($EncodedData,true);

    $name=$DecodedData['name'];
    $email=$DecodedData['email'];
    $password=$DecodedData['password'];
    $mobile=$DecodedData['mobile'];

    $IQ="insert into customer_users (name,email,password,mobile) values ('$name','$email','$password','$mobile')";

    $R=mysqli_query($CN,$IQ);

    if($R)
    {
        $Message = "User has registered successfully";
    }else{
        $Message = "ERROR, ... Please try again!";
    }

    $Response []= array("Message"=> $Message);
    echo json_encode($Response);

?>