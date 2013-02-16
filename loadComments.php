<?php

include 'functions.php';

$con = mysql_connect("localhost","root","");

if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
  

  $page_uid = $_GET["page_uid"];
  
  $query = "SELECT comment_id,comment_text, user_uid,user_name,social_portal from comments where page_uid = '".$page_uid."'";
  
  mysql_select_db("indiccomments", $con);
  $result = mysql_query("SET NAMES utf8"); 
  $result = mysql_query($query);
  
	
	$response = "";
  while($row=mysql_fetch_array($result)){
	$response = $response.generateOldComments($row['comment_id'],$row['user_uid'],$row['user_name'],$row['comment_text']);
  }
// some code

mysql_close($con);
echo $response.generateNewComment("user_id","username");
?>