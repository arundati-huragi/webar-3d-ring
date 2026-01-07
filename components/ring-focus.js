AFRAME.registerComponent('ring-focus', {
  init: function () {
    const el = this.el;

    el.originalScale = el.object3D.scale.clone();
    el.originalPosition = el.object3D.position.clone();

    el.addEventListener('click', () => {
      // Reset any previously active ring
      if (window.activeRing && window.activeRing !== el) {
        resetRing(window.activeRing);
      }

      // Bring ring out of box (clear separation)
      el.object3D.scale.set(
        el.originalScale.x * 2,
        el.originalScale.y * 2,
        el.originalScale.z * 2
      );

      el.object3D.position.set(
        el.originalPosition.x,
        el.originalPosition.y + 0.8, // FULLY ABOVE BOX
        el.originalPosition.z + 1.1  // CLEARLY IN FRONT
      );

      window.activeRing = el;

      const resetBtn = document.querySelector('#resetButton');
      if (resetBtn) resetBtn.setAttribute('visible', true);
    });
  }
});

function resetRing(el) {
  if (!el) return;

  el.object3D.scale.copy(el.originalScale);
  el.object3D.position.copy(el.originalPosition);

  window.activeRing = null;

  const resetBtn = document.querySelector('#resetButton');
  if (resetBtn) resetBtn.setAttribute('visible', false);
}
