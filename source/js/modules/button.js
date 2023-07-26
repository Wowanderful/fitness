const button = document.querySelector('.button--open');

const toggleButton = () => {
  button.addEventListener('click', () => {
    button.classList.toggle('button--close');
  });
};

export {toggleButton};
