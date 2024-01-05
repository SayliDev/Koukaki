<?php
function theme_enqueue_styles() {
    // Enqueue du style du thème parent
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    // Enqueue du script d'animation personnalisé
    wp_enqueue_script('animations-script', get_stylesheet_directory_uri() . '/js/animations.js', array('swiper'), null, true);
    // Ajoute jQuery depuis CDN
    // wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.7.1.min.js', array(), '3.7.1', false);
    // Ajoute Swiper depuis CDN
    wp_enqueue_style('swiper-style', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.6/swiper-bundle.css', array(), '8.4.6');
    wp_enqueue_script('swiper', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.6/swiper-bundle.min.js', array(), '8.4.6', true);}

add_action('wp_enqueue_scripts', 'theme_enqueue_styles');


// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}