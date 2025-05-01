import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pair',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pair.component.html',
  styleUrls: ['./pair.component.css']
})
export class PairComponent {
  pairs: string[] = [];

  private nicknames = [
    'CyberWolf',
    'NeonFox',
    'GlitchCat',
    'PixelGhost',
    'BitRunner',
    'SynthWave',
    'ZeroByte',
    'DarkPulse',
    'NovaCore',
    'VaporKid'
  ];

  constructor() {
    this.generatePairs();
  }

  generatePairs() {
    // Mélange et prend 4 nicknames aléatoires
    this.pairs = this.nicknames
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  }
}

