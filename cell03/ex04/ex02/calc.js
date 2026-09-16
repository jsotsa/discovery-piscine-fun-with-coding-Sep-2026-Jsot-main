$(document).ready(function() {
    $('#submit-btn').click(function() {
        const left = Number($('#left-val').val());
        const right = Number($('#right-val').val());
        const op = $('#operator').val();

        if (isNaN(left) || isNaN(right) || left < 0 || right < 0) {
            alert('Error :(');
            return;
        }

        if ((op === '/' || op === '%') && right === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let res = eval(`${left} ${op} ${right}`); 
        alert(res);
        console.log(res);
    });

    setInterval(() => alert('Please, use me...'), 30000);
});