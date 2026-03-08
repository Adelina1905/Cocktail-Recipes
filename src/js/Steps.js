export class Steps {
    constructor(id, type, sizes, recipe) {
        this.id = id;
        this.type = type;
        this.sizes = sizes;
        this.recipe = recipe;
    }
    renderRecipe() {
        const el = document.createElement('div');

        el.className = "cocktail-recipe";
        const ingredients = this.recipe.ingredients;
        console.log(ingredients);
        el.innerHTML = `
            <div class = "title">
                <img src = ""/>
                <ul>
                ${ingredients.map(data => 
            `<li>${data}</li>`
        ).join("")}
                </ul>
            </div>
            <div class = "card-board"></div>
        `
        return el;
    }
}