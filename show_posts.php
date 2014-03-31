<?php
/*
Plugin Name: Show Post In lightbox
Plugin URI: http://opensourcetechnologies.com
Description: Show posts in lightbox allows you to show posts from a category into a post/page using the [ostlist] shortcode. This shortcode accepts a category id, the order in which you want the posts to display, and the number of posts to display. You can use [ostlist] as many times as needed with different arguments. Usage: [ostlist argument1=value1 argument2=value2].
Version: 1.0
Author: Opensourcetechnologies
Author URI: http://opensourcetechnologies.com
*/

include 'spbc_showPostsWidget.php';

wp_enqueue_script( 'jquery' );

add_action( 'wp_enqueue_scripts', 'spbc_stylesheet' );
add_action( 'wp_enqueue_scripts', 'spbc_ostlightbox' );



function spbc_stylesheet() {
	// Lightbox css
	wp_register_style( 'spbc-prefix-style2', plugins_url('ostlightbox/css/ost.css', __FILE__) );
	wp_enqueue_style( 'spbc-prefix-style2' );
}
	
function spbc_jquery() {
	//jQuery
	wp_register_script( 'spbc-jquery', plugins_url('jquery.min.js', __FILE__) );
	wp_enqueue_script( 'jquery' );
}
	
function spbc_ostlightbox(){
	//ostlightbox js
	wp_register_script( 'spbc-ostlightbox_js', plugins_url('ostlightbox/js/ostlightbox.js?v=1.0', __FILE__) );
	wp_enqueue_script( 'spbc-ostlightbox_js' );
}