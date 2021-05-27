import './style.css';

const display = document.querySelector('.display');
const keyButtons = document.querySelectorAll('.keyboard__button');

let password = [];

keyButtons.forEach(keyButton => {
  keyButton.addEventListener('click', () => {
    const keyNumber = keyButton.getAttribute('data-value');
    if (keyNumber == -99) {
      reset();
    } else if (keyNumber == 99) {
      display.textContent = password;
    } else {
      password += keyNumber;
    }
  });
});

const reset = () => {
  display.textContent = '';
  password = '';
};
