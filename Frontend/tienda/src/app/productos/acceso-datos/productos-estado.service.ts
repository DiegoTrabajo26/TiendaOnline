import { inject, Injectable } from "@angular/core";
import { Producto } from "../../shared/interfaces/producto.interface";
import { ProductosService } from "./productos.service";
import { catchError, map, Observable, of, startWith, Subject, switchMap } from "rxjs";
import { signalSlice } from 'ngxtension/signal-slice';

interface State {
  productos: Producto[];
  estado: 'Cargando' | 'Correcto' | 'Error';
  pagina: number
}

@Injectable()
export class ProductosEstadoService {  
  private productosService = inject(ProductosService);

  private initialState: State = {
    productos: [],
    estado: 'Cargando' as const,
    pagina : 1,
   
  };

    
  cambiarPagina$ = new Subject<number>();

 
  CargarProductos$ = this.cambiarPagina$.pipe(
    startWith(1),
    switchMap((pagina) => this.productosService.getProductos(pagina)),
    map((productos) => ({ productos, estado: 'Correcto' as const })),
    catchError(() => {
      return of({
        productos: [],
        estado: 'Error' as const,
      });
    }),
  );

  estado = signalSlice({
    initialState: this.initialState,
    sources: [
      this.cambiarPagina$.pipe(
        map((pagina) => ({ pagina, estado: 'Cargando' as const })),
      ),
      this.CargarProductos$,
    ],
    
  });

}