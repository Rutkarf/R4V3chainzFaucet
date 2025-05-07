import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  donateAddress: string = 'r4v3_donate_1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik9olp0';
  copied: boolean = false;

  copyAddress() {
    navigator.clipboard.writeText(this.donateAddress)
      .then(() => {
        this.copied = true;
        setTimeout(() => this.copied = false, 1500);
      })
      .catch(err => {
        console.error('Erreur lors de la copie :', err);
      });
  }
}
