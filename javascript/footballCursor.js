// ============================================
// FOOTBALL CURSOR - INTERACTIVE CURSOR SYSTEM
// ============================================

export function initFootballCursor() {
  // Check if device supports hover (not mobile)
  const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  
  if (isTouchDevice) {
    console.log('Touch device detected - using default cursor');
    return;
  }

  // Create cursor elements
  const cursor = document.createElement('div');
  cursor.className = 'football-cursor';
  
  const ball = document.createElement('div');
  ball.className = 'football-ball';
  cursor.appendChild(ball);
  
  const ring = document.createElement('div');
  ring.className = 'football-cursor-ring';
  
  document.body.appendChild(cursor);
  document.body.appendChild(ring);
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let ringX = 0, ringY = 0;
  
  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Smooth cursor follow animation
  function animateCursor() {
    // Cursor follows quickly
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    
    // Ring follows with delay
    ringX += (mouseX - ringX) * 0.1;
    ringY += (mouseY - ringY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
  
  // Create trail effect
  let trailTimeout;
  document.addEventListener('mousemove', (e) => {
    clearTimeout(trailTimeout);
    trailTimeout = setTimeout(() => {
      createTrail(e.clientX, e.clientY);
    }, 50);
  });
  
  function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'football-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    document.body.appendChild(trail);
    
    setTimeout(() => {
      trail.remove();
    }, 600);
  }
  
  // Hover effects on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .clickable');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      ring.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      ring.classList.remove('hover');
    });
  });
  
  // Click effect - Football kick!
  document.addEventListener('mousedown', (e) => {
    cursor.classList.add('click');
    
    // Create sparkles on click
    createSparkles(e.clientX, e.clientY);
    
    setTimeout(() => {
      cursor.classList.remove('click');
    }, 300);
  });
  
  // Create sparkle particles
  function createSparkles(x, y) {
    const sparkleCount = 8;
    
    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'football-sparkle';
      
      const angle = (Math.PI * 2 / sparkleCount) * i;
      const distance = 30 + Math.random() * 20;
      const sparkleX = Math.cos(angle) * distance;
      const sparkleY = Math.sin(angle) * distance;
      
      sparkle.style.left = x + 'px';
      sparkle.style.top = y + 'px';
      sparkle.style.setProperty('--sparkle-x', sparkleX + 'px');
      sparkle.style.setProperty('--sparkle-y', sparkleY + 'px');
      
      document.body.appendChild(sparkle);
      
      setTimeout(() => {
        sparkle.remove();
      }, 800);
    }
  }
  
  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    ring.style.opacity = '0';
  });
  
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    ring.style.opacity = '1';
  });
  
  // Add smooth transitions
  cursor.style.transition = 'opacity 0.3s ease';
  ring.style.transition = 'opacity 0.3s ease';
  
  console.log('⚽ Football cursor activated!');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFootballCursor);
} else {
  initFootballCursor();
}

export default { initFootballCursor };
