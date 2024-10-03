/// urun.js
// Direct Injection Method
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 220) { // 220 is the key code for '\'
    eval(prompt("Eval:"));
  }
});

// GUI Method
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

// Direct Injection with Preloaded Scripts
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.altKey && event.which === 73) { // Ctrl + Alt + I
    var choice = prompt("Choose an option:\n1. Evaluate custom code\n2. History Flooder");
    
    switch(choice) {
      case "1":
        eval(prompt("Enter your code:"));
        break;
      case "2":
        var num = prompt("How many times do you want this page to show up in your history?");
        var done = false;
        var x = window.location.href;
        for (var i = 1; i <= num; i++) {
          history.pushState(0, 0, i == num ? x : i.toString());
          if (i == num) {
            done = true;
          }
        }
        if (done === true) {
          alert("History Flooding Successful!\n" + window.location.href + "\nNow appears in your history " + num + (num == 1 ? " time." : " times."));
        }
        break;
      default:
        alert("Invalid choice");
    }
  }
});
