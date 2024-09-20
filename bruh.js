/// execute_script.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
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
    }
});
