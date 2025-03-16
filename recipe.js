import recipes from './recipes.mjs';

// Function to generate a random number between 0 and num - 1
function random(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random recipe from the list
function getRandomListEntry(list) {
    return list[random(list.length)];
}

// Function to generate HTML for tags
function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

// Function to generate HTML for rating stars
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating 
            ? `<span aria-hidden="true" class="icon-star">⭐</span>` 
            : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}

// Function to generate HTML for a recipe
function recipeTemplate(recipe) {
    return `
        <figure class="recipe">
            <img src="${recipe.image}" alt="Image of ${recipe.name}" />
            <figcaption>
                <ul class="recipe__tags">${tagsTemplate(recipe.tags)}</ul>
                <h2><a href="#">${recipe.name}</a></h2>
                <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
                <p class="recipe__description">${recipe.description}</p>
            </figcaption>
        </figure>
    `;
}

// Function to render recipes on the page
function renderRecipes(recipeList) {
    const outputElement = document.getElementById('recipe-container'); // Ensure you have an element with this ID in your HTML
    outputElement.innerHTML = recipeList.map(recipeTemplate).join('');
}

// Initialize and display a random recipe
function init() {
    const randomRecipe = getRandomListEntry(recipes);
    renderRecipes([randomRecipe]);
}

// Function to filter recipes based on user input
function filterRecipes(query) {
    return recipes
        .filter(recipe => 
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
        )
        .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
}

// Event handler for search functionality
function searchHandler(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    const filteredRecipes = filterRecipes(searchInput);
    renderRecipes(filteredRecipes);
}

// Attach search event listener
document.getElementById('search-button').addEventListener('click', searchHandler);

// Run init function on page load
init();
