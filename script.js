let display = document.getElementById('inputbox');
let string = '';
let buttons = document.querySelectorAll('button');
let buttonsarray = Array.from(buttons);

let operators = ['+', '-', '*', '/'];

buttonsarray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == 'AC') {
            string = "";
            updateDisplay();
        }
        else if (value == 'DEL') {
            string = string.slice(0, -1);
            updateDisplay();
        }
        else if (value == '=') {
            try {
                string = eval(string);
                string = string.toString();
                updateDisplay();
            } catch {
                display.value = "Error";
                string = "";
            }
        }
        else {
            if (operators.includes(value)) {
                if (string === "") return;
                let lastChar = string.slice(-1);
                
                if (operators.includes(lastChar)) {
                    string = string.slice(0, -1) + value;
                } else {
                    string += value;
                }
            } else {
                string += value;
            }
            updateDisplay();
        }
    });
});

function updateDisplay() {
    display.value = string;
    if (string.length > 12) {
        display.style.fontSize = "20px";
    } else if (string.length > 8) {
        display.style.fontSize = "28px";
    } else {
        display.style.fontSize = "36px";
    }
}
