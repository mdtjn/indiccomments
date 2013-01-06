<?php


function generateOldComments($comment_id,$user_uid,$user_name,$comment_text){
	$old_comments = '<div class="old-comment" class="comment_list" id ="old-comment#id"><table style="margin-top:10px"><tr><td style="width:500;padding:10px;border-radius:10px;background-color:#FFFFCC;"><small>comment_text</small></td><td><table><tr><td><img class="img-rounded" style="clear:both;" src="http://graph.facebook.com/user_uid/picture" alt="profile_pic" width="50" height="50"></td></tr><tr><td><small>user_name</small></td></tr></table></tr></table></div>';
	$search = array("#id", "user_uid", "user_name","comment_text");
	$replace   = array($comment_id, $user_uid, $user_name,$comment_text);
	
	$retstr =  str_replace($search, $replace, $old_comments);	
	
	return $retstr;
}

function generateNewComment($user_uid, $user_name){
	return "<h6>Post a New Comment</h6><div id='translControl'></div><table><tr><td><textarea id=\"ic_new_comment\" style=\"width:520px;height:100px\"></textarea></td><td><table><tr><td id=\"profile-pic\"></td></tr><tr><td><button type=\"button\" class = \"btn btn-primary\" onclick=\"submitComment()\">Post</button></td></tr></table></td></tr></table>";
}


?>