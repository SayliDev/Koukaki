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
    rotate: 10,
    stretch: 0,
    depth: 10,
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

  // Calcul de la nouvelle position
  let newPosition = -600 + scrollPosition * 0.45;

  // Condition : met à jour la position que si la nouvelle position est positive
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

  // Appelez la fonction lors du défilement
  window.addEventListener("scroll", fadeInSection);
});

/* -------------------------------------------------------------------------- */
/*                vitesse de rotation en fonction du défilement               */
/* -------------------------------------------------------------------------- */

/* script qui accelere la rotation des fleurs au scroll */
