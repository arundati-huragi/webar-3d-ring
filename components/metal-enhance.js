AFRAME.registerComponent('metal-enhance', {
  init() {
    this.el.addEventListener('model-loaded', () => {
      this.el.object3D.traverse(node => {
        if (node.isMesh && node.material) {
          node.material.metalness = 1;
          node.material.roughness = 0.12;
          node.material.envMapIntensity = 2.2;
          node.material.needsUpdate = true;
        }
      });
    });
  }
});