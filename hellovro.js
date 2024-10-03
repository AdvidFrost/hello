/// urun.js
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.keyCode === 192) {
    var t = window.open("", "_blank", "width=500,height=300");
    var iframe = t.document.createElement("iframe");
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
  } else if (e.ctrlKey && e.keyCode === 220) {
    const evalBox = document.createElement("div");
    evalBox.style.cssText =
      "position:fixed; top:10px; right:10px; width:300px; z-index:1000; background:#f0f0f0; border:1px solid #ccc; padding:10px;";
    
    const evalInput = document.createElement("textarea");
    evalInput.placeholder = "Enter code to evaluate...";
    evalInput.style.cssText = "width: 100%; height: 60px;";
    
    const evalButton = document.createElement("button");
    evalButton.textContent = "Evaluate";
    evalButton.onclick = function () {
      eval(evalInput.value);
      document.body.removeChild(evalBox);
    };

    const flooderButton = document.createElement("button");
    flooderButton.textContent = "History Flooder";
    flooderButton.onclick = function () {
      var num = prompt("How Times Do You Want This Page To Show Up In your History?\nMade By: Veracity#6969");
      var done = false;
      var x = window.__cpLocation.href;
      for (var i = 1; i <= num; i++) {
        history.pushState(0, 0, i == num ? x : i.toString());
        if (i == num) done = true;
      }
      if (done === true) {
        alert("History Flooding Successful!\n " + window.__cpLocation.href + " \nNow Appears In Your History " + num + (num == 1 ? " time." : " Times. \nMade By: BlazerHM"));
      }
      document.body.removeChild(evalBox);
    };

    evalBox.appendChild(evalInput);
    evalBox.appendChild(evalButton);
    evalBox.appendChild(flooderButton);
    document.body.appendChild(evalBox);
  }
});
