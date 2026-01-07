AFRAME.registerComponent('auto-rotate', {
  tick: function (time, delta) {
    this.el.object3D.rotation.y += delta * 0.0005;
  }
});