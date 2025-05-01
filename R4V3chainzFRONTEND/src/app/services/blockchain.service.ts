// blockchain.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  private blockchainDataSubject = new Subject<any>();
  blockchainData$ = this.blockchainDataSubject.asObservable();

  updateBlockchainData(data: any) {
    this.blockchainDataSubject.next(data);
  }

  // Exemple de méthode pour envoyer des données pour chaque action
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
