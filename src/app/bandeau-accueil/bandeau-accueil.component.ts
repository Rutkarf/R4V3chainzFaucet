import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';

@Component({
  selector: 'app-bandeau-accueil',
  standalone: true,
  templateUrl: './bandeau-accueil.component.html',
  styleUrls: ['./bandeau-accueil.component.css']
})
export class BandeauAccueilComponent implements OnInit {
  message1: string = '';
  lastTransaction: string = '';
  userCount: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('fr-FR');
    this.message1 = `Bienvenue sur R4V3chainz ! 🚀 Dernière MESSAGE De mise à jour : ${formattedDate}`;
    this.fetchLastTransaction();
    this.fetchUserCount();
  }

  fetchLastTransaction() {
    this.http.get<any>('https://api.r4v3chainz.com/last-transaction')
      .subscribe(data => {
        this.lastTransaction = data.transactionHash || 'Aucune transaction récente';
      }, error => {
        this.lastTransaction = 'Erreur de récupération';
      });
  }

  fetchUserCount() {
    interval(5000).subscribe(() => {
      this.http.get<any>('https://api.r4v3chainz.com/user-count')
        .subscribe(data => {
          this.userCount = data.count || 0;
        }, error => {
          this.userCount = 0;
        });
    });
  }
}
