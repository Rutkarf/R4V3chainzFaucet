import { Component } from '@angular/core';
import { ChatComponent } from "../chat/chat.component";
import { DonateNewsComponent } from "../donate-news/donate-news.component";

import { ExplorateurComponent } from "../explorateur/explorateur.component";
import { StatistiquesComponent } from "../statistiques/statistiques.component";
import { PairComponent } from "../pair/pair.component";
import { StatutComponent } from "../statut/statut.component";
import { R4v3BlockchainzComponent } from "../r4v3-blockchainz/r4v3-blockchainz.component";
import { ParticlesBackgroundComponent } from "../particles-background/particles-background.component";

@Component({
  selector: 'layout-global',
  standalone: true,
  imports: [ChatComponent, DonateNewsComponent, ExplorateurComponent, StatistiquesComponent, PairComponent, StatutComponent, R4v3BlockchainzComponent, ParticlesBackgroundComponent],
  templateUrl: './layout-global.component.html',
  styleUrls: ['./layout-global.component.css'] // Corrige 'styleUrl' en 'styleUrls'
})
export class LayoutGlobalComponent {

}



