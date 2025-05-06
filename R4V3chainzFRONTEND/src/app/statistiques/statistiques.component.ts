import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { slideInOut } from '../animations';

@Component({
  selector: 'app-statistiques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css'],
  animations: [slideInOut] // Utilisation de l'animation importée
})
export class StatistiquesComponent {
  @ViewChild('statistiquesContainer') el!: ElementRef<HTMLElement>;
  blocs = 0;
  transactions = 0;
  tempsParBloc = '??H??';
  isCollapsed = true;

  constructor(private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if(this.isCollapsed) {
      this.isCollapsed = false;
      this.renderer.setStyle(this.el.nativeElement, 'z-index', '1001');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if(!this.isCollapsed) {
      this.isCollapsed = true;
      this.renderer.setStyle(this.el.nativeElement, 'z-index', '1000');
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
