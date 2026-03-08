export class Card{
    constructor(id, type, sizes){
        this.id = id;
        this.type = type;
        this.sizes = sizes;
    }
    renderMenu(){
        const el = document.createElement('div');
        el.className = "cocktail-card";

        el.innerHTML = `
        <a href = "Cocktail.html?id=${this.id}">
         <img src = "../images/New(${this.id}).png" alt = "Image of ${this.type}" class = "cocktails"/>
            <h1 class = "cock-type">${this.type}</h1>
        </a>   
        `;

        return el;
    }
}
