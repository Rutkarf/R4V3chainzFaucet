// src/app/animations.ts
import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
    state('collapsed', style({ 
      transform: 'translateX(-90%)', // Au lieu de -100%
      opacity: 0.3 // Légère visibilité
    })),
    state('expanded', style({ 
      transform: 'translateX(0)', 
      opacity: 1 
    })),
    transition('collapsed <=> expanded', [
      animate('300ms cubic-bezier(0.68, -0.55, 0.27, 1.55)')
    ])
  ]);
  
  