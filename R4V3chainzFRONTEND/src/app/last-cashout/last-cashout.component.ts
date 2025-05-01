import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-last-cashout',
  template: `
    <span>LastCashOut : {{ date }} ({{ hash }})</span>
  `
})
export class LastCashoutComponent {
  @Input() date: string = '30/04/2025';
  @Input() hash: string = '0x1234abcd...';
}
