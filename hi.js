window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.key === '`') {
      eval(prompt("Eval:"));
  }
});
