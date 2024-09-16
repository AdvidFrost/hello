/// execute_script.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
        (function(){
            if (location.hostname == "docs.google.com") {
                document.body.innerHTML = document.body.innerHTML.replace("Locked mode is on", "Are you ready to turn off extensions?");
                document.body.innerHTML = document.body.innerHTML.replace("You have already opened and closed this quiz. Opening this quiz again will notify the form owner by email.", "This will reload all tabs in your browser");
                var button = document.getElementById('mG61Hd');
                if (button) {
                    button.innerHTML = button.innerHTML.replace("Start Quiz", "Disable Extensions");
                    button.addEventListener('click', function(event){
                        window.close();
                    });
                }
            } else {
                window.open("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdrQ6wdxPYhHvxt2j4E_lf7K7yt9VD7mMtKm7E9dDOLKhntmw/startquiz");
            }
        })();
    }
});
