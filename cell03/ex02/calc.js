const leftInput = document.getElementById('left-val');
const rightInput = document.getElementById('right-val');
const operatorSelect = document.getElementById('operator');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function() {
    const leftVal = Number(leftInput.value);
    const rightVal = Number(rightInput.value);
    const op = operatorSelect.value;


    if (isNaN(leftVal) || isNaN(rightVal) || leftVal < 0 || rightVal < 0 || 
        !Number.isInteger(Number(leftInput.value)) || !Number.isInteger(Number(rightInput.value))) {
        alert('Error :(');
        return;
    }


    if ((op === '/' || op === '%') && rightVal === 0) {
        const msg = "It's over 9000!";
        alert(msg);
        console.log(msg);
        return;
    }


    let result;
    switch(op) {
        case '+': result = leftVal + rightVal; break;
        case '-': result = leftVal - rightVal; break;
        case '*': result = leftVal * rightVal; break;
        case '/': result = leftVal / rightVal; break;
        case '%': result = leftVal % rightVal; break;
    }

    alert(result);
    console.log(result);
});


setInterval(function() {
    alert('Please, use me...');
}, 30000);