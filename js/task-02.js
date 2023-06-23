const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const makeNewIngredient = ingredients => ingredients.map(ingredient => {
    const indredientEl = document.createElement('li');
    indredientEl.classList.add('item');
    
    indredientEl.textContent = ingredient;

    return indredientEl;
  });

const elements = makeNewIngredient(ingredients);
ingredientsListEl.append(...elements);
