import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  loop: true,
  direction: 'horizontal',
  sidesPerView: 4,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
}
);

swiper.init();
