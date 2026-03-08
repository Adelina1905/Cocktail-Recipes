import { COCKTAILS } from './cocktails.js';
import { setupWindowControls } from "./windowControls.js";
import {Steps} from "./Steps.js"
setupWindowControls();
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const container = document.getElementById("recipe-page");
const cocktail = COCKTAILS.find(c => c.id === id);

const recipe = new Steps(cocktail.id, cocktail.type, cocktail.sizes, cocktail.recipe);
container.appendChild(recipe.renderRecipe());
