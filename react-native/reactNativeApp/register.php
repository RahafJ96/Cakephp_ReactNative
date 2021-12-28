<?php include 'config.php';

    $CN=mysqli_connect ("localhost","root","");
    $DB=mysqli_select_db ($CN,"assessment");

    $EncodedData = file_get_contents('php://input');
    $DecodedData = json_decode($EncodedData,true);
	 
	$name = $DecodedData['name'];
	$email = $DecodedData['email'];
	$password = $DecodedData['password'];
	$mobile = $DecodedData['mobile'];
	
	if($DecodedData['email']!="")
	{
	
	$result= $mysqli->query("SELECT * FROM users where email='$email'");
		if($result->num_rows>0) {
			echo json_encode('email already exist');  // alert msg in react native 		
		} 
		else 
		{		 
		   $add = $mysqli->query("insert into users (name,email,password,mobile) values('$name','$email','$password','$mobile')"); 
			 
			if($add){ 
				echo  json_encode('User Registered Successfully'); // alert msg in react native 
			}else{ 
			   echo json_encode('check internet connection'); // our query fail 
			}	
		}
	}else{  
	 echo json_encode('try again'); 
	} 
?>


