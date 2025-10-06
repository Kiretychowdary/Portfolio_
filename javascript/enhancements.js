// Professional Enhancements for Portfolio

export function initEnhancements() {
  // Scroll Progress Indicator
  initScrollProgress();
  
  // Back to Top Button
  initBackToTop();
  
  // Smooth Scroll for all links
  initSmoothScroll();
  
  // Add gradient text effect to headings
  addGradientText();
}

// Scroll Progress Indicator
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  
  if (!progressBar) return;
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// Back to Top Button
function initBackToTop() {
  const backToTopButton = document.getElementById('backToTop');
  
  if (!backToTopButton) return;
  
  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  // Scroll to top on click
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Don't prevent default if it's just "#"
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed nav
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Add gradient text effect to specific headings
function addGradientText() {
  const headings = document.querySelectorAll('.projects__heading, .skills__heading, .contact__heading');
  
  headings.forEach(heading => {
    if (!heading.classList.contains('gradient-text')) {
      heading.classList.add('gradient-text');
    }
  });
}

// Animate skill icons on scroll into view
export function animateSkillsOnScroll() {
  const skillIcons = document.querySelectorAll('.all-skills__icon');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.animation = `fadeInUp 0.6s ease forwards`;
        }, index * 50); // Stagger animation
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  skillIcons.forEach(icon => {
    observer.observe(icon);
  });
}

// Add floating particles effect
export function createParticles() {
  const container = document.querySelector('.landing');
  if (!container) return;
  
  const particleCount = 20;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 4 + 2;
    const startX = Math.random() * window.innerWidth;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 15;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${startX}px`;
    particle.style.bottom = '0';
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.background = `rgba(165, 39, 214, 0.${Math.floor(Math.random() * 5) + 3})`;
    
    container.appendChild(particle);
  }
}

// Enhanced project card hover effects
export function enhanceProjectCards() {
  const projectCards = document.querySelectorAll('.projects__project');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(165, 39, 214, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
}

// Typing effect enhancement
export function enhanceTypingEffect() {
  const typed = document.getElementById('typed');
  
  if (typed) {
    // Add glow effect on typing
    typed.style.textShadow = '0 0 20px rgba(165, 39, 214, 0.5)';
  }
}

// Form validation enhancement
export function enhanceContactForm() {
  const form = document.getElementById('sendForm');
  if (!form) return;
  
  const inputs = form.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement.classList.remove('focused');
      }
    });
    
    // Real-time validation
    input.addEventListener('input', function() {
      if (this.validity.valid) {
        this.style.borderColor = 'var(--secondary-color)';
      } else if (this.value) {
        this.style.borderColor = '#ff4444';
      }
    });
  });
}

// Add CSS fade-in animation for skills
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
