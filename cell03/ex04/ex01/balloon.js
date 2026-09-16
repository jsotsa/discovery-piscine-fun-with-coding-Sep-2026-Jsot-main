$(document).ready(function() {
    let size = 200;
    const colors = ['red', 'green', 'blue'];
    let colorIndex = 0;

    $('#balloon').click(function() {
        size += 10;
        colorIndex = (colorIndex + 1) % 3;
        if (size > 420) {
            size = 200;
            colorIndex = 0;
        }
        $(this).css({ 'width': size, 'height': size, 'background-color': colors[colorIndex] });
    });

    $('#balloon').mouseleave(function() {
        if (size > 200) size -= 5;
        colorIndex = (colorIndex - 1 + 3) % 3;
        $(this).css({ 'width': size, 'height': size, 'background-color': colors[colorIndex] });
    });
});