import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <div class="navbar-brand">
        <span class="neon-text">R4V3chainz</span>
        <div class="scanline"></div>
      </div>
      
      <div class="navbar-actions">
        <button 
          type="button"
          class="cyber-btn" 
          (click)="openParrainageModal()"
          (mouseover)="onMouseOver('parrainage')"
          (mouseout)="onMouseOut('parrainage')">
          <span class="btn-content">Parrainage</span>
        </button>
        <button 
          type="button"
          class="cyber-btn" 
          (click)="openConnexionModal()"
          (mouseover)="onMouseOver('connexion')"
          (mouseout)="onMouseOut('connexion')">
          <span class="btn-content">Connexion</span>
        </button>
        <button 
          type="button"
          class="cyber-btn" 
          (click)="openRegisterModal()"
          (mouseover)="onMouseOver('register')"
          (mouseout)="onMouseOut('register')">
          <span class="btn-content">Register</span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1.2rem;
      height: 38px;
      width: 100%;
      background: linear-gradient(90deg, #181a20 80%, #1e005a 100%);
      box-shadow: 0 0 18px 2px #00f0ff44, 0 2px 8px #a600ff33;
      border-bottom: 2px solid #00f0ff;
      position: relative;
      z-index: 2;
      font-size: 0.97rem;
      box-sizing: border-box;
      margin: 0;
    }

    .navbar-brand {
      display: inline-block;
      font-weight: bold;
      font-size: 1.2rem;
      letter-spacing: 2px;
      color: #fff;
      text-shadow:
        0 0 8px #00f0ff,
        0 0 16px #a600ff,
        0 0 2px #fff;
      margin-right: 1.2rem;
      cursor: pointer;
      position: relative;
      transition: text-shadow 0.3s;
      outline: none;
      animation: brandGlow 2s infinite alternate;
    }

    @keyframes brandGlow {
      0% { text-shadow: 0 0 8px #00f0ff, 0 0 16px #a600ff, 0 0 2px #fff; }
      100% { text-shadow: 0 0 22px #00f0ff, 0 0 32px #a600ff, 0 0 8px #fff; }
    }

    .navbar-brand:hover {
      animation: glitch 0.4s cubic-bezier(.77,0,.18,1.01) 2, brandGlow 2s infinite alternate;
      color: #00f0ff;
    }

    @keyframes glitch {
      0% { text-shadow: 2px 0 #a600ff, -2px 0 #00f0ff; }
      20% { text-shadow: -2px 0 #a600ff, 2px 0 #00f0ff; }
      40% { text-shadow: 2px 2px #a600ff, -2px -2px #00f0ff; }
      60% { text-shadow: -2px -2px #a600ff, 2px 2px #00f0ff; }
      80% { text-shadow: 2px 0 #a600ff, -2px 0 #00f0ff; }
      100% { text-shadow: 0 0 8px #00f0ff, 0 0 16px #a600ff, 0 0 2px #fff; }
    }

    .scanline {
      content: "";
      position: absolute;
      left: 0; right: 0; top: 0; height: 100%;
      pointer-events: none;
      background: repeating-linear-gradient(
        to bottom,
        rgba(255,255,255,0.06) 0px,
        rgba(255,255,255,0.06) 1px,
        transparent 2px,
        transparent 4px
      );
      width: 100%;
      z-index: 1;
      animation: scanlines 2s linear infinite;
    }

    @keyframes scanlines {
      0% { background-position-y: 0; }
      100% { background-position-y: 4px; }
    }

    .navbar-actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: auto;
      padding-right: 1.2rem;
    }

    .cyber-btn {
      background: transparent;
      color: #fff;
      border: 2px solid #a600ff;
      border-radius: 6px;
      padding: 0.3rem 0.9rem;
      font-weight: bold;
      font-size: 1rem;
      text-shadow: 0 0 2px #fff, 0 0 8px #a600ff;
      box-shadow: 0 0 8px #a600ff;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .cyber-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(166, 0, 255, 0.2),
        transparent
      );
      transition: 0.5s;
    }

    .cyber-btn:hover {
      background: #a600ff44;
      border-color: #00f0ff;
      box-shadow: 0 0 16px #00f0ff, 0 0 32px #a600ff;
      transform: translateY(-1px);
    }

    .cyber-btn:hover::before {
      left: 100%;
    }

    .cyber-btn:active {
      transform: translateY(0);
      box-shadow: 0 0 5px #00f0ff;
    }

    .btn-content {
      position: relative;
      z-index: 1;
    }

    @media (max-width: 900px) {
      .navbar {
        flex-wrap: wrap;
        height: auto;
        padding: 0.7rem;
        font-size: 0.92rem;
      }
      .navbar-brand {
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
      .navbar-actions {
        gap: 0.3rem;
        margin-left: 0.5rem;
      }
    }
  `]
})
export class NavbarComponent implements OnInit {
  @Output() parrainageModalOpened = new EventEmitter<void>();
  @Output() connexionModalOpened = new EventEmitter<void>();
  @Output() registerModalOpened = new EventEmitter<void>();

  constructor() {
    console.log('NavbarComponent constructor');
  }

  ngOnInit() {
    console.log('NavbarComponent initialized');
    document.addEventListener('click', (event) => {
      console.log('Click event target:', event.target);
    });
  }

  openParrainageModal() {
    console.log('Bouton parrainage cliqué');
    this.parrainageModalOpened.emit();
  }

  openConnexionModal() {
    console.log('Bouton connexion cliqué');
    this.connexionModalOpened.emit();
  }

  openRegisterModal() {
    console.log('Bouton register cliqué');
    this.registerModalOpened.emit();
  }

  onMouseOver(buttonType: string) {
    console.log(`Souris sur le bouton ${buttonType}`);
  }

  onMouseOut(buttonType: string) {
    console.log(`Souris sortie du bouton ${buttonType}`);
  }
} 