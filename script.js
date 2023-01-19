function clearContainer() {
  // Clear the colors inside the sketch container 
  const elements = sketchContainer.querySelectorAll('.grid-item');
  elements.forEach(element => element.style.removeProperty('background-color'));
};

function changeColor() {
  const hue = Math.floor(Math.random()*361);
  lightness -= 10;
  if(lightness < 0) lightness = 90; // Reset lightness every 10 times
  this.style['background-color'] = 'hsl(' + hue + ',' + '100%,' + lightness + '%)'; 
};

function createGrid(length) {
  // Delete the grid items of the sketch container
  while(sketchContainer.firstElementChild) sketchContainer.removeChild(sketchContainer.lastElementChild);

    // Create the divs in the sketchContainer
  for (let i = 0; i < length**2; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'grid-item');
    sketchContainer.appendChild(div);
    div.addEventListener('mouseenter', changeColor);
  };

    // Grid layout
  sketchContainer.style['grid-template-columns'] = `repeat(${length}, 1fr)`;
};

function reset() {
  newLength = prompt('Enter the numbers of squares per side: (max: 64):');
  while(newLength > 64) newLength = prompt('Too large! Please enter a number no larger than 64:');
  lightness = 100;
  if(!newLength) return;
  sideLength = newLength;
  createGrid(sideLength);
};

 // Initialize
let lightness = 100;
let sideLength = 16;
const sketchContainer = document.querySelector('#sketch-container');
const resetBtn = document.querySelector('#reset-btn');
const clearBtn = document.querySelector('#clear-btn');

createGrid(sideLength);
resetBtn.addEventListener('click', reset);
clearBtn.addEventListener('click', clearContainer);