import { Component, input, output } from '@angular/core';
import { ArticuloCarrito } from '../../../shared/interfaces/producto.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carrito-item',
  imports: [CurrencyPipe],
  templateUrl: './carrito-item.component.html',
  styleUrl: './carrito-item.component.scss'
})
export class CarritoItemComponent {

  
  productoCarritoItem = input.required<ArticuloCarrito>();

  onRemove = output<number>();

  onIncrease = output<ArticuloCarrito>();

  onDecrease = output<ArticuloCarrito>();
}
