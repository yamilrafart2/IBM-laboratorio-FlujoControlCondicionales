/**
 * Definiendo variables
 */
    
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let resultSuma = suma(num1, num2);
        let resultMultiplicacion = multiply(num1, num2);
        let resultDivision = division(num1, num2);

        // Display the result
        displayResult(resultSuma, resultMultiplicacion, resultDivision);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function suma(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Suma the numbers
    return a + b;
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function division(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Division the numbers
    return a / b;
}

function displayResult(resultSuma, resultMultiplicacion, resultDivision) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `El resultado de la suma es: ${resultSuma}<br>
                           El resultado de la multiplicación es: ${resultMultiplicacion}<br>
                           El resultado de la división es: ${resultDivision}`;
}
        