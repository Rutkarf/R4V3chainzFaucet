import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statut',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.css']
})
export class StatutComponent {
  online: boolean = true;
  hauteur: number = 123456;
  team: string = 'R4V3 TEAM';
  mempool: number = 42;
  dernierBlockEarn: string = '0.00042 R4V3';
  dernierBlockTime: string = '30/04/2025 21:16';
}
