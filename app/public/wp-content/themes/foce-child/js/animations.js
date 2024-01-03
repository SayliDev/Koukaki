/* -------------------------------------------------------------------------- */
/*                    carrousel des personnages avec Swiper                   */
/* -------------------------------------------------------------------------- */

const charactersCarousel = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 60,
  initialSlide: 0,
  coverflowEffect: {
    rotate: 10,
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

  clouds.style.right = -600 + scrollPosition * 0.35 + "px";
});
