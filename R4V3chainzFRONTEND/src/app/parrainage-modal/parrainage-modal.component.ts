import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParrainageComponent } from '../parrainage/parrainage.component';

@Component({
  selector: 'app-parrainage-modal',
  standalone: true,
  imports: [CommonModule, ParrainageComponent],
  templateUrl: './parrainage-modal.component.html',
  styleUrls: ['./parrainage-modal.component.css']
})
export class ParrainageModalComponent {
  @Output() closed = new EventEmitter<void>();
  
  close() {
    this.closed.emit();
  }
}
