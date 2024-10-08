/// urun.js

// Listen for the 'keyup' event to detect when Ctrl + ` is released
window.addEventListener("keyup", event => {
  if (event.ctrlKey && (event.key === '`' || event.keyCode === 192)) {
    const choice = prompt("Choose an option:\n1. Direct Injection\n2. History Flooder");
    if (choice === "1") {
      eval(prompt("Eval:"));
    } else if (choice === "2") {
      // History Flooder code
      var num = prompt("How many times do you want this page to show up in your history?\nMade By: Veracity#6969");
      var done = false;
      var x = window.location.href; // Corrected the property
      for (var i = 1; i <= num; i++) {
        history.pushState(0, 0, i == num ? x : i.toString());
        if (i == num) {
          done = true;
        }
      }
      if (done === true) {
        alert("History Flooding Successful!\n " + window.location.href + " \nNow Appears In Your History " + num + (num == 1 ? " time." : " times.\nMade By: BlazerHM"));
      }
    }
  }
});

// Listen for the 'keydown' event to detect when Ctrl + ` is pressed
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && (e.key === '`' || e.keyCode === 192)) {
    var t = window.open("", "_blank", "width=500,height=300");
    var iframe = t.document.createElement("iframe"); // Renamed variable to 'iframe'
    iframe.src = "//inglan2.github.io/uRun/popup.html";
    iframe.style.cssText = "width:100%; height:100%; border:none;";
    t.document.body.appendChild(iframe);
    t.document.title = "uRun";
    t.addEventListener("message", function (e) {
      if (e.data.toString().startsWith("execute:")) {
        eval(e.data.toString().replace("execute:", ""));
        t.close();
      }
    });
  }
});
