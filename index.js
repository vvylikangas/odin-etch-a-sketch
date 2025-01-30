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
  event.target.style.backgroundColor = 'grey';
}

function createSquares(gridSize) {
  const maxGridSize = 1200;
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
