import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-m4t3rfaucet',
  standalone: true,
  templateUrl: './m4t3rfaucet.component.html',
  styleUrls: ['./m4t3rfaucet.component.css']
})
export class M4t3rfaucetComponent implements OnInit, OnDestroy { // Nom corrigé
  faucetValue = 0.000000000000001;
  private interval: any;

  ngOnInit() {
    this.startIncrement();
  }

  ngOnDestroy() {
    this.stopIncrement();
  }

  private startIncrement() {
    this.interval = setInterval(() => {
      this.faucetValue += 0.000000000000001;
    }, 100); // Mieux pour les tests
  }

  private stopIncrement() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  formatm4t3rFaucetValue(value: number): string {
    return value.toFixed(15).replace(/\.?0+$/, '');
  }
  

  claimFaucet() {
    // Implémentez la logique de réclamation ici
    console.log('Claimed:', this.faucetValue);
    this.faucetValue = 0.000000000000001; // Réinitialisation exemple
  }
}
