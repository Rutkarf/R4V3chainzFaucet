// primordial-buttons.component.ts
import { Component } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';

@Component({
  selector: 'app-primordial-buttons',
  templateUrl: './primordial-buttons.component.html',
  styleUrls: ['./primordial-buttons.component.css']
})
export class PrimordialButtonsComponent {

  constructor(private blockchainService: BlockchainService) { }

  mineBlock() {
    // Exemple de données pour miner un bloc
    this.blockchainService.mineBlock(1, 'abc123', '2025-05-01 08:00');
  }

  syncBlockchain() {
    // Exemple de données pour synchroniser la blockchain
    this.blockchainService.syncBlockchain('Blockchain synchronisée');
  }

  sendTransaction() {
    // Exemple de données pour envoyer une transaction
    this.blockchainService.sendTransaction({
      from: 'Adresse 1',
      to: 'Adresse 2',
      amount: 10
    });
  }

  getBalance() {
    // Exemple de données pour récupérer le solde
    this.blockchainService.getBalance(100);
  }

  getPublicKey() {
    // Exemple de données pour récupérer la clé publique
    this.blockchainService.getPublicKey('Clé publique');
  }

  getPrivateKey() {
    // Exemple de données pour récupérer la clé privée
    this.blockchainService.getPrivateKey('Clé privée');
  }
}
