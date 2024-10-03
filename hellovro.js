/// urun.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
        fetch("https://raw.githubusercontent.com/THEDESTROYER6667/Boomlearning-Cheat-GUI/main/cheat.js")
            .then(response => response.text())
            .then(code => {
                const Cheat = new Function(code);
                Cheat();
            });
    }
});
