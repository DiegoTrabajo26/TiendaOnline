import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArticuloCarrito } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class AlmacenamientoService {
  cargarProducto(): Observable<ArticuloCarrito[]> {
    const rawProductos = localStorage.getItem('productos');

    return of(rawProductos ? JSON.parse(rawProductos) : []);
  }

  guardaProducto(productos: ArticuloCarrito[]): void {
    localStorage.setItem('productos', JSON.stringify(productos));
  }
}