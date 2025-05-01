import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bandeau-blockchain',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bandeau-blockchain.component.html',
  styleUrls: ['./bandeau-blockchain.component.css']
})
export class BandeauBlockchainComponent {
  // Message dynamique (à mettre à jour selon l'état de ta blockchain)
  info: string = "⛓️  Blockchain synchronisée - 123456 blocs | 42 transactions en attente | Dernier bloc : 30/04/2025 21:42";
}
