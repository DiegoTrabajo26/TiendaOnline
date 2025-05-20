import { Injectable, inject } from '@angular/core';
import { Producto } from '../../shared/interfaces/producto.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductosService } from './productos.service';
import { Observable, map, switchMap } from 'rxjs';

interface State {
  producto: Producto | null;
  estado: 'Cargando' | 'Correcto' | 'Error';
}

@Injectable()
export class ProductoDetalleService {
    private productosService = inject(ProductosService);

    private initialState: State = {
        producto: null,
        estado: 'Cargando' as const,
    };

    estado = signalSlice({
    initialState: this.initialState,
    actionSources: {
      getById: (_state, $: Observable<string>) =>
        $.pipe(
          switchMap((id) => this.productosService.getProducto(id)),
          map((data) => ({ producto: data, estado: 'Correcto' as const })),
        ),
    },
  });

}