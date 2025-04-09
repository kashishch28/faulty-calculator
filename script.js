let currentOperation = '+';
const mathButtons = document.querySelectorAll('.math-btn');

mathButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentOperation = button.dataset.op;
        mathButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Set + as active by default
document.querySelector('.math-btn[data-op="+"]').classList.add('active');

function faultyCalculator() {
    // Get user inputs
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    
    const isFaulty = Math.random() < 0.1; // 10% chance of being faulty(Randomly decide if we should perform the faulty operation)

    let result;

    if (isFaulty) {
     
        switch (currentOperation) {
            case '+':
                result = num1 - num2; 
                break;
            case '*':
                result = num1 + num2; 
                break;
            case '-':
                result = num1 / num2; 
                break;
            case '/':
                result = Math.pow(num1, num2); 
                break;
            default:
                result = "Invalid operator";
        }
    } else {
        
        switch (currentOperation) {
            case '+':
                result = num1 + num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Cannot divide by zero";
                }
                break;
            default:
                result = "Invalid operator";
        }
    }

    // Display the result
    document.getElementById("result").innerText = "Result: " + result;
}