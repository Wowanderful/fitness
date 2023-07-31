const videoContainer = document.querySelector('.gym-video__container');
const button = document.querySelector('.button-play');
const poster = document.querySelector('.video-preload');

const onButtonClick = () => {
  poster.classList.add('img-hidden');
  const iframe = document.createElement('iframe');
  iframe.classList.add('video');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('autoplay', '1');
  iframe.setAttribute('width', '364');
  iframe.setAttribute('height', 'auto');
  videoContainer.appendChild(iframe);
  button.classList.add('button-hidden');
};

const playVideo = () => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    onButtonClick();
  }
  );
};

export {playVideo};
