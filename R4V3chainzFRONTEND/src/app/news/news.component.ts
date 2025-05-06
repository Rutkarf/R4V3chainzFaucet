import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  currentIndex = 0;
  news = [
    { date: '30/04/2025', message: '🚀 LANCEMENT OFFICIEL DE R4V3CHAINZ' },
    { date: '28/04/2025', message: '✨ NOUVELLE INTERFACE CYBERPUNK' },
    { date: '25/04/2025', message: '🔒 MISE À JOUR DE SÉCURITÉ MASSIVE' }
  ];

  @ViewChild('navSound') navSound!: ElementRef<HTMLAudioElement>;

  prev() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.news.length - 1;
    this.playSound();
  }

  next() {
    this.currentIndex = this.currentIndex < this.news.length - 1 ? this.currentIndex + 1 : 0;
    this.playSound();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.playSound();
  }

  private playSound() {
    if (this.navSound?.nativeElement) {
      this.navSound.nativeElement.currentTime = 0;
      this.navSound.nativeElement.play();
    }
  }
}
