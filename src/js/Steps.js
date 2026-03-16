export class Steps {
  constructor(id, type, sizes, recipe) {
    this.id = id;
    this.type = type;
    this.sizes = sizes;
    this.recipe = recipe;
    this.index = 0;
  }
  render() {
    this.el = document.createElement('div');
    this.el.className = "cocktail-recipe";
    this.el.innerHTML = `
      ${this.renderRecipe()}
      <div class = "recipe">
        <div class = "card-container">
        ${this.renderCard()}
        </div>
        <div class = "arrow-container">
          <button id="back-card-btn"><img src="../images/Arrow.png"alt="back button"></button>
          <div class = "dots">
          <img src="../images/dot.png"/>
          <img src="../images/dot.png"/>
          <img src="../images/dot.png"/>
          </div>
          <button id="front-card-btn"><img src="../images/arrow-f.png"alt="front button"></button>
        <div>
   
      </div>

  
    `;
    this.cardContainer = this.el.querySelector(".card-container");

    this.updateIndex();
    return this.el;
  }

  renderRecipe() {
    return `
      <div class = "title">
          <img src = "../images/New(${this.id}).png" alt = "Image of ${this.type}" class = "image"/>
          <h1>${this.type}</h1>
      </div>
    `;
  }
  renderCard() {
    const sections = [
    this.recipe.ingredients,
    this.recipe.preparation,
    this.recipe.tips
  ];

  const titles = ["Ingredients", "Preparation", "Tips"];

  const currentList = sections[this.index];
  const currentTitle = titles[this.index];

  return this.renderList(currentList, currentTitle);
  }

  renderList(list, title) {
    return `
    <div class = "card">
      <h3 class="card-title">${title}</h3>
      <ul class = "list-recipe">
        ${list.map(data => `<li>${data}</li>`).join("")}    
      </ul>
    </div>
    `;
  }

  updateIndex() {
    const button_b = this.el.querySelector('#back-card-btn');
    const button_f = this.el.querySelector('#front-card-btn');
    button_b.addEventListener("click", () => {
      this.index--;
      if(this.index < 0) this.index = 2;
      this.refreshCard();
    })
      button_f.addEventListener("click", () => {
      this.index++;
      if(this.index > 2) this.index = 0;    

      this.refreshCard();
    })


  }
  refreshCard() {
    this.cardContainer.innerHTML = this.renderCard();
  }
}