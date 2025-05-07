import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

@Component({
  selector: 'app-r4v3token',
  template: `<canvas #canvasContainer></canvas>`,
  styles: [`
    canvas {
      width: 100%;
      height: 100vh;
      display: block;
    }
  `],
  standalone: true
})
export class R4v3tokenComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private animationId: any;
  private mesh!: THREE.Mesh;
  private colorHue = 0; // Variable pour la transition de couleur

  ngAfterViewInit(): void {
    this.initThree();
    this.loadSTLModel();
    this.animate();
    window.addEventListener('resize', this.onWindowResize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onWindowResize);
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.controls.dispose();
    this.renderer.dispose();
  }

  private initThree(): void {
    // Configuration du renderer avec fond transparent
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.canvasRef.nativeElement,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);

    // Initialisation de la scène
    this.scene = new THREE.Scene();

    // Configuration de la caméra avec zoom rapproché
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(50, 50, 50); // Position initiale plus proche

    // Configuration des contrôles orbitaux
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.target.set(0, 0, 0);
    this.controls.update();

    // Éclairage amélioré
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(50, 100, 50);
    this.scene.add(directionalLight);
  }

  private loadSTLModel(): void {
    const loader = new STLLoader();
    loader.load(
      'assets/r4v3token.stl',
      (geometry) => {
        // Matériau avec couleur dynamique
        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(this.colorHue, 1, 0.5),
          metalness: 0.5,
          roughness: 0.4,
          transparent: true
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.scale.set(0.15, 0.15, 0.15); // Échelle augmentée

        // Centrage automatique
        geometry.computeBoundingSphere();
        if (geometry.boundingSphere) {
          this.mesh.position.set(
            -geometry.boundingSphere.center.x,
            -geometry.boundingSphere.center.y,
            -geometry.boundingSphere.center.z
          );
        }

        this.scene.add(this.mesh);

        // Ajustement automatique du zoom
        const bbox = new THREE.Box3().setFromObject(this.mesh);
        const center = bbox.getCenter(new THREE.Vector3());
        const size = bbox.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        this.camera.position.copy(center).add(new THREE.Vector3(1, 1, 1).multiplyScalar(maxDim * 1.2));
        this.controls.target.copy(center);
        this.controls.update();
      },
      (xhr) => {
        console.log(`Chargement : ${((xhr.loaded / xhr.total) * 100).toFixed(1)}%`);
      },
      (error) => {
        console.error('Erreur de chargement :', error);
      }
    );
  }

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);

    if (this.mesh) {
      // Rotation automatique
      this.mesh.rotation.y += 0.01;

      // Transition de couleur continue
      this.colorHue += 0.005;
      if (this.colorHue > 1) this.colorHue = 0;
      (this.mesh.material as THREE.MeshStandardMaterial).color.setHSL(this.colorHue, 1, 0.5);
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };

  private onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };
}
