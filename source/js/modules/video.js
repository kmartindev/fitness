const videoWrapper = document.querySelector('[data-el="video-wrapper"]');
const videoPlayer = document.querySelector('[data-el="video-player"]');
const videoButton = document.querySelector('[data-el="video-button"]');

const onVideoButtonClick = () => {
  videoWrapper.classList.add('is-active');
  videoPlayer.setAttribute('src', `${videoPlayer.dataset.src}`);
};

videoButton.addEventListener('click', onVideoButtonClick);
