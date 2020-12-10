// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrBtnRef = document.querySelector('button[data-action="decrement"]');
console.log(decrBtnRef);

const incrBtnRef = document.querySelector('button[data-action="increment"]');
console.log(incrBtnRef);

const valueRef = document.getElementById('value');
let counterValue  = 0

incrBtnRef.addEventListener('click', increment);
decrBtnRef.addEventListener('click', decrement);

function increment(event) {
    console.log(counterValue += 1)
    valueRef.textContent = counterValue;  
}

function decrement(event) {
    console.log(counterValue -= 1)
    valueRef.textContent = counterValue; 
}