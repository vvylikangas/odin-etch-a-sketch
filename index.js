const container = document.getElementById('container');

function changeGrid() {
  let newGridSize = prompt('Enter a new grid size between 1 and 100: ');
  newGridSize = Number(newGridSize);
  if (isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100) {
    alert('Grid size must be a number between 1 and 100!');
    return;
  }
  container.innerHTML = '';
  createSquares(newGridSize);
}

function changeSquareColor(event) {
  // Generate random rgb color
  let randIndex = () => {
    return parseInt(Math.floor(Math.random() * 255) + 1);
  };
  let g = randIndex();
  let r = randIndex();
  let b = randIndex();
  let rgb = `rgb(${r}, ${g}, ${b})`;
  event.target.style.backgroundColor = rgb;

  // Set opacity as 0.1 and increase opacity by 0.1 on each hover
  let currentOpacity = parseFloat(event.target.style.opacity) || 0.1;
  if (currentOpacity < 1) {
    event.target.style.opacity = currentOpacity + 0.1;
  }
}

function createSquares(gridSize) {
  const maxGridSize = 800;
  const squareSize = maxGridSize / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', 'square');
    square.addEventListener('mouseover', changeSquareColor);
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
}

createSquares(16);
