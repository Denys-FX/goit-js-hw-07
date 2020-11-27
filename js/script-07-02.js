const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const createListItem = (ingredient) => {
    const elemContainer = document.createElement('li');
    const elemTitle = document.createElement('h2');
    elemTitle.textContent = ingredient;
    elemContainer.append(elemTitle);
    return elemContainer;
}

const listItems = ingredients.map(ingredient => createListItem(ingredient));
console.log(listItems[0]);

const ingredientsList = document.getElementById('ingredients');
console.log(ingredientsList);

ingredientsList.append(...listItems);