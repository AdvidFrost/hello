/// urun.js
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === '`') {
    event.preventDefault();
    var choice = prompt("Choose an option:\n1. Direct Injection\n2. GUI Method\n3. History Flooder");
    
    switch(choice) {
      case "1":
        // Direct Injection
        eval(prompt("Enter your code to evaluate:"));
        break;
      
      case "2":
        // GUI Method
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
        break;
      
      case "3":
        // History Flooder
        var num = prompt("How Times Do You Want This Page To Show Up In your History?");
        var done = false;
        var x = window.location.href;
        for (var i = 1; i <= num; i++) {
          history.pushState(0, 0, i == num ? x : i.toString());
          if (i == num) {
            done = true;
          }
        }
        if (done === true) {
          alert("History Flooding Successful!\n " + window.location.href + " \nNow Appears In Your History " + num + (num == 1 ? " time." : " Times."));
        }
        break;
      
      default:
        alert("Invalid choice");
    }
  }
});
