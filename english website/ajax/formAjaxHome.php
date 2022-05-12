<?php


if ((!empty($_POST['queryName'])) && (!empty($_POST['queryMobile'])) && (!empty($_POST['queryLocation'])) ) {

	$queryName = $_POST['queryName'];
	$queryLocation = $_POST['queryLocation'];
	$queryMobile = $_POST['queryMobile'];
	$queryMessage = $_POST['queryMessage'];

	$to = "sales@apogeeleveller.com, sales@apogeeleveller.com, apogeepre@gmail.com";
	$subject = "Query from Apogee Leveller Website (www.apogeeleveller.com)";

	$message = "
	<html>
	<head>
	<title>Apogee Precision Lasers</title>
	</head>
	<body>
	<p>Contact Information</p>
	<table>
	<tr>
	<th>Name: </th>
	<td>".$queryName."</td>
	</tr>
	<tr>
	<th>Location: </th>
	<td>".$queryLocation."</td>
	</tr>
	<tr>
	<th>Mobile: </th>
	<td>".$queryMobile."</td>
	</tr>
	<tr>
	<th>Message: </th>
	<td>".$queryMessage."</td>
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
		echo '<div class="alert alert-success bgGreen text-white fontFourteen">
				<strong>Success!</strong> Your message has been sent successfully. We contact to you soon..
			</div>';
	}else{
		echo '<div class="alert alert-danger bgRed text-white fontFourteen">
			<strong>Sorry!</strong> Your message has not been sent. Please try again.
		</div>';
	}
}else{
	echo '<div class="alert alert-danger bgRed text-white fontFourteen">
		<strong>Sorry!</strong> Your message has not been sent. Please try again.
	</div>';
}
?>