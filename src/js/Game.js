import Goblin from './Goblin';
import Cursor from './Cursor';

export default class Game {
  constructor(containerId, size = 4) {
    this.container = document.getElementById(containerId);
    this.size = size;
    this.cells = [];
    this.score = 0;
    this.misses = 0;
    this.maxMisses = 5;

    this.createGrid();
    this.goblin = new Goblin(this.cells);
    this.goblin.onHit = this.hit.bind(this);

    new Cursor();

    this.start();
  }

  createGrid() {
    for (let i = 0; i < this.size * this.size; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.container.appendChild(cell);
      this.cells.push(cell);
    }
  }

  start() {
    this.interval = setInterval(() => {
      this.goblin.remove();
      this.goblin.move();

      this.misses++;
      if (this.misses >= this.maxMisses) {
        this.endGame();
      }
    }, 1000);
  }

  hit() {
    this.score++;
    this.misses = 0;
    this.goblin.remove();
    console.log(`Score: ${this.score}`);
  }

  endGame() {
    clearInterval(this.interval);
    this.goblin.remove();
    alert(`Игра окончена! Ваш счёт: ${this.score}`);
  }
}
