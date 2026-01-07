AFRAME.registerComponent('state-manager', {
  init() {
    this.el.addEventListener('click', () => {
      // Disable other rings
      document.querySelectorAll('.clickable').forEach(ring => {
        if (ring !== this.el) {
          ring.classList.remove('clickable');
          ring.setAttribute('material', 'opacity: 0.35');
        }
      });
      // Show reset button
      const resetButton = document.querySelector('#resetButton');
      if (resetButton) resetButton.style.display = 'block';
    });

    // Reset on close button click
    document.querySelector('#resetButton')?.addEventListener('click', () => {
      document.querySelectorAll('[ring-focus]').forEach(ring => {
        ring.classList.add('clickable');
        ring.setAttribute('material', 'opacity: 1');
        ring.setAttribute('auto-rotate', '');
      });
      // Hide reset button
      const resetButton = document.querySelector('#resetButton');
      if (resetButton) resetButton.setAttribute('visible', false);
    });
  }
});
