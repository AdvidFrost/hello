// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    const currentDomain = window.location.hostname;
    
    let menuText = "Choose an option:\n";
    menuText += "1. Evaluate Custom Code\n";
    menuText += "2. History Flooder\n";
    menuText += "3. X-Ray Inspector\n";
    
    // Site-specific options
    const siteScripts = {
      "duolingo.com": {
        name: "Auto Duolingo",
        script: "https://github.com/mudachyo/Auto-Duolingo/raw/refs/heads/main/Auto-Duolingo.user.js"
      },
      "blooket.com": {
        name: "Blooket Cheats",
        script: "https://raw.githubusercontent.com/NotCalebm/Blooket-cheats/refs/heads/main/main"
      }
    };
    
    // Add site-specific options if available
    if (siteScripts[currentDomain]) {
      menuText += `4. ${siteScripts[currentDomain].name}\n`;
    }
    
    let choice = prompt(menuText);
    
    switch(choice) {
      case "1":
        let code = prompt("Enter code to evaluate:");
        if (code) {
          if (code.startsWith("javascript:")) {
            code = code.substring(11);
          }
          try {
            eval(code);
          } catch (e) {
            alert("Error executing code: " + e.message);
          }
        }
        break;
        
      case "2":
        let num = prompt("How Times Do You Want This Page To Show Up In your History?");
        if (num) {
          let done = false;
          let x = window.location.href;
          for (var i = 1; i <= num; i++) {
            history.pushState(0, 0, i == num ? x : i.toString());
            if (i == num) done = true;
          }
          if (done === true) {
            alert("History Flooding Successful!\n " + window.location.href + " \nNow Appears In Your History " + num + (num == 1 ? " time." : " Times."));
          }
        }
        break;
        
      case "3":
        var a = document.createElement("script");
        a.src = "https://x-ray-goggles.mouse.org/webxray.js";
        a.className = "webxray";
        a.setAttribute("data-lang", "en-US");
        a.setAttribute("data-baseuri", "https://x-ray-goggles.mouse.org");
        document.body.appendChild(a);
        break;
        
      case "4":
        if (siteScripts[currentDomain]) {
          let scriptEl = document.createElement("script");
          scriptEl.src = siteScripts[currentDomain].script;
          document.body.appendChild(scriptEl);
        }
        break;
        
      default:
        alert("Invalid option selected");
    }
  }
});
