import { COCKTAILS } from './cocktails.js';
import { Card } from './Card.js';
import { setupWindowControls } from "./windowControls.js";

setupWindowControls();
const container = document.getElementById('menu');

COCKTAILS.forEach(data => {
    const cocktail = new Card(data.id, data.type, data.sizes);
    container.appendChild(cocktail.renderMenu());
})

