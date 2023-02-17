<?php
$q = strip_tags(trim(addslashes($_GET['q'])));
$r = shell_exec("/usr/bin/python3 /var/www/uday.engineer/public_html/famify/api/gpt.py ".$q);
//CORS Origin Policy
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

header("Content-type: application/json; charset=utf-8");
//Clear excess newlines
$r = preg_replace('/^\h*\v+/m', '', $r);
$js = array("response" => $r);
echo json_encode($js);
?>
