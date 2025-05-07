import { Component, ElementRef, Renderer2, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { slideInOut } from '../animations';

@Component({
  selector: 'app-statut',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.css'],
  animations: [slideInOut]
})
export class StatutComponent implements AfterViewInit {
  @ViewChild('statutContainer') el!: ElementRef<HTMLElement>;

  online: boolean = true;
  hauteur: number = 123456;
  team: string = 'R4V3 TEAM';
  mempool: number = 42;
  dernierBlockEarn: string = '0.00042 R4V3';
  dernierBlockTime: string = '30/04/2025 21:16';
  isCollapsed = true;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Optionnel : debug
    // console.log('Element initialisé :', this.el.nativeElement);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if(this.isCollapsed) {
      this.isCollapsed = false;
      if (this.el?.nativeElement) {
        this.renderer.setStyle(this.el.nativeElement, 'z-index', '1001');
      }
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if(!this.isCollapsed) {
      this.isCollapsed = true;
      if (this.el?.nativeElement) {
        this.renderer.setStyle(this.el.nativeElement, 'z-index', '1000');
      }
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
