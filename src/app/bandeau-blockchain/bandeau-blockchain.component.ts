import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bandeau-blockchain',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bandeau-blockchain.component.html',
  styleUrls: ['./bandeau-blockchain.component.css']
})
export class BandeauBlockchainComponent implements OnInit {
  info: string = "⛓️ Chargement des données blockchain...";
  private apiUrl = 'https://api.r4v3chainz.com/blockchain-status';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchBlockchainData();
    this.setupAutoRefresh();
  }

  private fetchBlockchainData() {
    this.http.get<any>(this.apiUrl)
      .subscribe({
        next: (data) => {
          this.info = `⛓️ Blockchain synchronisée - 
            ${data.blocks} blocs | 
            ${data.pendingTransactions} transactions en attente | 
            Dernier bloc : ${this.formatDate(data.lastBlockTimestamp)}`;
        },
        error: () => {
          this.info = "❌ Erreur de connexion à la blockchain";
        }
      });
  }

  private setupAutoRefresh() {
    interval(30000) // Rafraîchit toutes les 30 secondes
      .subscribe(() => this.fetchBlockchainData());
  }

  private formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
