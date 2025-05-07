// blockchain.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  private blockchainDataSubject = new Subject<any>();
  blockchainData$ = this.blockchainDataSubject.asObservable();

  requestSync() {
    // Pour le moment, on simule une réponse
    this.updateBlockchainData({
      action: 'syncBlockchain',
      data: {
        blocks: [],
        transactions: []
      }
    });
  }

  requestBalance() {
    // Pour le moment, on simule une réponse
    this.updateBlockchainData({
      action: 'getBalance',
      balance: 0
    });
  }

  requestPublicKey() {
    // Pour le moment, on simule une réponse
    this.updateBlockchainData({
      action: 'getPublicKey',
      publicKey: ''
    });
  }

  requestTransactions() {
    // Pour le moment, on simule une réponse
    this.updateBlockchainData({
      action: 'syncBlockchain',
      data: {
        transactions: []
      }
    });
  }

  updateBlockchainData(data: any) {
    this.blockchainDataSubject.next(data);
  }

  mineBlock(index: number, hash: string, time: string) {
    this.updateBlockchainData({
      action: 'mineBlock',
      index,
      hash,
      time
    });
  }

  syncBlockchain(data: any) {
    this.updateBlockchainData({
      action: 'syncBlockchain',
      data
    });
  }

  sendTransaction(transaction: any) {
    this.updateBlockchainData({
      action: 'sendTransaction',
      transaction
    });
  }

  getBalance(balance: number) {
    this.updateBlockchainData({
      action: 'getBalance',
      balance
    });
  }

  getPublicKey(publicKey: string) {
    this.updateBlockchainData({
      action: 'getPublicKey',
      publicKey
    });
  }

  getPrivateKey(privateKey: string) {
    this.updateBlockchainData({
      action: 'getPrivateKey',
      privateKey
    });
  }
}
