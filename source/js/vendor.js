// Swiper 7.4.1
import './vendor/swiper';

const swiperCoaches = new Swiper('.coaches__slider', {
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

  navigation: {
    prevEl: '.coaches-controls__button--prev',
    nextEl: '.coaches-controls__button--next',
  },
});

const swiperReviews = new Swiper('.reviews__slider', {
  slidesPerView: 1,
  spaceBetween: 40,

  navigation: {
    prevEl: '.reviews-controls__button--prev',
    nextEl: '.reviews-controls__button--next',
  },
});
