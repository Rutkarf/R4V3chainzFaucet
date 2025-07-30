import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { R4v3tokenComponent } from './r4v3token/r4v3token.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParrainageModalComponent } from './modals/parrainage-modal/parrainage-modal.component';
import { ConnexionModalComponent } from './modals/connexion-modal/connexion-modal.component';
import { BandeauAccueilComponent } from "./bandeau-accueil/bandeau-accueil.component";
import { ChatComponent } from "./chat/chat.component";
import { NewsComponent } from './news/news.component';
import { ExplorateurComponent } from "./explorateur/explorateur.component";
import { StatistiquesComponent } from "./statistiques/statistiques.component";
import { PairComponent } from "./pair/pair.component";
import { StatutComponent } from "./statut/statut.component";
import { ParticlesBackgroundComponent } from "./particles-background/particles-background.component";
import { BlockchainVisuComponent } from "./blockchain-visu/blockchain-visu.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    R4v3tokenComponent,
    NavbarComponent,
    ParrainageModalComponent,
    ConnexionModalComponent,
    BandeauAccueilComponent,
    ChatComponent,
    NewsComponent,
    ExplorateurComponent,
    StatistiquesComponent,
    PairComponent,
    StatutComponent,
    ParticlesBackgroundComponent,
    BlockchainVisuComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private modalService: NgbModal) {
    console.log('AppComponent constructor');
  }

  ngOnInit() {
    console.log('AppComponent initialized');
  }

  /**
   * Ouvre la modal de parrainage via ng-bootstrap
   */
  handleParrainageModalOpen() {
    console.log('Ouverture de la modal parrainage');
    this.modalService.open(ParrainageModalComponent);
  }

  /**
   * Ouvre la modal de connexion via ng-bootstrap
   */
  handleConnexionModalOpen() {
    console.log('Ouverture de la modal connexion');
    this.modalService.open(ConnexionModalComponent);
  }

  /**
   * Ouvre la modal d'inscription (à adapter selon ton implémentation)
   */
  handleRegisterModalOpen() {
    console.log('Ouverture de la modal register');
    // À adapter : si tu as une modal d'inscription, ouvre-la ici via NgbModal
    // this.modalService.open(RegisterModalComponent);
  }

  /**
   * Callback pour fermer les modales custom (si jamais tu en utilises en dehors de ng-bootstrap)
   */
  handleModalClose() {
    console.log('Fermeture de la modal');
    // Rien à faire ici si tu utilises exclusivement NgbModal
  }
}
