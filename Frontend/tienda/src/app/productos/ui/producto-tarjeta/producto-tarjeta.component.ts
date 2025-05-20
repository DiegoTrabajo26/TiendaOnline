import { Component, input, output } from '@angular/core';
import { Producto } from '../../../shared/interfaces/producto.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-producto-tarjeta',
  imports: [RouterModule],
  templateUrl: './producto-tarjeta.component.html',
  styles: ``
})
export class ProductoTarjetaComponent {
  producto = input.required<Producto>();

  arregarAlCarrito = output<Producto>();

  agregar(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.arregarAlCarrito.emit(this.producto());
  }

}
