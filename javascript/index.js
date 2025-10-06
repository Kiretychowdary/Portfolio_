import { showSidebar } from './hamburgerMenu.js';
import { typeAnimation } from './typeAnimation.js';
import { intersectionObserver } from './intersectionObserver.js';
import { parallaxHero } from './parallaxHero.js';
import { initFootballCursor } from './footballCursor.js';
import './sendEmail.js';
import './animations.js';
import { load } from "./load.js";
import { 
  initEnhancements, 
  animateSkillsOnScroll, 
  createParticles, 
  enhanceProjectCards,
  enhanceTypingEffect,
  enhanceContactForm
} from './enhancements.js';
import { 
  initAdvancedFeatures,
  initSkillBars,
  triggerConfetti,
  initKeyboardNav,
  initEasterEgg
} from './advancedFeatures.js';

async function main() {
  // Initialize awesome football cursor ⚽
  initFootballCursor();
  
  showSidebar();
  intersectionObserver();
  parallaxHero();
  
  // Initialize EmailJS - DISABLED until you add your real key
  // Get your keys from: https://dashboard.emailjs.com/admin/account
  if (typeof emailjs !== 'undefined') {
    emailjs.init('22dzY5CbDRKYlNVSI'); // Replace with your actual Public Key
  }
  
  await load();
  
  typeAnimation();
  
  // Initialize professional enhancements
  initEnhancements();
  animateSkillsOnScroll();
  createParticles();
  enhanceProjectCards();
  enhanceTypingEffect();
  enhanceContactForm();
  
  // Initialize advanced features
  initAdvancedFeatures();
  initSkillBars();
  initKeyboardNav();
  initEasterEgg();
}

main();
