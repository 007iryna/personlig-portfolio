import { UIComponent } from './UIComponent.js';


 /*Nav*/
 
export class Nav extends UIComponent {
  #toggleBtn;
  #navEl;

  constructor(navEl, toggleBtn) {
    super(navEl);
    this.#navEl = navEl;
    this.#toggleBtn = toggleBtn;
  }

  init() {
    this.#toggleBtn.addEventListener('click', () => this.toggle());

    /*Luk menuen når man klikker på et link*/
    this.#navEl.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => this.close());
    });
  }

  toggle() {
    const isOpen = this.#navEl.classList.toggle('open');
    this.#toggleBtn.classList.toggle('active', isOpen);
    this.#toggleBtn.setAttribute('aria-expanded', String(isOpen));
  }

  close() {
    this.#navEl.classList.remove('open');
    this.#toggleBtn.classList.remove('active');
    this.#toggleBtn.setAttribute('aria-expanded', 'false');
  }
}
