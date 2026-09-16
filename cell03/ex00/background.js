const button = document.getElementById('color-btn');
const text = document.getElementById('color-text');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    text.innerText = `Color: ${newColor}`;
});