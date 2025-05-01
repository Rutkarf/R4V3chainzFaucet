import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donate-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donate-news.component.html',
  styleUrls: ['./donate-news.component.css']
})
export class DonateNewsComponent {
  donateAddress: string = 'r4v3_donate_1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik9olp0';
  copied: boolean = false;

  news: { date: string, message: string }[] = [
    { date: '30/04/2025', message: '🚀 Lancement officiel de R4V3chainz !' },
    { date: '28/04/2025', message: '✨ Nouvelle interface cyberpunk en ligne.' }
  ];

  copyAddress() {
    navigator.clipboard.writeText(this.donateAddress);
    this.copied = true;
    setTimeout(() => this.copied = false, 1500);
  }
}
