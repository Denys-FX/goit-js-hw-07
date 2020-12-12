// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.addEventListener('input', updateName);

function updateName(event) {
    outputName.textContent = inputName.value
}