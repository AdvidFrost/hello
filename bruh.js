/// execute_script.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
        fetch("https://raw.githubusercontent.com/rxzyx/Duolingo-Hacks/main/Answer%20Hack.js")
            .then(response => response.text())
            .then(text => {
                const script = document.createElement("script");
                script.textContent = text;
                document.body.appendChild(script);
            })
            .catch(error => console.error('Error fetching the script:', error));
    }
});
