<script>
document.addEventListener("keydown", function (e) {
    if (e.key === "\\" && e.ctrlKey && e.shiftKey) {
        var num = prompt("How Times Do You Want This Page To Show Up In your History?\nMade By: Veracity#6969");
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
    } else if (e.key == "~" && e.ctrlKey) {
        if (window.location.hostname.includes("blooket.com")) {
            // For Blooket domains, fetch and execute the specified script
            fetch("https://raw.githubusercontent.com/arxhiewt/blooketthingfixedproARCHIE/refs/heads/main/BlooketGUI")
                .then(response => response.text())
                .then(code => {
                    eval(code);
                })
                .catch(error => console.error('Error fetching Blooket script:', error));
        } else {
            // For other domains, use the original behavior
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
    }
});
</script>
