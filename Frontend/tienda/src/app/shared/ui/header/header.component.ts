import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CarritoEstadoService } from '../../acceso-datos/carrito-estado-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  carritoEstado = inject(CarritoEstadoService).estado;
}
