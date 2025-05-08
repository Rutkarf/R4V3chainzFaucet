import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M4t3rfaucetComponent} from '../m4t3rfaucet/m4t3rfaucet.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, 
            M4t3rfaucetComponent],  // Correction de la syntaxe ici
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() parrainageModalOpened = new EventEmitter<void>();
  @Output() connexionModalOpened = new EventEmitter<void>();

  ngOnInit() {
    console.log('NavbarComponent ngOnInit called');
  }

  ngOnDestroy() {
    // Pas d'action spécifique à faire ici pour le moment
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
