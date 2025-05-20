import { Component, inject } from '@angular/core';
import { CarritoItemComponent } from "./ui/carrito-item/carrito-item.component";
import { CarritoEstadoService } from '../shared/acceso-datos/carrito-estado-service';
import { ArticuloCarrito } from '../shared/interfaces/producto.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [CarritoItemComponent, CurrencyPipe],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export default class CarritoComponent {
  estado = inject(CarritoEstadoService).estado;

  onRemove(id: number) {
    this.estado.eliminar(id);
  }

  onIncrease(producto: ArticuloCarrito) {
    this.estado.actualizar({
      producto: producto.producto,
      cantidad: producto.cantidad + 1,
    });
  }

  onDecrease(producto: ArticuloCarrito) {
    this.estado.actualizar({
      ...producto,
      cantidad: producto.cantidad - 1,
    });
  }

  finalizarCompra(event: MouseEvent) {
    if (this.estado.productos().length === 0) {
      event.preventDefault();
      return;
    }
  }
}
