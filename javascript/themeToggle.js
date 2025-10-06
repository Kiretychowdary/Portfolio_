/**
 * Theme Toggle Functionality
 * Switches between light and dark modes with smooth transitions
 */

export function initThemeToggle() {
  // Create theme toggle button
  createThemeToggleButton();
  
  // Load saved theme preference
  loadThemePreference();
  
  // Listen for theme toggle clicks
  setupThemeToggleListener();
}

function createThemeToggleButton() {
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.setAttribute('aria-label', 'Toggle theme');
  
  const currentTheme = localStorage.getItem('theme') || 'dark';
  const icon = currentTheme === 'dark' ? 'fa-moon' : 'fa-sun';
  
  themeToggle.innerHTML = `
    <i class="fas ${icon} theme-toggle__icon"></i>
    <span class="theme-toggle__tooltip">Switch to ${currentTheme === 'dark' ? 'Light' : 'Dark'} Mode</span>
  `;
  
  document.body.appendChild(themeToggle);
  
  // Create transition overlay
  const overlay = document.createElement('div');
  overlay.className = 'theme-transition-overlay';
  document.body.appendChild(overlay);
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  
  // Default to dark theme
  if (!savedTheme) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
}

function setupThemeToggleListener() {
  const themeToggle = document.querySelector('.theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      toggleTheme();
    });
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Trigger transition overlay
  const overlay = document.querySelector('.theme-transition-overlay');
  if (overlay) {
    overlay.classList.add('active');
    setTimeout(() => {
      overlay.classList.remove('active');
    }, 400);
  }
  
  // Update theme
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update button icon with animation
  updateThemeIcon(newTheme);
  
  // Update tooltip text
  updateTooltipText(newTheme);
  
  // Announce to screen readers
  announceThemeChange(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('.theme-toggle__icon');
  
  if (icon) {
    // Fade out animation
    icon.classList.add('fade-out');
    
    setTimeout(() => {
      // Change icon
      icon.classList.remove('fa-sun', 'fa-moon');
      icon.classList.add(theme === 'dark' ? 'fa-moon' : 'fa-sun');
      
      // Fade in animation
      icon.classList.remove('fade-out');
      icon.classList.add('fade-in');
      
      setTimeout(() => {
        icon.classList.remove('fade-in');
      }, 300);
    }, 300);
  }
}

function updateTooltipText(theme) {
  const tooltip = document.querySelector('.theme-toggle__tooltip');
  
  if (tooltip) {
    tooltip.textContent = `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`;
  }
}

function announceThemeChange(theme) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = `${theme === 'dark' ? 'Dark' : 'Light'} mode activated`;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Keyboard shortcut: Ctrl/Cmd + Shift + D to toggle theme
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'd') {
    e.preventDefault();
    toggleTheme();
  }
});

// Screen reader only class
const srOnlyStyle = document.createElement('style');
srOnlyStyle.textContent = `
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
document.head.appendChild(srOnlyStyle);
