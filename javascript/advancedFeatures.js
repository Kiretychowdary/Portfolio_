// Advanced Portfolio Features
// ===========================

/**
 * Initialize all advanced features
 */
export function initAdvancedFeatures() {
  initThemeSwitcher();
  initMagneticCursor();
  initParallaxLayers();
  initRevealAnimations();
  initSkillBars();
  initLazyLoading();
  initStatCounter();
}

// ============================================
// 1. THEME SWITCHER (Dark/Light Mode)
// ============================================

function initThemeSwitcher() {
  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Create theme toggle button if it doesn't exist
  let themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) {
    themeToggle = document.createElement('button');
    themeToggle.id = 'themeToggle';
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    themeToggle.innerHTML = `
      <i class="fas fa-moon moon-icon"></i>
      <i class="fas fa-sun sun-icon"></i>
    `;
    document.body.appendChild(themeToggle);
  }

  // Update icon based on current theme
  updateThemeIcon(currentTheme);

  // Toggle theme on click
  themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add transition effect
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  });
}

function updateThemeIcon(theme) {
  const moonIcon = document.querySelector('.moon-icon');
  const sunIcon = document.querySelector('.sun-icon');
  
  if (moonIcon && sunIcon) {
    if (theme === 'dark') {
      moonIcon.style.opacity = '0';
      sunIcon.style.opacity = '1';
    } else {
      moonIcon.style.opacity = '1';
      sunIcon.style.opacity = '0';
    }
  }
}

// ============================================
// 2. MAGNETIC CURSOR EFFECT
// ============================================

function initMagneticCursor() {
  const magneticElements = document.querySelectorAll('.btn, .social-icon, .project-link');
  
  magneticElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 50;
      
      if (distance < maxDistance) {
        const strength = (maxDistance - distance) / maxDistance;
        const moveX = x * strength * 0.3;
        const moveY = y * strength * 0.3;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      }
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(0, 0) scale(1)';
    });
  });
}

// ============================================
// 3. PARALLAX LAYERS (Multi-layer depth)
// ============================================

function initParallaxLayers() {
  const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
  
  if (parallaxElements.length === 0) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = parseFloat(element.getAttribute('data-parallax-speed')) || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// ============================================
// 4. REVEAL ANIMATIONS (Scroll-triggered)
// ============================================

function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal-animate');
  
  if (reveals.length === 0) {
    // Add class to elements if not already present
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('reveal-animate');
    });
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        
        // Add stagger effect to children
        const children = entry.target.querySelectorAll('.skill-icon, .project-card, .contact-form > *');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          }, index * 100);
        });
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal-animate').forEach(el => observer.observe(el));
}

// ============================================
// 5. INTERACTIVE SKILL BARS
// ============================================

export function initSkillBars() {
  // Add skill levels data
  const skillLevels = {
    'React': 95,
    'JavaScript': 90,
    'TypeScript': 85,
    'Node.js': 88,
    'Python': 82,
    'MongoDB': 87,
    'HTML5': 95,
    'CSS3': 92,
    'Git': 85,
    'AWS': 78,
    'GraphQL': 80,
    'Express': 88
  };
  
  const skillsContainer = document.querySelector('.skills-icons');
  if (!skillsContainer) return;
  
  const skills = skillsContainer.querySelectorAll('.skill-icon');
  
  skills.forEach(skill => {
    const skillName = skill.querySelector('p')?.textContent.trim();
    const level = skillLevels[skillName] || 75;
    
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'skill-progress-bar';
    progressBar.innerHTML = `
      <div class="skill-progress-fill" data-level="${level}"></div>
      <span class="skill-percentage">${level}%</span>
    `;
    
    skill.appendChild(progressBar);
    
    // Animate on hover
    skill.addEventListener('mouseenter', () => {
      const fill = skill.querySelector('.skill-progress-fill');
      fill.style.width = level + '%';
    });
    
    skill.addEventListener('mouseleave', () => {
      const fill = skill.querySelector('.skill-progress-fill');
      fill.style.width = '0%';
    });
  });
  
  // Animate all on scroll into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.skill-progress-fill');
        fills.forEach((fill, index) => {
          setTimeout(() => {
            fill.style.width = fill.getAttribute('data-level') + '%';
          }, index * 50);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  if (skillsContainer) observer.observe(skillsContainer);
}

// ============================================
// 6. LAZY LOADING FOR IMAGES & VIDEOS
// ============================================

function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  const lazyVideos = document.querySelectorAll('video[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
  lazyVideos.forEach(video => imageObserver.observe(video));
}

// ============================================
// 7. ANIMATED STATISTICS COUNTER
// ============================================

function initStatCounter() {
  const stats = [
    { selector: '.projects-count', target: 10, suffix: '+', label: 'Projects' },
    { selector: '.experience-count', target: 2, suffix: '+', label: 'Years' },
    { selector: '.skills-count', target: 20, suffix: '+', label: 'Skills' }
  ];
  
  // Create stats section if it doesn't exist
  let statsSection = document.querySelector('.stats-section');
  if (!statsSection) {
    statsSection = document.createElement('div');
    statsSection.className = 'stats-section';
    statsSection.innerHTML = `
      <div class="stat-item">
        <span class="stat-number projects-count">0</span>
        <span class="stat-label">Projects</span>
      </div>
      <div class="stat-item">
        <span class="stat-number experience-count">0</span>
        <span class="stat-label">Years Experience</span>
      </div>
      <div class="stat-item">
        <span class="stat-number skills-count">0</span>
        <span class="stat-label">Technologies</span>
      </div>
    `;
    
    // Insert after hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.after(statsSection);
    }
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stats.forEach(stat => {
          const element = document.querySelector(stat.selector);
          if (!element) return;
          
          animateCounter(element, 0, stat.target, 2000, stat.suffix);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  if (statsSection) observer.observe(statsSection);
}

function animateCounter(element, start, end, duration, suffix = '') {
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const current = Math.floor(progress * (end - start) + start);
    element.textContent = current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// ============================================
// 8. CONFETTI EFFECT (Success celebrations)
// ============================================

export function triggerConfetti() {
  const colors = ['#a527d6', '#57df79', '#00d4ff', '#ff6b6b', '#ffd93d'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    createConfettiPiece(colors[Math.floor(Math.random() * colors.length)]);
  }
}

function createConfettiPiece(color) {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.cssText = `
    position: fixed;
    width: 10px;
    height: 10px;
    background-color: ${color};
    left: ${Math.random() * 100}vw;
    top: -10px;
    opacity: 1;
    transform: rotate(${Math.random() * 360}deg);
    z-index: 9999;
    pointer-events: none;
  `;
  
  document.body.appendChild(confetti);
  
  const duration = 3000 + Math.random() * 2000;
  const startTime = performance.now();
  
  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = elapsed / duration;
    
    if (progress < 1) {
      confetti.style.top = (progress * 100) + 'vh';
      confetti.style.transform = `rotate(${progress * 720}deg) translateX(${Math.sin(progress * 10) * 100}px)`;
      confetti.style.opacity = 1 - progress;
      requestAnimationFrame(animate);
    } else {
      confetti.remove();
    }
  }
  
  requestAnimationFrame(animate);
}

// ============================================
// 9. KEYBOARD NAVIGATION ENHANCEMENT
// ============================================

export function initKeyboardNav() {
  const sections = ['hero', 'skills', 'projects', 'contact'];
  let currentSection = 0;
  
  document.addEventListener('keydown', (e) => {
    // Press 'n' for next section, 'p' for previous
    if (e.key === 'n' && !e.ctrlKey && !e.metaKey) {
      currentSection = (currentSection + 1) % sections.length;
      scrollToSection(sections[currentSection]);
    } else if (e.key === 'p' && !e.ctrlKey && !e.metaKey) {
      currentSection = (currentSection - 1 + sections.length) % sections.length;
      scrollToSection(sections[currentSection]);
    }
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId) || document.querySelector(`.${sectionId}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ============================================
// 10. EASTER EGG - KONAMI CODE
// ============================================

export function initEasterEgg() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;
  
  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

function activateEasterEgg() {
  triggerConfetti();
  
  const message = document.createElement('div');
  message.className = 'easter-egg-message';
  message.textContent = '🎉 You found the secret! 🎉';
  message.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    font-weight: bold;
    color: var(--primary-color);
    text-shadow: 0 0 20px var(--primary-color);
    z-index: 10000;
    animation: pulse 1s ease-in-out;
  `;
  
  document.body.appendChild(message);
  
  setTimeout(() => {
    message.remove();
  }, 3000);
}
