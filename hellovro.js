/// urun.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 220) { // 220 is the key code for '\'
    eval(prompt("Direct Injection:"));
  }
});

// GUI Method
document.addEventListener("keydown", function (e) {
  if (e.key == "~" && e.ctrlKey) {
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

// History Flooder
function historyFlooder() {
  var num = prompt("How Many Times Do You Want This Page To Show Up In your History?\nMade By: Veracity#6969");
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

// Add History Flooder button to Direct Injection prompt
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 220) { // 220 is the key code for '\'
    var action = prompt("Direct Injection:\n1. Execute custom code\n2. Run History Flooder");
    if (action === "1") {
      eval(prompt("Enter code to execute:"));
    } else if (action === "2") {
      historyFlooder();
    }
  }
});
