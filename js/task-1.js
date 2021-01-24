const countCategoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${countCategoriesRef.length} категории.`);

const arr = [];
arr.forEach.call(countCategoriesRef, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${title}, Количество элементов: ${itemsLength}`);
});

