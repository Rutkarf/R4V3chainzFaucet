import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { ParrainageModalComponent } from './parrainage-modal/parrainage-modal.component';
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
    ParrainageModalComponent,
    NavbarComponent,
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
  template: `
    <app-particles-background></app-particles-background>

    <!-- Ajout du modal -->
    <app-navbar (parrainageClicked)="handleParrainageClick()"></app-navbar>
    
    <app-parrainage-modal 
      *ngIf="showParrainageModal"
      (closed)="handleModalClose()">
    </app-parrainage-modal>

    <app-bandeau-accueil></app-bandeau-accueil>
    
    <div class="main-layout">
      <!-- Colonne Gauche -->
      <div class="left-column">
        <app-statut></app-statut>
        <app-pair></app-pair>
        <app-statistiques></app-statistiques>
        <app-explorateur></app-explorateur>
      </div>

      <!-- Colonne Centrale -->
      <div class="center-column">
        <app-blockchain-visu></app-blockchain-visu>
      </div>

      <!-- Colonne Droite -->
      <div class="right-column">
        <app-news></app-news>
        <app-chat></app-chat>
      </div>
    </div>
    
    <app-footer></app-footer>
  `,
  styles: `
    /* Styles existants inchangés */
  `
})
export class AppComponent {
  showParrainageModal = false;

  handleParrainageClick() {
    console.log('handleParrainageClick dans AppComponent');
    this.showParrainageModal = true;
    console.log('showParrainageModal =', this.showParrainageModal);
  }

  handleModalClose() {
    console.log('handleModalClose dans AppComponent');
    this.showParrainageModal = false;
    console.log('showParrainageModal =', this.showParrainageModal);
  }

  constructor() {
    setInterval(() => {
      console.log('État modal:', this.showParrainageModal);
    }, 1000);
  }
}
