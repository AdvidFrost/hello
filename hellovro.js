// urun.js

// Keyup event listener for Ctrl + \
window.addEventListener("keyup", event => {
  if (event.ctrlKey && (event.key === "\\" || event.keyCode === 220)) {
    const choice = prompt("Choose an option:\n1. Direct Injection\n2. History Flooder");
    if (choice === "1") {
      eval(prompt("Eval:"));
    } else if (choice === "2") {
      var num = prompt("How many times do you want this page to show up in your history?\nMade By: Veracity#6969");
      var done = false;
      var x = window.location.href;
      for (var i = 1; i <= num; i++) {
        if (i === parseInt(num)) {
          history.pushState(null, null, x);
          done = true;
        } else {
          var newUrl = x + (x.indexOf('?') === -1 ? '?' : '&') + 'i=' + i;
          history.pushState(null, null, newUrl);
        }
      }
      if (done) {
        alert("History Flooding Successful!\n" + window.location.href + "\nNow appears in your history " + num + (num == 1 ? " time." : " times.\nMade By: BlazerHM"));
      }
    }
  }
});

// Keydown event listener for Ctrl + `
document.addEventListener("keydown", function (event) {
  if ((event.key === "`" || event.keyCode === 192) && event.ctrlKey) {
    // Create a modal overlay
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%;' +
      'background-color: rgba(0,0,0,0.5); z-index: 10000; display: flex; align-items: center; justify-content: center;';
    
    // Create the iframe
    var iframe = document.createElement('iframe');
    iframe.src = "//inglan2.github.io/uRun/popup.html";
    iframe.style.cssText = 'width: 80%; height: 80%; border: none;';

    // Append iframe to overlay
    overlay.appendChild(iframe);
    // Append overlay to body
    document.body.appendChild(overlay);

    // Handle message event
    function messageHandler(e) {
      if (e.data && e.data.toString().startsWith("execute:")) {
        eval(e.data.toString().replace("execute:", ""));
        // Remove the overlay
        document.body.removeChild(overlay);
        // Remove the event listener to prevent memory leaks
        window.removeEventListener("message", messageHandler);
      }
    }
    window.addEventListener("message", messageHandler);
  }
});
