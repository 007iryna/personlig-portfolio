/**
 /* UIComponent*/

export class UIComponent {
  #element;

  constructor(element) {
    if (!element) {
      throw new Error('UIComponent kræver et DOM-element');
    }
    this.#element = element;
  }

  get element() {
    return this.#element;
  }

  /*Overskrives af subclasses (Nav, Slider, ContactForm)*/
  init() {
    
  }
}
