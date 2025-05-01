// blockchain-visu.component.ts
import { Component, OnDestroy } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

interface Block {
  index: number;
  hash: string;
  time: string;
}

@Component({
  selector: 'app-blockchain-visu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blockchain-visu.component.html',
  styleUrls: ['./blockchain-visu.component.css']
})
export class BlockchainVisuComponent {

  blockchainData: any;
  blocks: Block[] = [];
  subscription: Subscription = new Subscription();

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit(): void {
    this.subscription = this.blockchainService.blockchainData$.subscribe(data => {
      this.blockchainData = data;
      // Met à jour l'affichage en fonction des données reçues
      if (data.action === 'mineBlock') {
        const newBlock: Block = {
          index: data.index,
          hash: data.hash,
          time: data.time
        };
        this.blocks.push(newBlock);
      } else if (data.action === 'syncBlockchain') {
        console.log('Blockchain synchronisée:', data.data);
      } else if (data.action === 'sendTransaction') {
        console.log('Transaction envoyée:', data.transaction);
      } else if (data.action === 'getBalance') {
        console.log('Solde:', data.balance);
      } else if (data.action === 'getPublicKey') {
        console.log('Clé publique:', data.publicKey);
      } else if (data.action === 'getPrivateKey') {
        console.log('Clé privée:', data.privateKey);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
