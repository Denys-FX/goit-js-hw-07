const categoryList = document.getElementById('categories');
const categoryTotal = categoryList.children.length;
console.log(`В списке ${categoryTotal} категории.`);

const itemList = document.querySelectorAll('.item');
itemList.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
    }
)