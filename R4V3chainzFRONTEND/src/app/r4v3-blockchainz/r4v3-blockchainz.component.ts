import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importe tes sous-composants ici
import { BandeauBlockchainComponent } from '../bandeau-blockchain/bandeau-blockchain.component';
import { PrimordialButtonsComponent } from '../primordial-buttons/primordial-buttons.component';
import { BlockchainVisuComponent } from '../blockchain-visu/blockchain-visu.component';

@Component({
  selector: 'app-r4v3-blockchainz',
  standalone: true,
  imports: [
    CommonModule,
    BandeauBlockchainComponent,
    PrimordialButtonsComponent,
    BlockchainVisuComponent
  ],
  templateUrl: './r4v3-blockchainz.component.html',
  styleUrls: ['./r4v3-blockchainz.component.css']
})
export class R4v3BlockchainzComponent {}
