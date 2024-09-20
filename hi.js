/// execute_script.js
window.addEventListener("keyup", function(event) {
    // Check for Ctrl + Shift + ~
    if (event.ctrlKey && event.shiftKey && event.key === '~') {
        // Check if GUI already exists
        if (!window.myGUI) {
            // Create the GUI overlay
            createGUI();
        } else if (window.myGUI.style.display === 'none') {
            window.myGUI.style.display = 'block';
        }
    }
});

// Function to create the GUI overlay
function createGUI() {
    // Create the overlay div
    var guiDiv = document.createElement('div');
    // Apply styles to the div
    guiDiv.style.position = 'fixed';
    guiDiv.style.top = '20px';
    guiDiv.style.left = '20px';
    guiDiv.style.width = '300px';
    guiDiv.style.height = 'auto';
    guiDiv.style.backgroundColor = 'black';
    guiDiv.style.borderRadius = '10px';
    guiDiv.style.color = 'white';
    guiDiv.style.zIndex = '100000';
    guiDiv.style.padding = '15px';
    guiDiv.style.boxSizing = 'border-box';
    guiDiv.style.cursor = 'move';

    // Add title to the GUI
    var title = document.createElement('h2');
    title.innerText = 'Script Runner';
    title.style.margin = '0 0 10px 0';
    title.style.padding = '0';
    title.style.fontSize = '20px';
    title.style.textAlign = 'center';
    guiDiv.appendChild(title);

    // Create a button to run the script
    var scriptButton = document.createElement('button');
    scriptButton.innerText = 'Run History Flooder Script';
    scriptButton.style.padding = '10px';
    scriptButton.style.width = '100%';
    scriptButton.style.border = 'none';
    scriptButton.style.borderRadius = '5px';
    scriptButton.style.backgroundColor = '#1a73e8';
    scriptButton.style.color = 'white';
    scriptButton.style.fontSize = '16px';
    scriptButton.style.cursor = 'pointer';

    // Add hover effect to the button
    scriptButton.onmouseover = function() {
        scriptButton.style.backgroundColor = '#165bb5';
    };
    scriptButton.onmouseout = function() {
        scriptButton.style.backgroundColor = '#1a73e8';
    };

    // Add click event to run the script
    scriptButton.addEventListener('click', function() {
        runScript();
    });

    // Append button to the GUI div
    guiDiv.appendChild(scriptButton);

    // Append the GUI div to the body
    document.body.appendChild(guiDiv);

    // Store the GUI div in a variable so we can hide/show it later
    window.myGUI = guiDiv;

    // Make the GUI draggable
    makeDraggable(guiDiv);

    // Add event listener for Right Shift key to hide and show the GUI
    window.addEventListener('keydown', toggleGUI);
}

// Function to make an element draggable
function makeDraggable(el) {
    var isMouseDown = false;
    var offset = [0, 0];

    el.addEventListener('mousedown', function(e) {
        isMouseDown = true;
        offset = [
            el.offsetLeft - e.clientX,
            el.offsetTop - e.clientY
        ];
        el.style.cursor = 'grabbing';
    }, true);

    document.addEventListener('mouseup', function() {
        isMouseDown = false;
        el.style.cursor = 'grab';
    }, true);

    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isMouseDown) {
            var mousePosition = {
                x : event.clientX,
                y : event.clientY
            };
            el.style.left = (mousePosition.x + offset[0]) + 'px';
            el.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}

// Function to toggle GUI visibility with Right Shift key
function toggleGUI(event) {
    if (event.key === 'Shift' && event.code === 'ShiftRight') {
        if (window.myGUI) {
            if (window.myGUI.style.display === 'none') {
                window.myGUI.style.display = 'block';
            } else {
                window.myGUI.style.display = 'none';
            }
        }
    }
}

// Function to run the script
function runScript() {
    var num = prompt("How many times do you want this page to show up in your history?\nMade By: Veracity#6969");
    var done = false;
    var x = window.location.href;
    num = parseInt(num);
    if (isNaN(num) || num <= 0) {
        alert("Please enter a valid number.");
        return;
    }
    for (var i = 1; i <= num; i++) {
        history.pushState(0, 0, i == num ? x : i.toString());
        if (i == num) {
            done = true;
        }
    }
    if (done === true) {
        alert("History Flooding Successful!\n " + window.location.href + " \nNow appears in your history " + num + (num == 1 ? " time." : " times.\nMade By: BlazerHM"));
    }
}
