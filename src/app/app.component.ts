import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { R4v3tokenComponent } from './r4v3token/r4v3token.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParrainageModalComponent } from './modals/parrainage-modal/parrainage-modal.component';
import { ConnexionModalComponent } from './modals/connexion-modal/connexion-modal.component';
import { RegisterModalComponent } from './modals/register-modal/register-modal.component';
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
  RegisterModalComponent,
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
  showParrainageModal = false;
  showConnexionModal = false;
  showRegisterModal = false;

  constructor() {
    console.log('AppComponent constructor');
  }

  ngOnInit() {
    console.log('AppComponent initialized');
  }

  handleParrainageModalOpen() {
    console.log('Ouverture de la modal parrainage');
    this.showParrainageModal = true;
  }

  handleConnexionModalOpen() {
    console.log('Ouverture de la modal connexion');
    this.showConnexionModal = true;
  }

  handleRegisterModalOpen() {
    console.log('Ouverture de la modal register');
    this.showRegisterModal = true;
  }

  handleModalClose() {
    console.log('Fermeture de la modal');
    this.showParrainageModal = false;
    this.showConnexionModal = false;
    this.showRegisterModal = false;
  }
}
