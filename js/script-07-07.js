// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputControlRef = document.getElementById('font-size-control');
console.dir(inputControlRef);

const textRef = document.getElementById('text');
console.dir(textRef);

inputControlRef.addEventListener('input', sizeChanger);

function sizeChanger(event) {
    const txtSize = parseFloat(inputControlRef.value) + '%';
    textRef.style.fontSize = txtSize;
}