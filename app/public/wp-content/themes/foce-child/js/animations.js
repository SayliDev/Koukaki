const charactersCarousel = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 60,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});
