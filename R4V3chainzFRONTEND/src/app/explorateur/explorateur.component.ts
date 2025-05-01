import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- à ajouter

@Component({
  selector: 'app-explorateur',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- FormsModule ici
  templateUrl: './explorateur.component.html',
  styleUrls: ['./explorateur.component.css']
})
export class ExplorateurComponent {
  searchHash = '';
  result: string | null = null;

  checkHash() {
    // Simule la vérification d'un hash (à relier à ton backend plus tard)
    if (this.searchHash.trim().length === 0) {
      this.result = null;
      return;
    }
    // Simu : hash trouvé si commence par 'a' (à remplacer par vrai appel API)
    this.result = this.searchHash.startsWith('a')
      ? '✅ Hash trouvé dans la blockchain !'
      : '❌ Hash introuvable.';
  }
}
