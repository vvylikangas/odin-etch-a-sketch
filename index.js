const container = document.getElementById('container');

function createSquares(gridSize) {
  const maxGridSize = 1200;
  const squareSize = maxGridSize / gridSize;
  // container.style.width = `${maxGridSize}px`;
  // container.style.heigth = `${maxGridSize}px`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', 'square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
}

createSquares(16);
