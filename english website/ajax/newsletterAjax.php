<?php


if ((!empty($_POST['newsLetterEmail'])) ) {

	$newsLetterEmail = $_POST['newsLetterEmail'];

	$to = "apogeepre@gmail.com";
	$subject = "Newsletter Email get from Apogee Leveller Website (www.apogeeleveller.com)";

	$message = "
	<html>
	<head>
	<title>Apogee Precision Lasers</title>
	</head>
	<body>
	<p>Contact Information</p>
	<table>
	<tr>
	<th>Email: </th>
	<td>".$newsLetterEmail."</td>
	</tr>
	</table>
	</body>
	</html>
	";

	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= 'From: <apogeepre@gmail.com>' . "\r\n";
	// $headers .= 'Cc: myboss@example.com' . "\r\n";
	if(mail($to,$subject,$message,$headers)){
		echo '<p class="text-success font-weight-bold mb-0">You have been subscribed.</p>';
	}else{
		echo '<p class="text-danger font-weight-bold mb-0">Something went wrong.</p>';
	}
}else{
		echo '<p class="text-danger font-weight-bold mb-0">Plese enter your email.</p>';
}
?>