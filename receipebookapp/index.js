const API_KEY = '3f5c0394b45647de8dc1906ba1c71926';
const recipeList = document.getElementById('recipe-list');

function displayRecipes(recipes) {
  recipeList.innerHTML = '';
  recipes.forEach((recipe) => {
    const recipeItem = document.createElement('li');
    recipeItem.classList.add('recipe-item'); // Changed 'classlist' to 'classList'
    
    const recipeImage = document.createElement('img'); // Added 'const' before recipeImage
    recipeImage.src = recipe.image;
    recipeImage.alt = 'recipe';
    
    const recipeTitle = document.createElement('h2'); // Added 'const' before recipeTitle
    recipeTitle.innerText = recipe.title;
    
    const recipeIngredients = document.createElement('p'); // Added 'const' before recipeIngredients
    recipeIngredients.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(', ')}`; // Changed 'orginal' to 'original'
    
    const recipeLink = document.createElement('a'); // Added 'const' before recipeLink
    recipeLink.href = recipe.sourceUrl;
    recipeLink.innerText = 'View Recipe';
    
    recipeItem.appendChild(recipeTitle); // Reordered elements for a better layout
    recipeItem.appendChild(recipeImage);
    recipeItem.appendChild(recipeIngredients);
    recipeItem.appendChild(recipeLink);
    recipeList.appendChild(recipeItem);
  });
}

async function getRecipes() {
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.recipes;
}

async function init() {
  try {
    const recipes = await getRecipes();
    displayRecipes(recipes);
  } catch (error) {
    console.error('Error:', error);
  }
}

init();
