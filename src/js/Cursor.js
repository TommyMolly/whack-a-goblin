import hammerSrc from '../assets/hammer.png';

export default class Cursor {
  constructor() {
    this.cursor = document.createElement('div');
    this.cursor.classList.add('hammer-cursor');
    this.cursor.style.backgroundImage = `url(${hammerSrc})`;
    document.body.appendChild(this.cursor);

    document.addEventListener('mousemove', (e) => {
      this.cursor.style.left = `${e.pageX}px`;
      this.cursor.style.top = `${e.pageY}px`;
    });
  }
}
