import { Component, AfterViewInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-particles-background',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas #canvas class="particles-canvas"></canvas>`,
  styles: [`
    :host {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      z-index: -1;
      display: block;
     
    }
    canvas.particles-canvas {
      width: 100%;
      height: 100%;
      display: block;
      background-color: black;
    }
  `]
})
export class ParticlesBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private particles!: THREE.Points;
  private animationId: any;

  ngAfterViewInit(): void {
    this.initThree();
    this.animate();
    window.addEventListener('resize', this.onWindowResize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onWindowResize);
    if (this.animationId) cancelAnimationFrame(this.animationId);
    if (this.renderer) this.renderer.dispose();
  }

  private initThree() {
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000); // Fond noir

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 100;

    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 400;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 1.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    this.particles.rotation.y += 0.001;
    this.particles.rotation.x += 0.0005;
    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
