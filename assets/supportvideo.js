   var swiper = new Swiper('.videoswiper', {
  slidesPerView: 4,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: false,
  navigation: {
    nextEl: '.custom-swiper-button-next',
    prevEl: '.custom-swiper-button-prev',
  },
  breakpoints: { 
      320: { 
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
      },
    768: {
        slidesPerView: 1,
       slidesPerGroup: 1,
        spaceBetween: 15
      },
      1280: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 15
      }
  },
});