import imask from 'imask';

const form = document.querySelector('[data-el="form"]');
const telField = form.querySelector('[data-el="tel-field"]');
const telInput = form.querySelector('[data-el="tel-input"]');

const telMask = {
  mask: '+{7} (000) 000-00-00',
};

const formTelMask = imask(telInput, telMask);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const telLength = formTelMask.unmaskedValue.length;
  const isTelValid = telLength === 11;

  if (!isTelValid) {
    telField.classList.add('is-invalid');
  } else {
    telField.classList.remove('is-invalid');
    form.submit();
  }
});
