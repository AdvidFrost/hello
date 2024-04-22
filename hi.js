window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
      myCustomFunction();
  }
});

function myCustomFunction() {
  (function(){var a=document.createElement("script");a.src="https://x-ray-goggles.mouse.org/webxray.js";a.className="webxray";a.setAttribute("data-lang","en-US");a.setAttribute("data-baseuri","https://x-ray-goggles.mouse.org");document.body.appendChild(a);}());
  console.log('Key combination pressed.');
}
