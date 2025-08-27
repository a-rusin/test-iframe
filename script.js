console.log("[iframe] js run");

window.addEventListener(
  "message",
  function (event) {
    console.log(event);
    console.log(event.data);
  },
  false
);
