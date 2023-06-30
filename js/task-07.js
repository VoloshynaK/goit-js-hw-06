const refs = {
    input: document.querySelector('#font-size-control'),
    textLabel: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.textLabel.style.fontSize = `${event.target.value}px`;

}