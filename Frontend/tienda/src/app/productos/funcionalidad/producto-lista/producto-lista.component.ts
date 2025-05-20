import { Component, inject } from '@angular/core';
import { ProductosEstadoService } from '../../acceso-datos/productos-estado.service';
import { ProductoTarjetaComponent } from '../../ui/producto-tarjeta/producto-tarjeta.component';
import { CarritoEstadoService } from '../../../shared/acceso-datos/carrito-estado-service';
import { Producto } from '../../../shared/interfaces/producto.interface';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [ProductoTarjetaComponent],
  templateUrl: './producto-lista.component.html',
  styles: ``,
  providers: [ProductosEstadoService]
})
export default class ProductoListaComponent {

  productosEstado = inject(ProductosEstadoService);

  carritoEstado = inject(CarritoEstadoService).estado;


  cambiarPagina() {
    const pagina = this.productosEstado.estado.pagina() + 1;
    this.productosEstado.cambiarPagina$.next(pagina);
  }

  arregarAlCarrito(producto: Producto) {
    this.carritoEstado.agregar({
      producto,
      cantidad: 1 ,
    }); 
  }

}
