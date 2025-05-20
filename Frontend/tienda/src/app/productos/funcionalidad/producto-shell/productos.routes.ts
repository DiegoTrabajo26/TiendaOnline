import { Routes } from '@angular/router';

export default[
    {path: '',loadComponent: () => import('../producto-lista/producto-lista.component'),},
    {
        path:'productos/:id',
        loadComponent:() => import('../producto-detalle/producto-detalle.component'),
        
    }
] as Routes;
