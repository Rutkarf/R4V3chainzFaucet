import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { slideInOut } from '../animations';

@Component({
  selector: 'app-pair',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pair.component.html',
  styleUrls: ['./pair.component.css'],
  animations: [slideInOut]
})
export class PairComponent {
  pairs: string[] = [];
  isCollapsed = true;

  private nicknames = [
    'CyberWolf', 'NeonFox', 'GlitchCat', 'PixelGhost',
    'BitRunner', 'SynthWave', 'ZeroByte', 'DarkPulse',
    'NovaCore', 'VaporKid'
  ];

  constructor() { 
    this.generatePairs();
  }

  onMouseEnter() {
    this.isCollapsed = false;
  }

  onMouseLeave() {
    this.isCollapsed = true;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  generatePairs() {
    this.pairs = [...this.nicknames]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }
}
