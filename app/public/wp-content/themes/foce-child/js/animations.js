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
          // Ajouter la classe "title-animation" à la span
          spanElement.classList.add("title-animation");

          // Si c'est la deuxième span, on ajoute également la classe "delay-title"
          if (
            spanElement ===
            document.querySelector("#studio h2 span:nth-child(2)") // veut dire la deuxième span
          ) {
            spanElement.classList.add("delay-title");
          }

          // Enlever l'observer
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Commencer à observer la span actuelle
    observer.observe(spanElement);
  });
});

/* -------------------------------------------------------------------------- */
/*                vitesse de rotation en fonction du défilement               */
/* -------------------------------------------------------------------------- */

/* script qui accelere la rotation des fleurs au scroll */

/* -------------------------------------------------------------------------- */
/*                                 Burger-menu                                */
/* -------------------------------------------------------------------------- */

// const burger = document.querySelector(".burger-menu");

// burgerBtn.addEventListener("click", function () {
//   console.log("click");
// });
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
