/**
 * Enhanced Hero Section
 * Adds particles background, social proof badges, and scroll indicator
 */

export function initEnhancedHero() {
  createHeroParticles();
  createSocialProofBadges();
  createScrollIndicator();
  initHeroAnimations();
}

function createHeroParticles() {
  const heroSection = document.querySelector('.hero');
  
  if (!heroSection) return;
  
  // Create particles container
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'hero__particles';
  heroSection.insertBefore(particlesContainer, heroSection.firstChild);
  
  // Generate particles
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'hero__particle';
    
    // Random size between 2-6px
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration and delay
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 5;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.3;
    
    particlesContainer.appendChild(particle);
  }
}

function createSocialProofBadges() {
  const heroContent = document.querySelector('.hero__content');
  
  if (!heroContent) return;
  
  // Create badges container
  const badgesContainer = document.createElement('div');
  badgesContainer.className = 'hero__badges';
  
  // Fetch GitHub stats
  fetchGitHubStats().then(stats => {
    badgesContainer.innerHTML = `
      <div class="hero__badge hero__badge--experience">
        <i class="fas fa-calendar-check"></i>
        <div class="hero__badge-content">
          <span class="hero__badge-value" data-years="2">0</span>
          <span class="hero__badge-label">Years Experience</span>
        </div>
      </div>
      
      <div class="hero__badge hero__badge--projects">
        <i class="fas fa-code-branch"></i>
        <div class="hero__badge-content">
          <span class="hero__badge-value" data-projects="15">0</span>
          <span class="hero__badge-label">Projects Completed</span>
        </div>
      </div>
      
      <div class="hero__badge hero__badge--github">
        <i class="fab fa-github"></i>
        <div class="hero__badge-content">
          <span class="hero__badge-value" data-repos="${stats.repos}">0</span>
          <span class="hero__badge-label">GitHub Repos</span>
        </div>
      </div>
      
      <div class="hero__badge hero__badge--availability">
        <i class="fas fa-circle hero__badge-status-dot"></i>
        <div class="hero__badge-content">
          <span class="hero__badge-value">Available</span>
          <span class="hero__badge-label">For Opportunities</span>
        </div>
      </div>
    `;
    
    // Insert after hero title or subtitle
    const heroSubtitle = document.querySelector('.hero__subtitle');
    if (heroSubtitle && heroSubtitle.parentNode) {
      heroSubtitle.parentNode.insertBefore(badgesContainer, heroSubtitle.nextSibling);
    } else {
      heroContent.appendChild(badgesContainer);
    }
    
    // Animate badge counters
    animateBadgeCounters();
  });
}

async function fetchGitHubStats() {
  try {
    const username = 'Kiretychowdary';
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    
    return {
      repos: data.public_repos || 15,
      followers: data.followers || 0
    };
  } catch (error) {
    console.log('GitHub stats fetch failed, using defaults');
    return {
      repos: 15,
      followers: 0
    };
  }
}

function animateBadgeCounters() {
  const badges = document.querySelectorAll('.hero__badge-value[data-years], .hero__badge-value[data-projects], .hero__badge-value[data-repos]');
  
  badges.forEach(badge => {
    const target = parseInt(badge.getAttribute('data-years') || badge.getAttribute('data-projects') || badge.getAttribute('data-repos'));
    
    if (isNaN(target)) return;
    
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const counter = setInterval(() => {
      current += increment;
      
      if (current >= target) {
        badge.textContent = target + '+';
        clearInterval(counter);
      } else {
        badge.textContent = Math.ceil(current);
      }
    }, stepTime);
  });
}

function createScrollIndicator() {
  const heroSection = document.querySelector('.hero');
  
  if (!heroSection) return;
  
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'hero__scroll-indicator';
  scrollIndicator.innerHTML = `
    <div class="hero__scroll-text">Scroll Down</div>
    <div class="hero__scroll-arrow">
      <i class="fas fa-chevron-down"></i>
    </div>
  `;
  
  heroSection.appendChild(scrollIndicator);
  
  // Add click handler to scroll to next section
  scrollIndicator.addEventListener('click', () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  // Hide indicator when scrolling
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollIndicator.style.opacity = '0';
    } else {
      scrollIndicator.style.opacity = '1';
    }
  });
}

function initHeroAnimations() {
  const hero = document.querySelector('.hero');
  
  if (!hero) return;
  
  // Parallax effect for hero background
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroHeight = hero.offsetHeight;
    
    if (scrolled < heroHeight) {
      const parallaxSpeed = 0.5;
      hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      
      // Fade out hero content as user scrolls
      const opacity = 1 - (scrolled / heroHeight) * 1.5;
      const heroContent = hero.querySelector('.hero__content');
      if (heroContent) {
        heroContent.style.opacity = Math.max(0, opacity);
      }
    }
  });
  
  // Add floating animation to astronaut image
  const astronaut = document.querySelector('.hero__astronaut, .hero__image');
  if (astronaut) {
    astronaut.style.animation = 'float 6s ease-in-out infinite';
  }
}

// CSS for hero particles will be added via JavaScript
const heroParticlesStyle = document.createElement('style');
heroParticlesStyle.textContent = `
  .hero__particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 1;
  }
  
  .hero__particle {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(0, 255, 255, 0.8), rgba(255, 0, 255, 0.8));
    animation: particleFloat linear infinite;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }
  
  @keyframes particleFloat {
    0% {
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) translateX(50px);
      opacity: 0;
    }
  }
  
  .hero__badges {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    position: relative;
    z-index: 10;
  }
  
  .hero__badge {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 1.5rem;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    transition: all 0.3s ease;
    animation: fadeInUp 0.6s ease forwards;
    opacity: 0;
  }
  
  .hero__badge:nth-child(1) { animation-delay: 0.2s; }
  .hero__badge:nth-child(2) { animation-delay: 0.4s; }
  .hero__badge:nth-child(3) { animation-delay: 0.6s; }
  .hero__badge:nth-child(4) { animation-delay: 0.8s; }
  
  .hero__badge:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 255, 0.4);
    box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
  }
  
  .hero__badge i {
    font-size: 1.8rem;
    color: #00ffff;
    width: 40px;
    text-align: center;
  }
  
  .hero__badge--availability i.hero__badge-status-dot {
    font-size: 0.8rem;
    color: #00ff00;
    animation: blink 2s ease-in-out infinite;
  }
  
  .hero__badge-content {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  
  .hero__badge-value {
    font-size: 1.4rem;
    font-weight: 700;
    color: #ffffff;
    font-family: 'Courier New', monospace;
  }
  
  .hero__badge-label {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .hero__scroll-indicator {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
  }
  
  .hero__scroll-indicator:hover {
    transform: translateX(-50%) translateY(-5px);
  }
  
  .hero__scroll-text {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
  }
  
  .hero__scroll-arrow {
    width: 35px;
    height: 35px;
    border: 2px solid rgba(0, 255, 255, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: bounce 2s ease-in-out infinite;
  }
  
  .hero__scroll-arrow i {
    font-size: 1rem;
    color: #00ffff;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
  
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  @media (max-width: 768px) {
    .hero__badges {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    
    .hero__badge {
      padding: 1rem;
    }
    
    .hero__badge i {
      font-size: 1.5rem;
      width: 35px;
    }
    
    .hero__badge-value {
      font-size: 1.2rem;
    }
    
    .hero__scroll-indicator {
      bottom: 2rem;
    }
  }
  
  @media (max-width: 480px) {
    .hero__badges {
      grid-template-columns: 1fr;
      gap: 0.8rem;
    }
    
    .hero__badge {
      padding: 0.8rem 1rem;
    }
  }
`;

document.head.appendChild(heroParticlesStyle);
