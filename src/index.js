import './styles.css';
import goblin from './assets/goblin.png';

const field = document.getElementById('game-field');
const size = 4;
const totalCells = size * size;


const cells = [];
for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  field.appendChild(cell);
  cells.push(cell);
}


const goblinImg = document.createElement('img');
goblinImg.src = goblin;


let currentIndex = -1;

function moveGoblin() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * totalCells);
  } while (newIndex === currentIndex);

  cells[newIndex].appendChild(goblinImg); 
  currentIndex = newIndex;
}

moveGoblin();
setInterval(moveGoblin, 1000);
