import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-faucet',
  standalone: true,
  imports: [CommonModule], // <-- Ajoute ceci
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.css'],
  template: `
    <span>{{ value | number:'1.15-15' }} R4V3</span>
    <button class="claim-btn" (click)="claim()">CLAIM!</button>
  `,
  styles: [`
    span { margin-right: 1rem; }
    .claim-btn { margin-left: 1rem; }
  `]
})
export class FaucetComponent implements OnInit, OnDestroy {
  value = 0.000000000000001;
  private interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.value += 0.000000000000001;
    }, 1);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  claim() {
    // Appel API pour claim, reset value, etc.
  }
}
