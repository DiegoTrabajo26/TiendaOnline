import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../shared/acceso-datos/base-http.service';
import { Observable } from 'rxjs';
import { Producto } from '../../shared/interfaces/producto.interface';


const LIMITE = 8;

@Injectable({ providedIn: 'root' })
export class ProductosService extends BaseHttpService {
  getProductos(pagina: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}productos`, {
      params: {
        limit: (pagina * LIMITE).toString(),
      },
    });
  }

  getProducto(id: string): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}productos/${id}`);
  }

}