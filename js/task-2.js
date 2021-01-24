const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.querySelector('#ingredients');
const arrIngredients = ingredients.map(ingredient => {
    let liRef = document.createElement('li');
    liRef.textContent = ingredient;
    return liRef;    
});
ulRef.append(...arrIngredients);