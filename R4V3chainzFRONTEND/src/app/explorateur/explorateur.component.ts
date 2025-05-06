import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { slideInOut } from '../animations';

@Component({
  selector: 'app-explorateur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './explorateur.component.html',
  styleUrls: ['./explorateur.component.css'],
  animations: [slideInOut]
})
export class ExplorateurComponent {
  @ViewChild('explorateurContainer') el!: ElementRef<HTMLElement>;
  searchHash = '';
  result: string | null = null;
  isCollapsed = true;

  constructor(private renderer: Renderer2) {}

  @HostListener('mouseenter') 
  onMouseEnter() {
    if(this.isCollapsed) {
      this.isCollapsed = false;
      this.renderer.setStyle(this.el.nativeElement, 'z-index', '1001');
    }
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    if(!this.isCollapsed) {
      this.isCollapsed = true;
      this.renderer.setStyle(this.el.nativeElement, 'z-index', '1000');
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  checkHash() {
    if (this.searchHash.trim().length === 0) {
      this.result = null;
      return;
    }
    this.result = this.searchHash.startsWith('a')
      ? '✅ Hash trouvé dans la blockchain !'
      : '❌ Hash introuvable.';
  }
}
