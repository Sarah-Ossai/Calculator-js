//display the output 

function display(value) {
    document.getElementById('result').value += value;
}

//clear all digits and opeation on the screen 
function clearAll() {
    document.getElementById('result').value = " "
}

//backspace
function back() {
    var result = document.getElementById('result');
    var current = result.value;
    result.value = current.substring(0, current.length - 1);
}

// get the result
function calculate() {
    var p = document.getElementById('result').value;
    var q = eval(p);
    document.getElementById('result').value = q;
}