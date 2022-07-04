const container = document.querySelector('#container');

for (let row = 0; row < 16; row++) {
  newRow = document.createElement('div');
  newRow.style.cssText = 'display: flex; justify-items: center;'
  
  for (let col = 0; col < 16; col++) {
    newCol = document.createElement('div');
    newCol.textContent = col + 1;
    newCol.style.cssText = 'text-align: center; width: 50px; height: 50px;'
    newCol.classList.add('tile');
    // newCol.addEventListener('mouseover', () => {
    //   newCol.classList.add('trail');
    // })
    newRow.appendChild(newCol);
  }
  container.appendChild(newRow);
}

const grid = document.querySelector('#container');

grid.addEventListener('mouseover', (event) => {
  event.target.classList.add('trail');
})




