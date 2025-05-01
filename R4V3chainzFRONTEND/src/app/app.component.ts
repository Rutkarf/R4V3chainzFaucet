import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutGlobalComponent } from './layout-global/layout-global.component';
import { BandeauAccueilComponent } from "./bandeau-accueil/bandeau-accueil.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    LayoutGlobalComponent,
    BandeauAccueilComponent
],
  template: `
    <navbar></navbar>
    <app-bandeau-accueil></app-bandeau-accueil>
    <layout-global></layout-global>
  `,
})
export class AppComponent {}
