const grid = document.querySelector('#grid');
let gridSize = 16;

function buildGrid(number) {
  for (let row = 0; row < number; row++) {
    newRow = document.createElement('div');
    newRow.classList.add('center');
    
    for (let col = 0; col < number; col++) {
      newCol = document.createElement('div');
      newCol.style.cssText = 'flex: 1; aspect-ratio: 1/1;'
      newCol.classList.add('tile');
      newRow.appendChild(newCol);
    }
    grid.appendChild(newRow);
  }

  tiles = document.querySelectorAll('.tile');
  tiles.forEach((tile) => {
    tile.addEventListener('mouseover', (event) => {
      event.target.classList.add('trail');
    })
  })
  
  return;
}

function emptyGrid() {
  var child = grid.lastElementChild;
  while (child) {
    grid.removeChild(child);
    child = grid.lastElementChild;
  }
  return;
}





const button = document.querySelector('button');

buildGrid(gridSize);

button.addEventListener('click', () => {
  
  do {
    gridSize = prompt("Select a grid size between 1-100");
  }
  while (gridSize < 1 || gridSize > 100 || isNaN(gridSize))

  emptyGrid();
  buildGrid(gridSize);
})



