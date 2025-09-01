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

  if (updatedData.type === "WebAppClose") {
    renderContent("event WebAppClose!");
    // renderContent(window.top);
    console.log(window.top);
  }

  if (updatedData.type === "test") {
    renderContent("event test");
  }
});

function renderContent(content) {
  const newDiv = document.createElement("div");
  newDiv.textContent = JSON.stringify(content);
  root.appendChild(newDiv);
}
