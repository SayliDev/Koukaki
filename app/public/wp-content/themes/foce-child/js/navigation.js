/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
/* -------------------------------------------------------------------------- */
/*                                 Burger-menu                                */
/* -------------------------------------------------------------------------- */

const image = document.getElementById("burgerImage");
const body = document.body;

document.querySelector(".burger-menu").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("active");

  // Vérifie quelle image est actuellement affichée et bascule vers l'autre
  if (image.src.includes("burger.svg")) {
    image.src =
      "http://localhost:10137/wp-content/themes/foce-child/assets/images/burger_croix.svg";
  } else {
    image.src =
      "http://localhost:10137/wp-content/themes/foce-child/assets/images/burger.svg";
  }

  // Ajoute ou supprime la classe "no-scroll" du body
  body.classList.toggle("no-scroll");
});

// Ferme le menu lorsqu'on clique sur un lien
document.querySelectorAll("li").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("active");
    image.src =
      "http://localhost:10137/wp-content/themes/foce-child/assets/images/burger.svg";
    // Retire la classe "no-scroll" du body lorsque le menu est fermé
    body.classList.remove("no-scroll");
  });
});

// Rotation de l'icône en cliquant sur le bouton
document.getElementById("toggleButton").addEventListener("click", function () {
  this.classList.toggle("rotate");
});
