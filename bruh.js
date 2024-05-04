window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.key === '`') { // Replace '`' with the key of your choice
    (function(){
      var script = document.createElement("script");
      script.src = "https://x-ray-goggles.mouse.org/webxray.js";
      script.className = "webxray";
      script.setAttribute("data-lang", "en-US");
      script.setAttribute("data-baseuri", "https://x-ray-goggles.mouse.org");
      document.body.appendChild(script);
    })();
  }
});
