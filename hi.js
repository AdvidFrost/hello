/// execute_script.js
<script>
window.addEventListener('load', function() {
    let gui = document.createElement('div');
    gui.innerHTML = `
        <style>
            #historyFloodGUI {
                position: fixed;
                top: 20px;
                left: 20px;
                background-color: #222;
                color: #fff;
                padding: 10px;
                border-radius: 10px;
                font-family: Arial, sans-serif;
                z-index: 9999;
                user-select: none;
                display: none;
            }
            #historyFloodGUI button {
                background-color: #444;
                color: #fff;
                border: none;
                padding: 5px 10px;
                border-radius: 5px;
                cursor: pointer;
            }
            #historyFloodGUI button:hover {
                background-color: #555;
            }
        </style>
        <div id="historyFloodGUI">
            <div id="guiHeader" style="cursor: move; padding-bottom: 10px;">History Flood</div>
            <button id="floodButton">Flood History</button>
        </div>
    `;
    document.body.appendChild(gui);

    let guiElement = document.getElementById('historyFloodGUI');
    let header = document.getElementById('guiHeader');
    let isDragging = false;
    let dragOffsetX, dragOffsetY;

    header.addEventListener('mousedown', function(e) {
        isDragging = true;
        dragOffsetX = e.clientX - guiElement.offsetLeft;
        dragOffsetY = e.clientY - guiElement.offsetTop;
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            guiElement.style.left = (e.clientX - dragOffsetX) + 'px';
            guiElement.style.top = (e.clientY - dragOffsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    document.getElementById('floodButton').addEventListener('click', function() {
        var num = prompt("How many times do you want this page to show up in your history?");
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
    });

    window.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.shiftKey && event.which === 192) {
            guiElement.style.display = 'block';
        } else if (event.which === 16) { // Right Shift key
            guiElement.style.display = guiElement.style.display === 'none' ? 'block' : 'none';
        }
    });
});
</script>
