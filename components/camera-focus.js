AFRAME.registerComponent('camera-focus', {
  init: function () {
    this.camera = document.querySelector('a-camera');
    this.originalPos = this.camera.object3D.position.clone();
    this.zoomed = false;

    this.el.addEventListener('click', () => {
      if (this.zoomed) return;

      const ringPos = this.el.object3D.position;

      // Move camera slightly above and in front of ring
      this.camera.object3D.position.set(
        ringPos.x,
        ringPos.y + 0.25,
        ringPos.z + 1.2
      );

      this.zoomed = true;
    });

    const closeBtn = document.querySelector('#closeButton');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.camera.object3D.position.copy(this.originalPos);
        this.zoomed = false;
      });
    }
  }
});