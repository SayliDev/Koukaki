<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner">
            <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
            <video src="<?php echo get_stylesheet_directory_uri() . '/assets/videos/studio_koukaki_video_header_sans_son.mp4'; ?>" loop muted autoplay></video>
        </section>
        <section id="story" class="story">
            <?php get_template_part( 'parts/carousel-characters'); ?>
            <article id="place">
                <div class="clouds">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/big_cloud.png">
                    <img class="little" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/little_cloud.png">
                </div>
                <div>
                    <h3>Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>
            </article>
        </section>


        <section id="studio">
            <h2><span>Studio </span><span>Koukaki</span></h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>
            <?php get_template_part( 'parts/nomination-section' ); ?>
    </main><!-- #main -->

<?php
get_footer();
