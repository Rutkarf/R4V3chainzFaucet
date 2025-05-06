import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // Retirez les imports inutiles
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Variables du faucet
  value = 0.000000000000001;
  date = '30/04/2025';
  hash = '0x1234abcd...';
  
  // Événement de parrainage
  @Output() parrainageClicked = new EventEmitter<void>();

  constructor() {
    // Mise à jour automatique de la valeur
    setInterval(() => {
      this.value += 0.000000000000001;
    }, 1);
  }

  handleParrainageClick() {
    console.log('handleParrainageClick appelé');
    this.parrainageClicked.emit();
  }

  claim() {
    alert('Faucet claimed!');
  }
}
