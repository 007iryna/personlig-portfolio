import { Slider } from './Slider.js';
import { Nav } from './Nav.js';
import { ContactForm } from './ContactForm.js';


 
document.addEventListener('DOMContentLoaded', () => {
  const sliderEl = document.getElementById('projectSlider');
  if (sliderEl) {
    new Slider(sliderEl).init();
  }

  const navEl = document.getElementById('primary-nav');
  const navToggle = document.getElementById('navToggle');
  if (navEl && navToggle) {
    new Nav(navEl, navToggle).init();
  }

  const contactFormEl = document.getElementById('contactForm');
  if (contactFormEl) {
    new ContactForm(contactFormEl).init();
  }

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
