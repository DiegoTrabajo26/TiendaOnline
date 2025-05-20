import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./productos/funcionalidad/producto-shell/productos.routes'),
  },


  
  { path: 'carrito', loadChildren: () => import('./carrito/carrito.routes') },
  {
    path: '**',
    redirectTo: '',
  },
];