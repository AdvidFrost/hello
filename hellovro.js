/// urun.js
(function() {
    // Direct injection method
    window.addEventListener("keyup", event => {
        if (event.ctrlKey && event.which === 220) { // Ctrl + \
            try {
                const input = prompt("Enter code to evaluate or type 'flood' for history flooding:");
                if (input === 'flood') {
                    const num = prompt("How many times do you want this page to show up in your history?");
                    if (num && !isNaN(num)) {
                        historyFlood(parseInt(num));
                    } else {
                        alert("Invalid input. Please enter a number.");
                    }
                } else if (input) {
                    eval(input);
                }
            } catch (error) {
                alert("Error occurred: " + error.message);
            }
        }
    });

    // GUI method
    document.addEventListener("keydown", function (e) {
        if (e.ctrlKey && e.which === 192) { // Ctrl + `
            try {
                var t = window.open("", "_blank", "width=500,height=300");
                var e = t.document.createElement("iframe");
                e.src = "//inglan2.github.io/uRun/popup.html";
                e.style.cssText = "width:100%; height:100%; border:none;";
                t.document.body.appendChild(e);
                t.document.title = "uRun";
                t.addEventListener("message", function (e) {
                    if (e.data.toString().startsWith("execute:")) {
                        try {
                            eval(e.data.toString().replace("execute:", ""));
                            t.close();
                        } catch (error) {
                            alert("Error occurred while executing code: " + error.message);
                        }
                    }
                });
            } catch (error) {
                alert("Error occurred while opening GUI: " + error.message);
            }
        }
    });

    // History flooding function
    function historyFlood(num) {
        try {
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
        } catch (error) {
            alert("Error occurred during history flooding: " + error.message);
        }
    }
})();
