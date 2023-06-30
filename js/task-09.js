function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  colorText: document.querySelector('.color'),
  btnChange: document.querySelector('.change-color'),
};

refs.btnChange.addEventListener('click', onChangeColor);

function onChangeColor() {
  refs.bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  refs.colorText.textContent = getRandomHexColor();
};