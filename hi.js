/// urun.js
// Combined script for direct injection, GUI, and history flooder

// Direct Injection (Ctrl + \)
window.addEventListener("keydown", event => {
  if (event.ctrlKey && event.which === 220) {
    const action = prompt("Choose action:\n1. Evaluate code\n2. History flooder");
    if (action === "1") {
      eval(prompt("Enter code to evaluate:"));
    } else if (action === "2") {
      historyFlooder();
    }
  }
});

// GUI Method (Ctrl + `)
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.which === 192) {
    var t = window.open("", "_blank", "width=500,height=300");
    var e = t.document.createElement("iframe");
    (e.src = "//inglan2.github.io/uRun/popup.html"),
    (e.style.cssText = "width:100%; height:100%; border:none;"),
    t.document.body.appendChild(e),
    t.document.title = "uRun",
    t.addEventListener("message", function (e) {
      e.data.toString().startsWith("execute:") && (eval(e.data.toString().replace("execute:", "")), t.close());
    });
  }
});

// History Flooder function
function historyFlooder() {
  var num = prompt("How many times do you want this page to show up in your history?\nMade By: Veracity#6969");
  var done = false;
  var x = window.location.href;
  for (var i = 1; i <= num; i++) {
    history.pushState(0, 0, i == num ? x : i.toString());
    if (i == num) {
      done = true;
    }
  }
  if (done === true) {
    alert("History Flooding Successful!\n " + window.location.href + " \nNow Appears In Your History " + num + (num == 1 ? " time." : " Times. \nMade By: BlazerHM"));
  }
}
