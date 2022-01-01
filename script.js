let sideLength = 16;
const container = document.querySelector('.container');

function clearContainer() {
    while(container.firstElementChild) container.removeChild(container.lastElementChild);
};

function changeColor(node, color) {
    node.style['background-color'] = color; 
};

function createGrid(length) {
    clearContainer();

    // Create the divs in the container
    for (let i = 0; i < length**2; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid-item');
        container.appendChild(div);
    };

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gritItem => 
        gritItem.addEventListener('mouseenter', function() {changeColor(this, 'blue')}));
    container.style['grid-template-columns'] = `repeat(${length}, 1fr)`;
};

function reset() {
    sideLength = prompt('Enter the numbers of squares per side: (max: 64):');
    while(sideLength > 64) sideLength = prompt('Too large! Please enter a number no larger than 64:');
    createGrid(sideLength);
};

createGrid(sideLength); // Initialize
const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', reset);