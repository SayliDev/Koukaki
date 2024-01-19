/* -------------------------------------------------------------------------- */
/*                        effet de parallaxe des nuages                       */
/* -------------------------------------------------------------------------- */

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let clouds = document.querySelector(".clouds");

  // Amplitude maximale de 300 pixels
  let amplitude = 300;

  // Calcul de la nouvelle position avec une amplitude maximale
  let newPosition = -amplitude + scrollPosition * 0.3;

  // Met à jour la position que si la nouvelle position est positive
  if (newPosition > 0) {
    clouds.style.right = newPosition + "px";
  }
});

/* -------------------------------------------------------------------------- */
/*                  animation fade-in des sections au scroll                  */
/* -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne toutes les sections de la page
  const sections = document.querySelectorAll("section");

  // Fonction pour faire apparaître les sections au défilement
  function apparitionDansLaSection() {
    sections.forEach(function (section) {
      // Obtient la position de la section par rapport à la fenêtre
      const positionSection = section.getBoundingClientRect().top;
      const hauteurFenetre = window.innerHeight;

      // Déclenchement à 80% de la hauteur de la fenêtre
      const pointDeclenchement = hauteurFenetre * 0.8;

      // Si la section est en haut de la fenêtre ou dépasse le point de déclenchement
      if (positionSection < pointDeclenchement) {
        // Faites apparaître la section
        section.style.opacity = "1";
      }
    });
  }

  // Appelez la fonction lors du chargement de la page
  apparitionDansLaSection();

  // Appelez la fonction lors du défilement de la page
  window.addEventListener("scroll", apparitionDansLaSection);
});

/* -------------------------------------------------------------------------- */
/*                       animation des titres au scroll                       */
/* -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne toutes les spans à l'intérieur des h2 et h3
  const spans = document.querySelectorAll("h2 span, h3 span");

  // Options pour l'IntersectionObserver
  const options = {
    threshold: 0.8, // 80% de la section doit être visible
  };

  spans.forEach(function (spanElement) {
    const observateurIntersection = new IntersectionObserver(function (
      entrees
    ) {
      // Pour chaque entree observée
      entrees.forEach(function (entree) {
        if (entree.isIntersecting) {
          // Ajoute la classe "title-animation" à la span
          spanElement.classList.add("title-animation");

          // Si c'est la deuxième span, on ajoute également la classe "delay-title"
          if (
            spanElement ===
            document.querySelector("#studio h2 span:nth-child(2)")
          ) {
            spanElement.classList.add("delay-title");
          }

          // Arrête d'observer la span actuelle
          observateurIntersection.unobserve(entree.target);
        }
      });
    },
    options);

    // Commence à observer la span actuelle
    observateurIntersection.observe(spanElement);
  });
});

/* -------------------------------------------------------------------------- */
/*                    animation du parallaxe de l'image                       */
/* -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  const parallaxSection = document.querySelector(".banner");
  const parallaxImage = document.querySelector(".foreground-image");

  if (parallaxSection && parallaxImage) {
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      parallaxImage.style.top = 0 + scrollPosition * 0.2 + "px";
    });
  }
});

/* -------------------------------------------------------------------------- */
/*                        fleurs qui accélère au scroll                       */
/* -------------------------------------------------------------------------- */

const elementsAAnimer = document.querySelectorAll(
  ".story__article, h2, #studio h2, .nomination-content h3, .site-footer ul"
);

//stock le timer
let timerDeScroll;

// fonction pour ajouter ou retirer la classe en fonction du défilement
function gererDefilement() {
  elementsAAnimer.forEach((element) => {
    element.classList.add("flowers-animation");
  });

  clearTimeout(timerDeScroll);

  timerDeScroll = setTimeout(() => {
    elementsAAnimer.forEach((element) => {
      element.classList.remove("flowers-animation");
    });
  }, 200); // stop l'animation apres...
}

// Ajoutez un écouteur d'événements de défilement
window.addEventListener("scroll", gererDefilement);

/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\   autre parti du script   ///////////////////////////*/

// ajoute une classe "exclure-animation-fleurs" (dans le css) aux éléments à exclure (les tiges)
const elementsAExclure = document.querySelectorAll(
  ".story h2, .story__article"
);

elementsAExclure.forEach((element) => {
  element.classList.add("exclude-flowers-animation");
});
