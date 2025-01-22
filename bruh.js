/// execute_script.js

// Script storage
let scripts = JSON.parse(localStorage.getItem('scripts')) || {};

// Function to save scripts to local storage
function saveScripts() {
  localStorage.setItem('scripts', JSON.stringify(scripts));
}

// Function to add a script
function addScript(name, code) {
  scripts[name] = code;
  saveScripts();
}

// Function to remove a script
function removeScript(name) {
  delete scripts[name];
  saveScripts();
}

// Function to edit a script
function editScript(name, code) {
  scripts[name] = code;
  saveScripts();
}

// Function to run a script
function runScript(code) {
  eval(code);
}

// Create UI
function createUI() {
  let ui = document.createElement('div');
  ui.style.position = 'fixed';
  ui.style.top = '0px';
  ui.style.right = '0px';
  ui.style.width = '300px';
  ui.style.height = '200px';
  ui.style.background = 'white';
  ui.style.border = '1px solid black';
  ui.style.padding = '10px';
  ui.style.overflow = 'auto';
  ui.style.zIndex = '1000';

  let scriptList = document.createElement('ul');
  ui.appendChild(scriptList);

  // Populate script list
  for (let script in scripts) {
    let scriptItem = document.createElement('li');
    scriptItem.textContent = script;
    scriptList.appendChild(scriptItem);

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
      let newCode = prompt('Enter new code for script "' + script + '":', scripts[script]);
      if (newCode) {
        editScript(script, newCode);
      }
    };
    scriptItem.appendChild(editButton);

    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
      if (confirm('Are you sure you want to remove script "' + script + '"?')) {
        removeScript(script);
        scriptItem.remove();
      }
    };
    scriptItem.appendChild(removeButton);
  }

  let addButton = document.createElement('button');
  addButton.textContent = 'Add Script';
  addButton.onclick = function() {
    let name = prompt('Enter script name:');
    let code = prompt('Enter script code:');
    if (name && code) {
      addScript(name, code);
      let scriptItem = document.createElement('li');
      scriptItem.textContent = name;
      scriptList.appendChild(scriptItem);

      let editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.onclick = function() {
        let newCode = prompt('Enter new code for script "' + name + '":', scripts[name]);
        if (newCode) {
          editScript(name, newCode);
        }
      };
      scriptItem.appendChild(editButton);

      let removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = function() {
        if (confirm('Are you sure you want to remove script "' + name + '"?')) {
          removeScript(name);
          scriptItem.remove();
        }
      };
      scriptItem.appendChild(removeButton);
    }
  };
  ui.appendChild(addButton);

  let runButton = document.createElement('button');
  runButton.textContent = 'Run Scripts';
  runButton.onclick = function() {
    for (let script in scripts) {
      runScript(scripts[script]);
    }
  };
  ui.appendChild(runButton);

  let preloadedScriptsTab = document.createElement('button');
  preloadedScriptsTab.textContent = 'Preloaded Scripts';
  preloadedScriptsTab.onclick = function() {
    let preloadedScriptsUI = document.createElement('div');
    preloadedScriptsUI.style.position = 'fixed';
    preloadedScriptsUI.style.top = '0px';
    preloadedScriptsUI.style.right = '0px';
    preloadedScriptsUI.style.width = '300px';
    preloadedScriptsUI.style.height = '200px';
    preloadedScriptsUI.style.background = 'white';
    preloadedScriptsUI.style.border = '1px solid black';
    preloadedScriptsUI.style.padding = '10px';
    preloadedScriptsUI.style.overflow = 'auto';
    preloadedScriptsUI.style.zIndex = '1001';

    let historyFloodButton = document.createElement('button');
    historyFloodButton.textContent = 'History Flood';
    historyFloodButton.onclick = function() {
      let num = prompt('How many times do you want this page to show up in your history?');
      let done = false;
      let x = window.location.href;
      for (let i = 1; i <= num; i++) {
        history.pushState(0, 0, i == num ? x : i.toString());
        if (i == num) {
          done = true;
        }
      }
      if (done) {
        alert('History flooding successful!');
      }
    };
    preloadedScriptsUI.appendChild(historyFloodButton);

    document.body.appendChild(preloadedScriptsUI);
  };
  ui.appendChild(preloadedScriptsTab);

  document.body.appendChild(ui);
}

// Run scripts on page load
for (let script in scripts) {
  runScript(scripts[script]);
}

// Create UI when key combination is pressed
window.addEventListener('keyup', event => {
  if (event.ctrlKey && event.shiftKey && event.which === 192) {
    createUI();
  }
});
