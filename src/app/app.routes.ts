import { Routes } from '@angular/router';
import { BandeauAccueilComponent } from './bandeau-accueil/bandeau-accueil.component';

export const routes: Routes = [
  { path: '', component: BandeauAccueilComponent },
  { path: '**', redirectTo: '' }
];
