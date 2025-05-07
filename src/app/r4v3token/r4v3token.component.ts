import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

@Component({
  selector: 'app-r4v3token',
  template: `<canvas #canvasContainer></canvas>`,
  styles: [`
    canvas {
      width: 100%;
      height: 100vh;
      display: block;
      cursor: pointer;
    }
  `],
  standalone: true
})
export class R4v3tokenComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private animationId: any;
  private mesh!: THREE.Mesh;
  private colorHue = 0;
  private particleSystem!: THREE.Points;
  private mouseX = 0;
  private mouseY = 0;
  private isHovered = false;

  ngAfterViewInit(): void {
    this.initThree();
    this.loadSTLModel();
    this.initParticleSystem();
    this.setupEventListeners();
    this.animate();
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  private initThree(): void {
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.canvasRef.nativeElement,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);

    this.scene = new THREE.Scene();

    // Position caméra augmentée
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(400, 400, 400);

    // Éclairage
    this.scene.add(new THREE.AmbientLight(0xffffff, 2));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(50, 100, 50);
    this.scene.add(directionalLight);
  }

  private loadSTLModel(): void {
    new STLLoader().load(
      'assets/r4v3token.stl',
      (geometry) => {
        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(this.colorHue, 1, 0.5),
          metalness: 0.5,
          roughness: 0.4,
          transparent: true
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.scale.set(0.15, 0.15, 0.15);

        geometry.computeBoundingSphere();
        if (geometry.boundingSphere) {
          this.mesh.position.copy(geometry.boundingSphere.center.clone().multiplyScalar(-1));
        }

        this.scene.add(this.mesh);
        this.adjustCamera();
      },
      (xhr) => console.log(`Chargement : ${((xhr.loaded / xhr.total) * 100).toFixed(1)}%`),
      (error) => console.error('Erreur de chargement :', error)
    );
  }

  private adjustCamera(): void {
    if (!this.mesh) return;

    const bbox = new THREE.Box3().setFromObject(this.mesh);
    const center = bbox.getCenter(new THREE.Vector3());
    const size = bbox.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // Multiplicateur augmenté
    this.camera.position.copy(center).add(new THREE.Vector3(1, 1, 1).multiplyScalar(maxDim * 6));
    this.camera.lookAt(center);
  }

  private initParticleSystem(): void {
    const particleCount = 2000;
    const particles = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    this.particleSystem = new THREE.Points(particles, particleMaterial);
    this.scene.add(this.particleSystem);
  }

  private setupEventListeners(): void {
    window.addEventListener('resize', this.onWindowResize);
    
    this.canvasRef.nativeElement.addEventListener('mousemove', (e) => {
      this.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    this.canvasRef.nativeElement.addEventListener('mouseenter', () => this.isHovered = true);
    this.canvasRef.nativeElement.addEventListener('mouseleave', () => this.isHovered = false);
  }

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);

    this.colorHue = (this.colorHue + 0.005) % 1;
    
    if (this.mesh) {
      (this.mesh.material as THREE.MeshStandardMaterial).color.setHSL(this.colorHue, 1, 0.5);
      
      this.mesh.rotation.y += 0.01 + (this.mouseX * 0.02);
      this.mesh.rotation.x += this.mouseY * 0.01;

      const targetScale = this.isHovered ? 1.1 : 1;
      this.mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }

    const positions = this.particleSystem.geometry.attributes['position'].array as Float32Array;
    const time = Date.now() * 0.001;
    
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += Math.sin(time + positions[i]) * 0.002;
      positions[i + 1] += Math.cos(time + positions[i + 1]) * 0.002;
      positions[i + 2] += Math.sin(time + positions[i + 2]) * 0.002;
    }
    
    this.particleSystem.geometry.attributes['position'].needsUpdate = true;
    (this.particleSystem.material as THREE.PointsMaterial).color.setHSL(
      (this.colorHue + 0.3) % 1, 
      0.8, 
      0.6
    );

    this.renderer.render(this.scene, this.camera);
  };

  private onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  private cleanup(): void {
    window.removeEventListener('resize', this.onWindowResize);
    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.renderer.dispose();
  }
}
