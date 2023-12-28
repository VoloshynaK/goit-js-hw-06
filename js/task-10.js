const input = document.querySelector('[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();

    console.log("hello");
    const div = document.createElement('div');

    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    div.style.backgroundColor = color;
    boxes.append(div);

    size += 10;
  }
  
}

function destroyBoxes() {
  boxes.innerHTML = '';
}