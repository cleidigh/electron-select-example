// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var log = require('electron-log');

log.warn('Hello, renderer');

function select1(event, id) {

    log.warn('event: ' + event.keyCode);
    if (event.keyCode === 13 || event.type === 'mousedown') {
        log.warn('Enter');
        document.querySelector('#select1_optionsdiv').style.display = 'block';
        document.getElementById('select1_options').focus()
    }
    event.cancel = true;
    event.returnValue = false;

}


function select1_o(event, id) {

    if (event.keyCode === 13 || event.type === 'mouseup') {

        log.warn('Enter selected');
        i = document.getElementById('select1_options').selectedIndex
        document.querySelector('#select1_optionsdiv').style.display = 'none';
        document.getElementById('select1').focus()
        document.getElementById('select1').selectedIndex = i;
    }
    event.cancel = true;
    event.returnValue = false;

}



document.querySelector('#select1').addEventListener('keypress', function () { select1(event, this); }, false);
// document.querySelector('#select1').addEventListener('mousedown', function () { select1(event, this); }, false);

document.querySelector('#select1_options').addEventListener('keypress', function () { select1_o(event, this); }, false);
document.querySelector('#select1_options').addEventListener('mouseup', function () { select1_o(event, this); }, false);


// document.querySelector('#select1').addEventListener('click', select1,false);
document.getElementById('select1_options').selectedIndex = 0;
