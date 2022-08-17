const tabLinks = document.querySelectorAll('[data-el="tab-link"]');
const tabContents = document.querySelectorAll('[data-el="tab-content"]');

const onTabLinkClick = ({currentTarget}) => {
  const value = currentTarget.dataset.value;

  tabContents.forEach((tabContent) => {
    tabContent.classList.remove('is-active');
  });

  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove('is-active');
  });

  document.querySelector(`#${value}`).classList.add('is-active');

  currentTarget.classList.add('is-active');
};

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener('click', onTabLinkClick);
});
