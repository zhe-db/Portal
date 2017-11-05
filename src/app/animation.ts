import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('in', style({opacity: 1, transform: 'translateX(0)'})),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.5s ease-in')
    ]),
    transition('* => void', [
      style({
        opacity: 0,
        transform: 'translateY(-100%)'
      }),
      animate('0.4s ease-out')
    ])
  ]);
