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
        var a = document.createElement("script");
        a.src = "https://x-ray-goggles.mouse.org/webxray.js";
        a.className = "webxray";
        a.setAttribute("data-lang", "en-US");
        a.setAttribute("data-baseuri", "https://x-ray-goggles.mouse.org");
        document.body.appendChild(a);
    }
    
    // Ctrl + Shift + 3
    else if (event.ctrlKey && event.shiftKey && event.which === 51) {
        event.preventDefault();
        window.mcbmRootURI='https://luphoria.com/MCanywhere/';
        window.mcbmScriptURI='mcbm.min.js';
        window.mcbmLang='eng';
        var s,ss=window.mcbmRootURI+'js/mcbm-load.min.js';
        s=document.createElement('script');
        s.src=ss;
        document.body.appendChild(s);
    }
    
    // Ctrl + Shift + 4
    else if (event.ctrlKey && event.shiftKey && event.which === 52) {
        event.preventDefault();
        fetch("https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeModLoader/main/src/snake-mod-loader-fbx.meta.js")
            .then(response => response.text())
            .then(text => {
                const script = document.createElement("script");
                script.textContent = text;
                document.body.appendChild(script);
            })
            .catch(error => console.error('Error fetching the Google Snake Mod Loader meta script:', error));
    }
});
