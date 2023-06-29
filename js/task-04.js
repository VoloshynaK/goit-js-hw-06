const refs = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};

let counterValue = 0;

refs.btnDecrement.addEventListener('click', onBtnDecrement )
function onBtnDecrement() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
};

refs.btnIncrement.addEventListener('click', onBtnIncrement )
function onBtnIncrement() {
    counterValue += 1;
    refs.value.textContent = counterValue;
};