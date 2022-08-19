const BELOW_DESKTOP_WIDTH = '(max-width: 1199px)';
const isBelowDesktopWidth = window.matchMedia(BELOW_DESKTOP_WIDTH);
const cards = document.querySelector('.coaches__list');

const onCardClick = ({target}) => {
  const currentCard = target.closest('[data-el="card"]');

  currentCard.classList.toggle('is-open');
};

const cardsHandler = () => {
  if (isBelowDesktopWidth.matches) {
    cards.addEventListener('click', onCardClick);
  } else {
    cards.removeEventListener('click', onCardClick);
  }
};

cardsHandler();

window.addEventListener('resize', cardsHandler);
