import { UIComponent } from './UIComponent.js';


 /*KontaKt Form*/

export class ContactForm extends UIComponent {
  #statusEl;

  constructor(element) {
    super(element);
    this.#statusEl = this.element.querySelector('.contact-form__status');
  }

  init() {
    this.element.addEventListener('submit', (event) => this.#handleSubmit(event));
  }

  #handleSubmit(event) {
    event.preventDefault();

    if (!this.element.checkValidity()) {
      this.#setStatus('Udfyld venligst alle felter korrekt.', 'error');
      return;
    }

    

    this.#setStatus('Tak for din besked! Jeg vender tilbage hurtigst muligt.', 'success');
    this.element.reset();
  }

  #setStatus(message, state) {
    if (!this.#statusEl) return;
    this.#statusEl.textContent = message;
    this.#statusEl.dataset.state = state;
  }
}
