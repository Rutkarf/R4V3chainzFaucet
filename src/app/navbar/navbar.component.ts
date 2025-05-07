import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() parrainageModalOpened = new EventEmitter<void>();
  @Output() connexionModalOpened = new EventEmitter<void>();

  faucetValue = 0;
  private intervalId: any;

  ngOnInit() {
    this.startIncrement(); // Démarrage automatique au chargement
  }

  ngOnDestroy() {
    this.stopIncrement();
  }

  private startIncrement() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.faucetValue += 1;
      }, 1);
    }
  }

  claimFaucet() {
    this.startIncrement(); // Conserve la fonctionnalité du bouton
  }

  formatFaucetValue(value: number): string {
    return value.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      .padStart(16, '0')
      .replace(/(\d{3})(?=\d)/g, '$1.');
  }

  private stopIncrement() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  goHome() {
    console.log('Navigation vers l\'accueil');
  }

  openParrainageModal() {
    this.parrainageModalOpened.emit();
  }

  openConnexionModal() {
    this.connexionModalOpened.emit();
  }

  onMouseOver(buttonType: string) {
    console.log(`Survol du bouton ${buttonType}`);
  }

  onMouseOut(buttonType: string) {
    console.log(`Fin du survol du bouton ${buttonType}`);
  }
}
