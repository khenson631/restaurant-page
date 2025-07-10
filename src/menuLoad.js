import margeritaImg from './assets/margerita.jpg';
import neopolitanImg from './assets/neopolitan.jpg';
import peppperoniImg from './assets/pepperoni.jpg';
import prosciuttoImg from './assets/prosciutto.jpg';

export function menuLoad() {
  // Create contentDiv if it doesn't exist
  let contentDiv = document.querySelector("#content");
  if (!contentDiv) {
    contentDiv = document.createElement("div");
    contentDiv.id = "content";
  }
  
  // Use innerHTML to insert HTML content
  contentDiv.innerHTML = `
    <h1>Menu</h1>
    <h2>Pizzas</h3>
    <div id="pizzas">
        <div id="margherita">
            <h3>Margherita</h3>
            <img src="${margeritaImg}" alt="Margerita Pizza" class="pizzaImages">
        </div>
        <div id="Neopolitan">
            <h3>Neopolitan</h3>
             <img src="${neopolitanImg}" alt="Neoplitan Pizza" class="pizzaImages">
        </div>
        <div id="Pepperoni">
            <h3>Pepperoni</h3>
            <img src="${peppperoniImg}" alt="Pepperoni Pizza" class="pizzaImages">
        </div>
        <div id="Proscuitto">
            <h3>Proscuitto</h3>
            <img src="${prosciuttoImg}" alt="Prosciutto Pizza" class="pizzaImages">
        </div>
    </div>
  `;

  // Append the contentDiv to body if not already there
  if (!document.body.contains(contentDiv)) {
    // document.body.appendChild(contentDiv);
    document.body.innerHTML = contentDiv;
  }
}