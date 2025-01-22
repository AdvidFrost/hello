// execute_script.js
window.addEventListener("keyup", event => {
  // Detect Ctrl + Shift + ` (on most keyboards, ` has keycode 192)
  if (event.ctrlKey && event.shiftKey && event.which === 192) {
    // Build a base message. We'll add extra lines dynamically depending on domain.
    let message = "Choose an option:\n\n" +
                  "1) Evaluate custom JavaScript code\n" +
                  "2) Run History Flooder script\n" +
                  "3) Run Google X-Ray script";

    // Check for domain-specific scripts
    const hostname = window.location.hostname;
    let hasDomainOption = false;
    let domainOptionNumber = 4; // We'll increment this if multiple domains match

    // Duolingo.com example
    if (hostname.includes("duolingo.com")) {
      message += `\n${domainOptionNumber}) Run Auto-Duolingo script`;
      hasDomainOption = true;
      domainOptionNumber++;
    }

    // Blooket.com example
    if (hostname.includes("blooket.com")) {
      message += `\n${domainOptionNumber}) Run Blooket script`;
      hasDomainOption = true;
      domainOptionNumber++;
    }

    // Prompt the user
    let choice = prompt(message);
    if (!choice) return;  // If they hit cancel or escaped the prompt

    switch (choice) {
      case "1":
        // Evaluate custom JS
        let code = prompt("Enter your JavaScript code (you can prefix it with javascript:):");
        if (code) {
          if (code.startsWith("javascript:")) {
            code = code.substring(11);
          }
          try {
            eval(code);
          } catch (err) {
            alert("Error evaluating code:\n" + err);
          }
        }
        break;

      case "2":
        // History Flooder
        /* 
          Original script reference:
          javascript:var num=prompt("How Times Do You Want This Page To Show Up In your History?\nMade By: Veracity#6969");done=false;x=window.__cpLocation.href;for (var i=1; i<=num; i++){history.pushState(0, 0, i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert("History Flooding Successful!\n "+window.__cpLocation.href+" \nNow Appears In Your History "+num+(num==1?" time.":" Times. \nMade By: BlazerHM"))}
        */
        // We'll just run it inline:
        (function() {
          var num = prompt("How many times do you want this page to appear in your history?\nMade By: Veracity#6969");
          if (!num) return;
          var done = false;
          var x = window.location.href;
          for (var i = 1; i <= num; i++) {
            history.pushState(0, 0, i == num ? x : i.toString());
            if (i == num) {
              done = true;
            }
          }
          if (done === true) {
            alert("History Flooding Successful!\n" + window.location.href +
                  "\nNow Appears In Your History " + num +
                  (num == 1 ? " time.\n" : " times.\n") + 
                  "Made By: BlazerHM");
          }
        })();
        break;

      case "3":
        // Google X-Ray (Web X-Ray Goggles)
        (function() {
          var a = document.createElement("script");
          a.src = "https://x-ray-goggles.mouse.org/webxray.js";
          a.className = "webxray";
          a.setAttribute("data-lang", "en-US");
          a.setAttribute("data-baseuri", "https://x-ray-goggles.mouse.org");
          document.body.appendChild(a);
        })();
        break;

      default:
        // If there are domain-specific options, handle them
        if (hasDomainOption) {
          let numericChoice = parseInt(choice, 10);
          // We know 4.. etc. were appended in order
          let nextOption = 4;

          // Duolingo.com
          if (hostname.includes("duolingo.com")) {
            if (numericChoice === nextOption) {
              // Auto-Duolingo script
              (function() {
                let s = document.createElement("script");
                // The user mentioned "htps" missing a 't', so we fix it to https
                s.src = "https://github.com/mudachyo/Auto-Duolingo/raw/refs/heads/main/Auto-Duolingo.user.js";
                document.body.appendChild(s);
              })();
              break;
            }
            nextOption++;
          }

          // Blooket.com
          if (hostname.includes("blooket.com")) {
            if (numericChoice === nextOption) {
              // Blooket script
              (function() {
                let s = document.createElement("script");
                // The user mentioned "htps" missing a 't', so we fix it to https
                s.src = "https://raw.githubusercontent.com/NotCalebm/Blooket-cheats/refs/heads/main/main";
                document.body.appendChild(s);
              })();
              break;
            }
            nextOption++;
          }
        }

        // If none of the above matched, do nothing (or inform the user).
        alert("No valid option was selected for this domain.");
        break;
    }
  }
});
