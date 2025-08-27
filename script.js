console.log("[iframe] js run");

window.addEventListener("message", function (event) {
  if (event.origin !== "https://a-rusin.github.io/test-sender/") return;

  const data = event.data;

  console.log(data);
});
