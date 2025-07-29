import goblinSrc from '../assets/goblin.png';

export default class Goblin {
  constructor(cells) {
    this.cells = cells;
    this.currentIndex = -1;
    this.img = document.createElement('img');
    this.img.src = goblinSrc;
    this.img.classList.add('goblin');
    this.img.draggable = false;

    this.onHit = null;

    this.img.addEventListener('click', () => {
      if (this.onHit) this.onHit();
    });
  }

  move() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.cells.length);
    } while (newIndex === this.currentIndex);

    this.cells[newIndex].appendChild(this.img);
    this.currentIndex = newIndex;
  }

  remove() {
    if (this.img.parentElement) {
      this.img.parentElement.removeChild(this.img);
    }
  }
}
