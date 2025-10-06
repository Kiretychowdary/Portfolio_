export function cursor() {
  const cursor = document.querySelector('.cursor');
  const cursorBorder = document.querySelector('.cursor__border');
  
  // Exit early if cursor elements don't exist
  if (!cursor || !cursorBorder) {
    console.log('Custom cursor elements not found - using default cursor');
    return;
  }
  
  const anchors = document.querySelectorAll('a');

  document.addEventListener('mousemove', (e) => {
    if (cursor) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    }
  });

  document.addEventListener('click', (e) => {
    if (cursor) {
      cursor.classList.add('click');
      setTimeout(() => {
        cursor.classList.remove('click');
      }, 200);
    }
  });

  anchors.forEach((anchor) => {
    anchor.addEventListener('mouseover', () => {
      if (cursorBorder && cursor) {
        cursorBorder.style.display = 'none';
        cursor.style.backgroundImage = 'none';
        cursor.style.transform = 'scale(2)';
        cursor.style.animationName = 'borderAnim';
        cursor.style.mixBlendMode = 'difference';
      }
    });
    anchor.addEventListener('mouseleave', () => {
      if (cursorBorder && cursor) {
        cursorBorder.style.display = 'block';
        cursor.style.backgroundImage = 'url(../assets/images/cursor.png)';
        cursor.style.transform = '';
        cursor.style.animationName = '';
        cursor.style.mixBlendMode = '';
      }
    });
  });
}
