console.log("[iframe] js run");

const root = document.querySelector("#root");

window.addEventListener("message", function (event) {
  if (event.origin !== "https://a-rusin.github.io") return;

  const data = event.data;

  let updatedData;

  if (typeof data === "object") {
    updatedData = data;
  } else if (typeof data === "string") {
    if (data.includes('{"')) {
      updatedData = JSON.parse(data);
    } else {
      updatedData = data;
    }
  }

  renderContent(updatedData);

  if (updatedData.eventType === "close") {
    renderContent("event close");
    WebApp.close();
  }

  if (updatedData.eventType === "test") {
    renderContent("event test");
    WebApp.BackButton.show();
  }
});

function renderContent(content) {
  const newDiv = document.createElement("div");
  newDiv.textContent = JSON.stringify(content);
  root.appendChild(newDiv);
}
