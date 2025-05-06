import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-pair',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pair.component.html',
  styleUrls: ['./pair.component.css'],
  animations: [
    trigger('slideInOut', [
      state('collapsed', style({ left: '-240px' })),
      state('expanded', style({ left: '15px' })),
      transition('* <=> *', animate('300ms ease-out'))
    ])
  ]
})
export class PairComponent {
onMouseEnter() {
throw new Error('Method not implemented.');
}
onMouseLeave() {
throw new Error('Method not implemented.');
}
isCollapsed: any;
toggleCollapse() {
throw new Error('Method not implemented.');
}
pairs: any;
  // ... (gardez le reste du code inchangé)
}
