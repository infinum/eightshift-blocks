<?php
/**
 * Head section for meta data
 *
 * @package Eightshift_Boilerplate\Views\Header\Head
 *
 * @since 1.0.0
 *
 */

use Eightshift_Boilerplate\Manifest\Manifest;

$icon = apply_filters( Manifest::MANIFEST_ITEM_FILTER_NAME, 'logo.svg' );
?>

<meta charset="<?php bloginfo( 'charset' ); ?>" />

<!-- Responsive -->
<meta content="width=device-width, initial-scale=1.0" name="viewport">

<!-- Remove IE's ability to use compatibility mode -->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />

<!-- Correct type -->
<meta http-equiv="Content-type" content="text/html; charset=utf-8">

<!-- Disable phone formatin on safari -->
<meta name="format-detection" content="telephone=no">

<!-- Speed up fetching of external assets -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//ajax.googleapis.com">
<link rel="dns-prefetch" href="//www.google-analytics.com">

<!-- Mobile chrome -->
<meta name="theme-color" content="#900000">

<!-- Win phone Meta -->
<meta name="application-name" content="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>"/>
<meta name="msapplication-TileColor" content="#900000"/>

<!-- Apple -->
<meta name="apple-mobile-web-app-title" content="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="#C3151B">
<link rel="apple-touch-startup-image" href="<?php echo esc_url( $icon ); ?>">

<!-- General -->
<link rel="shortcut icon" href="<?php echo esc_url( $icon ); ?>" />

<?php
get_template_part( 'src/blocks/components/tracking/head' );
