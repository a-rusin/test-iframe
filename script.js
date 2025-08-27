console.log("[iframe] js run");

const root = document.querySelector("#root");

window.addEventListener("message", function (event) {
  if (event.origin !== "https://a-rusin.github.io") return; // без слеша (/)

  const data = event.data;

  renderContent(data);

  const dataParsed = JSON.parse(data);

  if (dataParsed.eventType === "close") {
    renderContent("event close");
  }
});

function renderContent(content) {
  const newDiv = document.createElement("div");
  newDiv.textContent = content;
  root.appendChild(newDiv);
}
