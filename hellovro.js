/// urun.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 220) {
    const choice = prompt("Choose an option:\n1. Direct Injection\n2. History Flooder");
    if (choice === "1") {
      eval(prompt("Eval:"));
    } else if (choice === "2") {
      var num = prompt("How Times Do You Want This Page To Show Up In your History?\nMade By: Veracity#6969");
      done = false;
      x = window.__cpLocation.href;
      for (var i = 1; i <= num; i++) {
        history.pushState(0, 0, i == num ? x : i.toString());
        if (i == num) {
          done = true;
        }
      }
      if (done === true) {
        alert("History Flooding Successful!\n " + window.__cpLocation.href + " \nNow Appears In Your History " + num + (num == 1 ? " time." : " Times. \nMade By: BlazerHM"));
      }
    }
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "`" && e.ctrlKey) {
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
