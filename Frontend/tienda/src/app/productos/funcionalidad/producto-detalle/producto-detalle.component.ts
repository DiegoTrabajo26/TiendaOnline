import { Component, effect, inject, input } from '@angular/core';
import { ProductoDetalleService } from '../../acceso-datos/producto-detalle-estado.service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-producto-detalle',
  imports: [CurrencyPipe],
  templateUrl: './producto-detalle.component.html',
  providers:[ProductoDetalleService]
})
export  default class ProductoDetalleComponent {
addToCart() {
throw new Error('Method not implemented.');
}
  productoDetalleEstado = inject(ProductoDetalleService).estado;

  id = input.required<string>();

  private activatedRoute = inject(ActivatedRoute)

  constructor() {
    effect(() => {
      this.productoDetalleEstado.getById(this.id());
    });
  }
}