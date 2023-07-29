const buttons = document.querySelectorAll('.button-open');

const toggleButton = () => {
  buttons.forEach(function (button) {
    button.addEventListener('click', () => {
      button.classList.toggle('button--close');
    });
  });
};

export {toggleButton};
