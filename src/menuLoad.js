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
        <h4>Margerita</h4>
        <h4>Napolitano</h4>
        <h4>Pepperoni</h4>
        <h4>Proscuitto</h4>
    </div>
  `;

  // Append the contentDiv to body if not already there
  if (!document.body.contains(contentDiv)) {
    // document.body.appendChild(contentDiv);
    document.body.innerHTML = contentDiv;
  }
}