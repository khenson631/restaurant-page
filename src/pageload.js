export function pageLoad() {
  // Create contentDiv if it doesn't exist
  let contentDiv = document.querySelector("#content");
  if (!contentDiv) {
    contentDiv = document.createElement("div");
    contentDiv.id = "content";
  }

  // Use innerHTML to insert HTML content
  contentDiv.innerHTML = `
    <h1>LaBella Pizza</h1>
    <h3>Since 1988</h3>
    <h4>The Best Pizza Long Island Has To Offer!</h4>
  `;

  // Append the contentDiv to body if not already there
  if (!document.body.contains(contentDiv)) {
    document.body.appendChild(contentDiv);
  }
}