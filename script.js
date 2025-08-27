console.log("[iframe] js run");

const root = document.querySelector("#root");

window.addEventListener("message", function (event) {
  // if (event.origin !== "https://a-rusin.github.io/test-sender") return; // без слеша (/)

  console.log(event);

  const data = event.data;

  const newDiv = document.createElement("div");
  newDiv.textContent = event.data;

  root.appendChild(newDiv);

  console.log(data);
});
