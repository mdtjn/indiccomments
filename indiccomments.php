<?php
/*
Plugin Name: Indic Comment System
Plugin URI: https://indiccomments.herokuapp.com/
Description: The indic comment system replaces your WordPress comment system with your comments hosted and powered by IndicComments -it allows users to type in regional languages phonetically.
Author: Mudit Jain <mdt.j89@gmail.com>
Version: 1.0
Author URI: http://about.me/mudit.jain
*/

function indic_comments_template($value) {
    return dirname(__FILE__) . '/comments.php';
}


add_filter('comments_template', 'indic_comments_template');

?>
