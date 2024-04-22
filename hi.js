window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
      myCustomFunction();
  }
});

function myCustomFunction() {
  
  console.log('Key combination pressed.');
}
