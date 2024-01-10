/* -------------------------------------------------------------------------- */
/*                    carrousel des personnages avec Swiper                   */
/* -------------------------------------------------------------------------- */

const charactersCarousel = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 100,
  initialSlide: 0,
  coverflowEffect: {
    rotate: 45,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});

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
  const sections = document.querySelectorAll("section");

  function fadeInSection() {
    sections.forEach(function (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const declenchement = windowHeight * 0.8;

      if (sectionTop < declenchement) {
        section.style.opacity = "1";
      }
    });
  }
  fadeInSection();

  // Appele la fonction lors du défilement
  window.addEventListener("scroll", fadeInSection);
});

/* -------------------------------------------------------------------------- */
/*                       animation des titres au scroll                       */
/* -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez toutes les spans à l'intérieur des h2
  const spans = document.querySelectorAll("h2 span");

  // Options pour l'IntersectionObserver
  const options = {
    threshold: 0.8, // 80% de la section doit être visible
  };

  spans.forEach(function (spanElement) {
    const observer = new IntersectionObserver(function (entries) {
      // Pour chaque entrée observée
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Ajoute la classe "title-animation" à la span
          spanElement.classList.add("title-animation");

          // Si c'est la deuxième span, on ajoute également la classe "delay-title"
          if (
            spanElement ===
            document.querySelector("#studio h2 span:nth-child(2)") // veut dire la deuxième span
          ) {
            spanElement.classList.add("delay-title");
          }

          // Enleve l'observer
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Commence à observer la span actuelle
    observer.observe(spanElement);
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

// seletionne les fleurs de  h2::after

// const fleurs = document.querySelector("story h2::after");
// let fleurs = document.querySelector(".story h2::after");
// console.log(fleurs);

// const fleurs = document.querySelector(".story h2");

// fleurs.classList.add("flowers::after");

// console.log(fleurs);

// const h2Element = document.querySelector('.story h2');

// h2Element.classList.add('flowers');

// const fleurs = document.querySelector(".story h2");

// fleurs.classList.add("flowers-animation");

// const fleurs = document.querySelector(".story h2");
// const animationFleurs = document.querySelector(".flowers-animation");

// fleurs.classList.add("flowers-animation");

// console.log(fleurs);

// const elements = document.querySelectorAll(
//   ".story__article, .story h2"
// );

// elements.forEach((element) => {
//   element.classList.add("flowers-animation");
// });

//     elements.forEach(element => {
//       element.classList.remove('');
//     });
//   },
// }

const elementsAAnimer = document.querySelectorAll(
  ".story__article, h2, #studio h2, .site-footer ul, .site-footer"
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

//   const animate = document.querySelectorAll('.story__article, h2, #studio h2, .site-footer ul, .site-footer');
//   const scrollPosition = window.scrollY;

//   animate.forEach(element => {
//     animate.classList.add('flowers-animation');
//   });

//  FAIRE TIMEOUT

/*------------------------------------------------------------------- */

// const animate = document.querySelectorAll(
//   ".story__article, h2, #studio h2, .site-footer ul, .site-footer"
// );

// window.addEventListener("scroll",);

// const elementsToExclude = document.querySelectorAll(".story h2, .story__article");
