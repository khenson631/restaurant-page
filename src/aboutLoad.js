export function aboutLoad() {
  // Create contentDiv if it doesn't exist
  let contentDiv = document.querySelector("#content");
  if (!contentDiv) {
    contentDiv = document.createElement("div");
    contentDiv.id = "content";
  }

  // Use innerHTML to insert HTML content
  contentDiv.innerHTML = `
    <h1>About Us</h1>
    <p> La Bella Pizzeria is a family-owned establishment 
    serving the Long Island community since 1988. 
    We strive to deliver the highest quality products using the best ingredients we can source. 
    Come dine at La Bella. If it ain't fresh, it ain't La Bella!
    </p>
  `;

  // Append the contentDiv to body if not already there
  if (!document.body.contains(contentDiv)) {
    // document.body.appendChild(contentDiv);
    document.body.innerHTML = contentDiv;
  }
}