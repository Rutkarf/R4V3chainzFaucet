import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Ajoute ceci

@Component({
  selector: 'navbar',
  standalone: true, // important pour standalone
  imports: [CommonModule], // Ajoute CommonModule ici
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  value = 0.000000000000001;
  date = '30/04/2025';
  hash = '0x1234abcd...';

  constructor() {
    setInterval(() => {
      this.value += 0.000000000000001;
    }, 1);
  }

  claim() {
    alert('Faucet claimed!');
  }
}
