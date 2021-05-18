import './style.css';

document.querySelector('.display').textContent = '1234';

const display = document.querySelector('.display');
const keyButtons = document.querySelectorAll('.keyboard__button');

keyButtons.forEach(keyButton => {
  keyButton.addEventListener('click', () => {
    const keyNumber = keyButton.getAttribute('data-value');
    if (keyNumber == -99) {
      display.innerHTML = '';
    }
  });
});

const reset = () => {
  display.innerHTML = '';
};
