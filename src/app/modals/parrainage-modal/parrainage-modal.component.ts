import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parrainage-modal',
  standalone: true,
  templateUrl: './parrainage-modal.component.html',
  styleUrls: ['./parrainage-modal.component.css'],
  encapsulation: ViewEncapsulation.None // <-- À utiliser avec précaution !
})
export class ParrainageModalComponent {
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
