import { UIComponent } from './UIComponent.js';


 /* Slider*/

export class Slider extends UIComponent {
  #slides;
  #dotsContainer;
  #currentIndex = 0;

  constructor(element) {
    super(element);
    this.#slides = [...this.element.querySelectorAll('.slider__slide')];
    this.#dotsContainer = this.element.querySelector('.slider__dots');
  }

  init() {
    this.#buildDots();
    this.#bindControl('.slider__nav--prev', () => this.previous());
    this.#bindControl('.slider__nav--next', () => this.next());
    this.#update();
  }

  next() {
    this.#goTo(this.#currentIndex + 1);
  }

  previous() {
    this.#goTo(this.#currentIndex - 1);
  }

  goTo(index) {
    this.#goTo(index);
  }

  

  #goTo(index) {
    const total = this.#slides.length;
    this.#currentIndex = (index + total) % total; 
    this.#update();
  }

  #update() {
    this.#slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === this.#currentIndex);
    });

    if (this.#dotsContainer) {
      [...this.#dotsContainer.children].forEach((dot, i) => {
        dot.classList.toggle('is-active', i === this.#currentIndex);
        dot.setAttribute('aria-selected', String(i === this.#currentIndex));
      });
    }
  }

  #buildDots() {
    if (!this.#dotsContainer) return;

    this.#dotsContainer.innerHTML = '';
    this.#slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'slider__dot';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Vis projekt ${i + 1}`);
      dot.addEventListener('click', () => this.goTo(i));
      this.#dotsContainer.appendChild(dot);
    });
  }

  #bindControl(selector, handler) {
    const btn = this.element.querySelector(selector);
    if (btn) btn.addEventListener('click', handler);
  }
}
