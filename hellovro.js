/// urun.js
// Direct Injection Method (Ctrl + \)
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 220) { // 220 is the key code for '\'
    eval(prompt("Eval:"));
  }
});

// GUI Method (Ctrl + Shift + `)
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.which === 192) { // 192 is the key code for '`'
    var t = window.open("", "_blank", "width=500,height=300");
    var e = t.document.createElement("iframe");
    e.src = "//inglan2.github.io/uRun/popup.html";
    e.style.cssText = "width:100%; height:100%; border:none;";
    t.document.body.appendChild(e);
    t.document.title = "uRun";
    t.addEventListener("message", function (e) {
      if (e.data.toString().startsWith("execute:")) {
        eval(e.data.toString().replace("execute:", ""));
        t.close();
      }
    });
  }
});

// History Flooder (Ctrl + Alt + H)
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.altKey && e.key === "h") {
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
      alert("History Flooding Successful!\n" + window.location.href + "\nNow Appears In Your History " + num + (num == 1 ? " time." : " Times. \nMade By: BlazerHM"));
    }
  }
});
