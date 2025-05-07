import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private apiUrl = 'http://localhost:3000/api/wallet';

  constructor(private http: HttpClient) { }

  getPublicKey() {
    return this.http.get(`${this.apiUrl}/publicKey`);
  }

  getBalance(address: string) {
    return this.http.get(`${this.apiUrl}/balance?address=${address}`);
  }

  // ... Autres méthodes
}
