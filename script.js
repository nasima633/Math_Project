// Get the calculator display
const display = document.getElementById("display");

// Get all buttons
const buttons = document.querySelectorAll(".button");

// Calculator variables
let firstNumber = "";
let operator = "";
let secondNumber = "";


// Add click event to every button
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const value = button.textContent;


        // Clear
        if (button.id === "clear") {
            display.value = "";
            firstNumber = "";
            secondNumber = "";
            operator = "";
        }


        // Numbers
        else if (button.classList.contains("number")) {

            if (operator === "") {
                firstNumber += value;
                display.value = firstNumber;
            } 
            else {
                secondNumber += value;
                display.value = secondNumber;
            }
        }


        // Decimal
        else if (button.classList.contains("decimal")) {

            if (operator === "") {

                if (!firstNumber.includes(".")) {
                    firstNumber += ".";
                    display.value = firstNumber;
                }

            } 
            else {

                if (!secondNumber.includes(".")) {
                    secondNumber += ".";
                    display.value = secondNumber;
                }

            }
        }


        // Operators
        else if (button.classList.contains("operator")) {

            if (value === "=") {

                if (firstNumber !== "" && operator !== "" && secondNumber !== "") {

                    const number1 = parseFloat(firstNumber);
                    const number2 = parseFloat(secondNumber);

                    let result;


                    if (operator === "+") {
                        result = number1 + number2;
                    }

                    else if (operator === "−") {
                        result = number1 - number2;
                    }

                    else if (operator === "×") {
                        result = number1 * number2;
                    }

                    else if (operator === "÷") {

                        if (number2 === 0) {
                            display.value = "Error";

                            firstNumber = "";
                            secondNumber = "";
                            operator = "";

                            return;
                        }

                        result = number1 / number2;
                    }


                    display.value = result;

                    firstNumber = result.toString();
                    secondNumber = "";
                    operator = "";
                }

            } 
            else {

                if (firstNumber !== "") {
                    operator = value;
                }

            }
        }


        // Percentage
        else if (button.id === "percent") {

            if (operator === "") {

                if (firstNumber !== "") {
                    firstNumber = (parseFloat(firstNumber) / 100).toString();
                    display.value = firstNumber;
                }

            } 
            else {

                if (secondNumber !== "") {
                    secondNumber = (parseFloat(secondNumber) / 100).toString();
                    display.value = secondNumber;
                }

            }
        }


        // Positive / Negative
        else if (button.id === "sign") {

            if (operator === "") {

                if (firstNumber !== "") {
                    firstNumber = (parseFloat(firstNumber) * -1).toString();
                    display.value = firstNumber;
                }

            } 
            else {

                if (secondNumber !== "") {
                    secondNumber = (parseFloat(secondNumber) * -1).toString();
                    display.value = secondNumber;
                }

            }
        }

    });

});