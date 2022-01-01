let sideLength = 16;
const container = document.querySelector('.container');

function clearContainer() {
    while(container.firstElementChild) container.removeChild(container.lastElementChild);
};

function changeColor() {
    const hue = Math.floor(Math.random()*361);
    lightness -= 10;
    if(lightness < 0) lightness = 90; // Reset lightness every 10 times
    this.style['background-color'] = 'hsl(' + hue + ',' + '100%,' + lightness + '%)'; 
};

function createGrid(length) {
    clearContainer();

    // Create the divs in the container
    for (let i = 0; i < length**2; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid-item');
        container.appendChild(div);
        div.addEventListener('mouseenter', changeColor);
    };

    // Grid layout
    container.style['grid-template-columns'] = `repeat(${length}, 1fr)`;
};

function reset() {
    sideLength = prompt('Enter the numbers of squares per side: (max: 64):');
    while(sideLength > 64) sideLength = prompt('Too large! Please enter a number no larger than 64:');
    lightness = 100;
    createGrid(sideLength);
};

 // Initialize
let lightness = 100;
createGrid(sideLength);

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', reset);