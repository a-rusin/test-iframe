console.log("[iframe] js run");

const root = document.querySelector("#root");

window.addEventListener("message", function (event) {
  if (event.origin !== "https://a-rusin.github.io") return; // без слеша (/)

  const data = event.data;

  renderContent(data);

  console.log(event);

  const dataParsed = JSON.parse(data);

  if (dataParsed.eventType === "close") {
    renderContent("event close");
    WebApp.close();
  }

  if (dataParsed.eventType === "test") {
    renderContent("event test");
    WebApp.BackButton.show();
  }
});

function renderContent(content) {
  const newDiv = document.createElement("div");
  newDiv.textContent = content;
  root.appendChild(newDiv);
}
