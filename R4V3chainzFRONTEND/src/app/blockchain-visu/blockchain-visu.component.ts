import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AddressShortPipe } from '../pipes/address-short.pipe';
import { BandeauBlockchainComponent } from '../bandeau-blockchain/bandeau-blockchain.component';
interface Block {
  index: number;
  hash: string;
  time: string;
}

interface Transaction {
  from: string;
  to: string;
  value: number;
  hash: string;
}

type View = {
  id: 'blocks' | 'transactions' | 'balance';
  icon: string;
  label: string;
};

@Component({
  selector: 'app-blockchain-visu',
  standalone: true,
  imports: [CommonModule, AddressShortPipe, BandeauBlockchainComponent],
  templateUrl: './blockchain-visu.component.html',
  styleUrls: ['./blockchain-visu.component.css']
})
export class BlockchainVisuComponent implements OnInit, OnDestroy {
  views: View[] = [
    { id: 'blocks', icon: '#block-icon', label: 'BLOCKS' },
    { id: 'transactions', icon: '#tx-icon', label: 'TX' },
    { id: 'balance', icon: '#wallet-icon', label: 'BALANCE' }
  ];

  currentView: 'blocks' | 'transactions' | 'balance' = 'blocks';
  blocks: Block[] = [];
  transactions: Transaction[] = [];
  balance = 0;
  publicKey = '';
  private subscription = new Subscription();

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit(): void {
    this.subscription = this.blockchainService.blockchainData$.subscribe(data => {
      switch (data.action) {
        case 'mineBlock':
          this.blocks.push({
            index: data.index,
            hash: data.hash,
            time: data.time
          });
          break;
        
        case 'syncBlockchain':
          if (data.data?.blocks) {
            this.blocks = data.data.blocks.map((b: any) => ({
              index: b.index,
              hash: b.hash,
              time: b.time
            }));
          }
          if (data.data?.transactions) {
            this.transactions = data.data.transactions;
          }
          break;

        case 'sendTransaction':
          if (data.transaction) {
            this.transactions.unshift(data.transaction);
          }
          break;

        case 'getBalance':
          this.balance = data.balance;
          break;

        case 'getPublicKey':
          this.publicKey = data.publicKey;
          break;
      }
    });

    this.blockchainService.requestSync();
    this.blockchainService.requestBalance();
    this.blockchainService.requestPublicKey();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  switchView(view: 'blocks' | 'transactions' | 'balance'): void {
    this.currentView = view;
    if (view === 'balance') {
      this.blockchainService.requestBalance();
      this.blockchainService.requestPublicKey();
    }
    if (view === 'transactions') {
      this.blockchainService.requestTransactions?.();
    }
    if (view === 'blocks') {
      this.blockchainService.requestSync();
    }
  }

  mineBlock(): void {
    this.blockchainService.mineBlock(1, 'abc123', new Date().toISOString());
  }

  syncBlockchain(): void {
    this.blockchainService.syncBlockchain('Blockchain synchronisée');
  }

  sendTransaction(): void {
    this.blockchainService.sendTransaction({
      from: 'Adresse 1',
      to: 'Adresse 2',
      amount: 10
    });
  }

  getBalance(): void {
    this.blockchainService.getBalance(100);
  }
}
