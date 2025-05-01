import { Component } from '@angular/core';

@Component({
  selector: 'app-bandeau-accueil',
  standalone: true,
  templateUrl: './bandeau-accueil.component.html',
  styleUrls: ['./bandeau-accueil.component.css']
})
export class BandeauAccueilComponent {
  message: string = "Bienvenue sur R4V3chainz ! 🚀 Dernière MESSAGE De mise à jour : 30/04/2025";
}

