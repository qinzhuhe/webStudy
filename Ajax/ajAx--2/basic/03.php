<?php

	// $username = $_GET{'username'};
	// $pw = $_GET{'password'};

	$username = $_POST{'username'};
	$pw = $_POST{'password'};

	// echo $uname.'-------'.$pw;

	echo '{"username":"'.$username.'","pw":"'.$pw.'"}';

 ?>