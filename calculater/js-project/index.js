const screen = document.getElementById("calculator-screen");
        let currentInput = "";
        let currentOperator = "";
        let currentResult = 0;

        function updateScreen() {
            screen.textContent = currentInput;
        }

        function clear() {
            currentInput = "";
            currentOperator = "";
            currentResult = 0;
            updateScreen();
        }

        function backspace() {
            currentInput = currentInput.slice(0, -1);
            updateScreen();
        }

        function appendNumber(number) {
            currentInput += number;
            updateScreen();
        }

        function setOperator(operator) {
            if (currentOperator !== "") {
                calculate();
            }
            currentResult = parseFloat(currentInput);
            currentInput = "";
            currentOperator = operator;
        }

        function calculate() {
            const number = parseFloat(currentInput);
            switch (currentOperator) {
                case "+":
                    currentResult += number;
                    break;
                case "-":
                    currentResult -= number;
                    break;
                case "×":
                    currentResult *= number;
                    break;
                case "÷":
                    if (number === 0) {
                        clear();
                        screen.textContent = "Error";
                        return;
                    }
                    currentResult /= number;
                    break;
            }
            currentInput = currentResult.toString();
            currentOperator = "";
            updateScreen();
        }

        document.querySelectorAll(".font").forEach(button => {
            button.addEventListener("click", () => {
                const buttonText = button.textContent;
                if (/^[0-9]$/.test(buttonText)) {
                    appendNumber(buttonText);
                } else if (buttonText === "C") {
                    clear();
                } else if (buttonText === "←") {
                    backspace();
                } else if (/[+\-×÷]/.test(buttonText)) {
                    setOperator(buttonText);
                } else if (buttonText === "=") {
                    calculate();
                }
            });
        });