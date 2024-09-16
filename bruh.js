/// execute_script.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
        (function () {
            var a = document.createElement('script');
            a.src = 'https://raw.githubusercontent.com/AdvidFrost/hello/main/hellovro.js';
            document.body.appendChild(a);
        }());
    }
});
