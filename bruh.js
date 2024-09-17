/// execute_script.js
window.addEventListener("keydown", event => {
    // Ctrl + Shift + `
    if (event.ctrlKey && event.shiftKey && event.which === 192) {
        event.preventDefault();
        fetch("https://raw.githubusercontent.com/xploitspeeds/Bookmarklet-Hacks-For-School/main/Quizlet%20Hack%20Bookmarklet")
            .then(response => response.text())
            .then(text => {
                const script = document.createElement("script");
                script.textContent = text;
                document.body.appendChild(script);
            })
            .catch(error => console.error('Error fetching the Quizlet Hack script:', error));
    }
    
    // Ctrl + Shift + 1
    else if (event.ctrlKey && event.shiftKey && event.which === 49) {
        event.preventDefault();
        const youtubeScript = `
            var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
            (function(){if(0!==document.querySelector("#player-unavailable").getBoundingClientRect().width){var a=window.location.toString();a=a.replace("youtube","youpak");a=a.replace("/watch","/embed");a+="&autoplay=true";for(var b=$jscomp.makeIterator(document.querySelectorAll("#player-unavailable > *")),c=b.next();!c.done;c=b.next())c.value.remove();document.querySelector("#player-unavailable").insertAdjacentHTML("afterbegin",'<iframe style="width: 100%; height: 100%" src="'+a.toString()+'" frameborder="0" allowfullscreen></iframe>')}})();
        `;
        const script = document.createElement("script");
        script.textContent = youtubeScript;
        document.body.appendChild(script);
    }
    
    // Ctrl + Shift + 2
    else if (event.ctrlKey && event.shiftKey && event.which === 50) {
        event.preventDefault();
        alert("Placeholder for Ctrl + Shift + 2");
    }
    
    // Ctrl + Shift + 3
    else if (event.ctrlKey && event.shiftKey && event.which === 51) {
        event.preventDefault();
        alert("Placeholder for Ctrl + Shift + 3");
    }
});
