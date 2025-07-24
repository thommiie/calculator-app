const display = document.getElementById("display");

function appendtodisp(input) {
    display.value += input;

}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function cleardisplay() {

    display.value = "";
    
}

function backspace() {
    display.value = display.value.slice(0, -1);
}