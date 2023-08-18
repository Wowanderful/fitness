import Swiper from '../vendor/swiper';

const slider = new Swiper('.slider', {
  loop: true,
  cssMode: true,
  direction: 'horizontal',
  slidesPerView: 1,

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 1,
    },
  },

  navigation: {
    nextEl: '.slider__swiper-button-next',
    prevEl: '.slider__swiper-button-prev',
    clickable: true,
  },
}
);

const feedbackSlider = new Swiper('.feedback__slider', {
  cssMode: true,
  loop: false,
  direction: 'horizontal',
  slidesPerView: 1,

  navigation: {
    nextEl: '.feedback__button-next',
    prevEl: '.feedback__button-prev',
    clickable: true,
  },
});

export {slider, feedbackSlider};
