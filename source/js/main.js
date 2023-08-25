import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {playVideo} from './modules/playvideo';
import {initTabs} from './tabs/init-tabs';
import {slider, feedbackSlider} from './modules/slider';
import {initAccordions} from './accordion/init-accordion';
import {toggleButton} from './modules/button';
import {initPhoneMask} from './utils/phone-mask';

// document.addEventListener('click', (evt) => {
//   if (evt.target.matches('.btn')) {
//     evt.target.focus();
//   }
// });

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initTabs();
    initAccordions();
    playVideo();
    toggleButton();
    initPhoneMask();
  });
});

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();


  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    slider.init();
    feedbackSlider.init();

  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
