export class Canvas {
  constructor(el, width, height) {
    this.el = el;
    this.ctx = el.getContext('2d');
    
    // Style
    this.width = width;
    this.height = height;

    // Size
    this.size();
  }

  size() {
    // this.width = window.innerWidth;
    // this.height = window.innerHeight;
    this.el.style.width = `${this.width}px`;
    this.el.style.height = `${this.height}px`;

    // Set actual size in memory (scaled to account for extra pixel density).
    const scale = window.devicePixelRatio;
    this.el.width = this.width * scale;
    this.el.height = this.height * scale;

    // Normalize coordinate system to use css pixels.
    this.ctx.scale(scale, scale);
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
    this.size();
  }
}