const container = document.getElementById('container');

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
