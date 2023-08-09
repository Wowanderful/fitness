const videoContainer = document.querySelector('.photo-video__video-container');
const button = document.querySelector('.gym__button-play');
const poster = document.querySelector('.photo-video__video-preload');

const onButtonClick = () => {
  poster.classList.add('photo-video__img-hidden');
  const iframe = document.createElement('iframe');
  iframe.classList.add('photo-video__video');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('autoplay', '1');
  iframe.setAttribute('width', '364');
  iframe.setAttribute('height', 'auto');
  videoContainer.appendChild(iframe);
  button.classList.add('photo-video__button-hidden');
};

const playVideo = () => {
  if (videoContainer && button && poster) {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      onButtonClick();
    });
  }
};

export {playVideo};
