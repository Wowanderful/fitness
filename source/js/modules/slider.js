import Swiper from '../vendor/swiper';

const swiper = new Swiper('.swiper', {
  loop: true,
  cssMode: true,
  direction: 'horizontal',
  slidesPerView: 1,

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
}
);

export {swiper};
