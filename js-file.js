const container = document.querySelector('#container');

for (let row = 0; row < 16; row++) {
  newRow = document.createElement('div');
  newRow.style.cssText = 'display: flex; justify-items: center;'
  
  for (let col = 0; col < 16; col++) {
    newCol = document.createElement('div');
    newCol.textContent = col + 1;
    newCol.style.cssText = 'text-align: center; width: 50px; height: 50px;'
    newCol.classList.add('tile');
    newRow.appendChild(newCol);
  }
  container.appendChild(newRow);
}

const grid = document.querySelector('#container');

grid.addEventListener('mouseover', (event) => {
  event.target.classList.add('trail');
})

const button = document.querySelector('button');
let gridSize = 0;
button.addEventListener('click', () => {
  
  do {
    gridSize = prompt("Select a grid size between 1-100");
  }
  while (gridSize < 1 || gridSize > 100 || isNaN(gridSize))

  
})



