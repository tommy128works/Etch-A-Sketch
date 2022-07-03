const container = document.querySelector('#container');

for (let row = 0; row < 16; row++) {
  newRow = document.createElement('div');
  newRow.setAttribute('id', 'row');
  newRow.style.cssText = 'display: flex; justify-items: center;'
  
  for (let col = 0; col < 16; col++) {
    newCol = document.createElement('div');
    newCol.textContent = col + 1;
    newCol.style.cssText = 'text-align: center; width: 50px; height: 50px;'
    newRow.appendChild(newCol);
  }
  
  container.appendChild(newRow);
}




// need to put in css style code for flex
// need to set width and height in ratio (to make square)
