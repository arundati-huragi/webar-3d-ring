AFRAME.registerComponent('drag-rotate', {
  init: function () {
    this.dragging = false;
    this.lastX = 0;
    this.rotationY = this.el.object3D.rotation.y;

    this.onMouseDown = (e) => {
      this.dragging = true;
      this.lastX = e.clientX;
    };

    this.onMouseMove = (e) => {
      if (!this.dragging) return;
      const deltaX = e.clientX - this.lastX;
      this.lastX = e.clientX;
      this.rotationY += deltaX * 0.005;
      this.el.object3D.rotation.y = this.rotationY;
    };

    this.onMouseUp = () => {
      this.dragging = false;
    };

    this.onTouchStart = (e) => {
      this.dragging = true;
      this.lastX = e.touches[0].clientX;
    };

    this.onTouchMove = (e) => {
      if (!this.dragging) return;
      const deltaX = e.touches[0].clientX - this.lastX;
      this.lastX = e.touches[0].clientX;
      this.rotationY += deltaX * 0.005;
      this.el.object3D.rotation.y = this.rotationY;
    };

    this.onTouchEnd = () => {
      this.dragging = false;
    };

    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);

    window.addEventListener('touchstart', this.onTouchStart);
    window.addEventListener('touchmove', this.onTouchMove);
    window.addEventListener('touchend', this.onTouchEnd);
  },

  remove: function () {
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);

    window.removeEventListener('touchstart', this.onTouchStart);
    window.removeEventListener('touchmove', this.onTouchMove);
    window.removeEventListener('touchend', this.onTouchEnd);
  }
});
