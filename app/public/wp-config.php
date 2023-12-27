<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '*.JIjEC`Jl2rrl]hcQKj#%APi!Ia)Cub#(v|*Ei1B|(ydyWF{%+,`?b9hoK 3sl;' );
define( 'SECURE_AUTH_KEY',   '|cmfoKy[9j{0U5E_Nt0I q?1n~R9R%PY5YHf~)i(AAjMZu]@X-eW2p!_xA%b*zIy' );
define( 'LOGGED_IN_KEY',     '9s0[fHnY0:o5K%yz$3hP6`LrF,K>4gqcVZ[bbenLy)-IWy/tO-;SWl.-u#ngp]JI' );
define( 'NONCE_KEY',         'hN-~ci=G3z|}&0.Y!Z(3Jwg)02x<QN[{PIMm`ShUVt^f{x4C.$F?(iR?}v9*x6ST' );
define( 'AUTH_SALT',         'iw]`:*_df*odvhf0<XD} (p{+ya(i;~&T<R7`8,DoER+R%$3,t:k;5mOE?,M1_*P' );
define( 'SECURE_AUTH_SALT',  'kvf=xOmc;WdZ>9761Loa5U@4*@>;$~gv> {a`FB0,~=bx#v~%TJg/cNWiiiCy69 ' );
define( 'LOGGED_IN_SALT',    'Dy|dk3oc-j~V 5J;Qd,8OM(2EVLf-1Q&j,>ml^p;Pv^Q(Nx4l*Wok&eqAQ9/toF(' );
define( 'NONCE_SALT',        'B<e+nsgx8Jv(9XU/kcI|VL(`@D,sI~CHP-CX$J%R>&&v(oyP+k4@,L R81@bniTF' );
define( 'WP_CACHE_KEY_SALT', '; Po|~~ODI[KK58OviGP8]T<lI@{(1 y1:dz3=VYgOVpAi/F^SgMLZKYi4|~}u&0' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
