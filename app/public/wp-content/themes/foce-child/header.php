<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo("charset"); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary">
            <?php esc_html_e("Skip to content", "foce"); ?>
        </a>

        <header id="masthead" class="site-header">
    <nav id="site-navigation" class="main-navigation">
        <a class="site-title" href="<?php echo esc_url(
            home_url("/")
        ); ?>" rel="home">
            <?php bloginfo("name"); ?>
        </a>
        <!-- Bouton Burger -->
        <button class="burger-menu" id="toggleButton">
            <img id="burgerImage" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/burger.svg">
        </button>

        <div id="menu">
            <!-- Logo -->
            <div class="logo-container">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/menu_logo.png" alt="Logo">
            </div>
            
            <!-- Fleurs -->
            <img class="flower-menu" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/hibiscus_flower.png">
            <img class="sun-flower" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/sunflower.png">
            <img class="random-flower" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/random_flower.png">
            <img class="flower" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/flower.png">
            <img class="orchid-flower" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/orchid.png">

            <!-- Chats -->
            <img class="cat-black cat-animation" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/cat_black.png">
            <img class="cat-blue cat-animation" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/cat_blue.png">
            <img class="cat-yellow cat-animation" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/cat_yellow.png">

            <!-- Liste de liens -->
            <ul>
                <li class="link-animation"><a href="#story">Histoire</a></li>
                <li class="link-animation"><a href="#characters">Personnages</a></li>
                <li class="link-animation"><a href="#place">Lieu</a></li>
                <li class="link-animation"><a href="#studio">Studio Koukaki</a></li>
            </ul>

            <!-- Image en bas du burger -->
            <div>
                <img class="burger-bottom-image" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/studio_koukaki.svg" alt="Logo-Studio">
            </div>
        </div>

            </nav><!-- #site-navigation -->
        </header><!-- #masthead -->