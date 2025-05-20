import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./carrito.component'),
  },
] as Routes;