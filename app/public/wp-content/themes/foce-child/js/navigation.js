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
document.querySelector(".burger-menu").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("active");

  // Vérifie quelle image est actuellement affichée et basculer vers l'autre
  if (image.src.includes("burger.svg")) {
    image.src =
      "http://localhost:10137/wp-content/themes/foce-child/assets/images/burger_croix.svg";
  } else {
    image.src =
      "http://localhost:10137/wp-content/themes/foce-child/assets/images/burger.svg";
  }
});

// Ferme le menu quand on click sur un lien
document.querySelectorAll("li").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("active");
    image.src =
      "http://localhost:10137/wp-content/themes/foce-child/assets/images/burger.svg";
  });
  console.log(link);
});

// Rotation de l'icon en cliquant sur le bouton
document.getElementById("toggleButton").addEventListener("click", function () {
  this.classList.toggle("rotate");
});
