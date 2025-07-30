import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion-modal',
  standalone: true,
  imports: [CommonModule, NgbModalModule, FormsModule],
  templateUrl: './connexion-modal.component.html',
  styleUrls: ['./connexion-modal.component.css']
})
export class ConnexionModalComponent {
  email = '';
  password = '';

  constructor(public activeModal: NgbActiveModal) {}

  login() {
    // Appelle ton service d'auth ici
    // Ferme la modal si succès
    this.activeModal.close({ email: this.email, password: this.password });
  }
}
