/// execute_script.js

(function() {
    var guiInitialized = false;
    var guiVisible = false;
    var guiElement;

    window.addEventListener('keyup', function(event) {
        if (event.ctrlKey && event.key === '`') {
            // Open or show the GUI overlay
            showGUI();
        } else if (event.code === 'ShiftRight') {
            // Toggle the visibility of the GUI
            toggleGUI();
        }
    });

    function showGUI() {
        if (!guiInitialized) {
            // Create the GUI
            createGUI();
            guiInitialized = true;
        }
        // Show the GUI
        guiElement.style.display = 'block';
        guiVisible = true;
    }

    function toggleGUI() {
        if (guiInitialized) {
            if (guiVisible) {
                guiElement.style.display = 'none';
                guiVisible = false;
            } else {
                guiElement.style.display = 'block';
                guiVisible = true;
            }
        }
    }

    function createGUI() {
        guiElement = document.createElement('div');
        guiElement.id = 'myCustomGUI';
        guiElement.style.position = 'fixed';
        guiElement.style.top = '100px';
        guiElement.style.left = '100px';
        guiElement.style.width = '300px';
        guiElement.style.backgroundColor = '#333';
        guiElement.style.borderRadius = '10px';
        guiElement.style.zIndex = '10000';
        guiElement.style.color = 'white';
        guiElement.style.fontFamily = 'Arial, sans-serif';
        guiElement.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        guiElement.style.padding = '0px';
        guiElement.style.display = 'none';
        // Allow it to be draggable
        makeElementDraggable(guiElement);
        // Add content to the GUI
        addGUIContent(guiElement);
        // Add the GUI to the document body
        document.body.appendChild(guiElement);
    }

    function addGUIContent(gui) {
        var header = document.createElement('div');
        header.style.cursor = 'move';
        header.style.padding = '10px';
        header.style.fontSize = '16px';
        header.style.fontWeight = 'bold';
        header.style.backgroundColor = '#444';
        header.style.borderTopLeftRadius = '10px';
        header.style.borderTopRightRadius = '10px';
        header.innerText = 'Custom Scripts';
        gui.appendChild(header);

        var content = document.createElement('div');
        content.style.padding = '10px';

        var button = document.createElement('button');
        button.innerText = 'Run History Flooding Script';
        button.style.width = '100%';
        button.style.padding = '10px';
        button.style.marginTop = '10px';
        button.style.backgroundColor = '#555';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = '#666';
        });
        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#555';
        });
        button.addEventListener('click', function() {
            runHistoryFloodingScript();
        });
        content.appendChild(button);
        gui.appendChild(content);
    }

    function runHistoryFloodingScript() {
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

    function makeElementDraggable(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        var header = elmnt.firstChild;
        if (header) {
            // if present, the header is where you move the DIV from
            header.onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
})();
