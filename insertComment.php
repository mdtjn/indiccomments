<?php
$db = "inzaak_indicomm";
$user = "inzaak_indicomm";
$pswd = "inzaak_indicomm";

$con = mysql_connect("localhost",$user,$pswd);

if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
    
  mysql_select_db($db, $con);
  mysql_query("SET NAMES utf8"); 
  
  $comment_text =  $_POST["comment_text"];
  $user_uid=$_POST["user_uid"];
  $social_portal=$_POST["social_portal"];
  $page_uid=$_POST["page_uid"];
  $user_name = $_POST["user_name"];
  
  if(!mysql_query("INSERT INTO comments(comment_text, user_uid, user_name, social_portal, page_uid) VALUES ('".$comment_text."','".$user_uid."','".$user_name."','".$social_portal."','".$page_uid."')")){
	die('Error :' . mysql_error());	
  };
  
mysql_close($con);
?>
