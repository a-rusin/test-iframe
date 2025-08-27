console.log("[iframe] js run");

window.addEventListener(
  "message",
  function (event) {
    if (event.origin === "https://a-rusin.github.io") {
      console.log(event);
      console.log(event.data);
    }
  },
  false
);
