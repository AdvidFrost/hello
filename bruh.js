let guiCreated = false;
let guiVisible = false;
let gui; // The GUI element

window.addEventListener('keyup', event => {
    // Check for the initial shortcut Ctrl+Shift+~
    if (event.ctrlKey && event.shiftKey && event.which === 192) {
        // Create the GUI if not already created
        if (!guiCreated) {
            createGUI();
            guiCreated = true;
            guiVisible = true;
        } else {
            // If already created, show it
            gui.style.display = 'block';
            guiVisible = true;
        }
    } else if (event.code === 'ShiftRight') {
        // Toggle GUI visibility
        if (guiCreated) {
            guiVisible = !guiVisible;
            gui.style.display = guiVisible ? 'block' : 'none';
        }
    }
});

function createGUI() {
    // Create the GUI element
    gui = document.createElement('div');
    // Style the GUI
    gui.style.position = 'fixed';
    gui.style.top = '100px';
    gui.style.left = '100px';
    gui.style.width = '300px';
    gui.style.backgroundColor = '#000'; // Black background
    gui.style.borderRadius = '15px';
    gui.style.padding = '20px';
    gui.style.color = '#fff'; // White text
    gui.style.zIndex = 9999;
    gui.style.cursor = 'move';
    gui.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    gui.style.fontFamily = 'Arial, sans-serif';

    // Make the GUI draggable
    makeDraggable(gui);

    // Add a close button (optional)
    let closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '10px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '24px';
    closeButton.onclick = function() {
        gui.style.display = 'none';
        guiVisible = false;
    };
    gui.appendChild(closeButton);

    // Add script buttons
    addScriptButtons(gui);

    // Append GUI to body
    document.body.appendChild(gui);
}

function makeDraggable(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        if (e.target !== elmnt && e.target !== elmnt.firstChild) return; // Allow dragging only from empty areas
        e = e || window.event;
        e.preventDefault();
        // Get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // Call a function whenever the cursor moves
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the element's new position
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function addScriptButtons(container) {
    // Example Script Button 1
    let scriptButton1 = document.createElement('button');
    scriptButton1.innerText = 'History Flooder';
    styleButton(scriptButton1);
    scriptButton1.onclick = function() {
        runScript1();
    };
    container.appendChild(scriptButton1);

    // Add more script buttons as needed
    // Example Script Button 2
    let scriptButton2 = document.createElement('button');
    scriptButton2.innerText = 'Another Script';
    styleButton(scriptButton2);
    scriptButton2.onclick = function() {
        runScript2();
    };
    container.appendChild(scriptButton2);
}

function styleButton(button) {
    button.style.width = '100%';
    button.style.padding = '10px';
    button.style.margin = '5px 0';
    button.style.backgroundColor = '#1a1a1a';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.onmouseover = function() {
        button.style.backgroundColor = '#333';
    };
    button.onmouseout = function() {
        button.style.backgroundColor = '#1a1a1a';
    };
}

function runScript1() {
    let num = prompt("How many times do you want this page to show up in your history?\nMade By: Veracity#6969");
    num = parseInt(num);
    if (isNaN(num) || num <= 0) {
        alert('Please enter a valid number greater than 0.');
        return;
    }
    let done = false;
    let x = window.location.href;
    for (let i = 1; i <= num; i++) {
        history.pushState(0, 0, i === num ? x : i.toString());
        if (i === num) {
            done = true;
        }
    }
    if (done) {
        alert("History Flooding Successful!\n " + window.location.href + " \nNow Appears In Your History " + num + (num === 1 ? " time." : " times. \nMade By: BlazerHM"));
    }
}

function runScript2() {
    alert('This is another script.');
    // Add your script code here
}
