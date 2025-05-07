import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  threshold: number;
  feeReduction: string;
  cashback: string;
}

@Component({
  selector: 'app-parrainage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parrainage.component.html',
  styleUrls: ['./parrainage.component.css']
})
export class ParrainageComponent {



  showModal = false; // Nouvelle propriété pour contrôler la visibilité

  open() {
    this.showModal = true;
  }

  close() {
    this.showModal = false;
  }
  @Output() closed = new EventEmitter<void>();

  
  referralCount = 0; // À connecter à ton backend
  referralLink = 'https://r4v3chainz.app/register?ref=TON_CODE';
  copied = false;

  benefits: Benefit[] = [
    { threshold: 0, feeReduction: '0.0001%', cashback: '0%' },
    { threshold: 1, feeReduction: '0.1%', cashback: '0%' },
    { threshold: 12, feeReduction: '0.05%', cashback: '0%' },
    { threshold: 26, feeReduction: '0.09%', cashback: '0%' },
    { threshold: 28, feeReduction: '0.001%', cashback: '0%' },
    { threshold: 31, feeReduction: '0.005%', cashback: '0%' },
    { threshold: 43, feeReduction: '0.009%', cashback: '0%' },
    { threshold: 53, feeReduction: '0.0001%', cashback: '0%' },
    { threshold: 65, feeReduction: '0.0005%', cashback: '0%' },
    { threshold: 73, feeReduction: '0.0009%', cashback: '0%' },
    { threshold: 83, feeReduction: '0.00001%', cashback: '0%' },
    { threshold: 93, feeReduction: '0.00005%', cashback: '0%' },
    { threshold: 183, feeReduction: '0.0000001%', cashback: '0.0000001%' },
    // ... Ajoute tous les autres paliers ici
  ];

  get currentBenefit(): Benefit {
    return [...this.benefits]
      .reverse()
      .find(b => this.referralCount >= b.threshold) || this.benefits[0];
  }

  get nextThreshold(): number | string {
    const next = this.benefits.find(b => b.threshold > this.referralCount);
    return next ? next.threshold : 'Max';
  }

  get progressPercentage(): number {
    if (typeof this.nextThreshold === 'string') return 100;
    return (this.referralCount / (this.nextThreshold as number)) * 100;
  }

  copyReferralLink() {
    navigator.clipboard.writeText(this.referralLink);
    this.copied = true;
    setTimeout(() => (this.copied = false), 1500);
  }
}
