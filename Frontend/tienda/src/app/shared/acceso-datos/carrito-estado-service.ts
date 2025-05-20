import { Injectable, Signal, inject } from '@angular/core';
import { ArticuloCarrito } from '../interfaces/producto.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { AlmacenamientoService } from './almacenamiento.service';
import { Observable, map } from 'rxjs';

interface State {
    productos: ArticuloCarrito[];
    cargado: boolean;
}

@Injectable({
    providedIn: 'root',
})

export class CarritoEstadoService {
    private almacenamientoService = inject(AlmacenamientoService);


    private initialState: State = {
        productos: [],
        cargado: false,
    };


    cargarProductos$ = this.almacenamientoService
        .cargarProducto()
        .pipe(map((productos) => ({ productos, cargado: true })));


    estado = signalSlice({
        initialState: this.initialState,
        sources: [this.cargarProductos$],
        selectors: (estado) => ({
            count: () =>
                estado().productos.reduce((acc, producto) => acc + producto.cantidad, 0),
            precio: () => {
                return estado().productos.reduce(
                    (acc, producto) => acc + producto.producto.precio * producto.cantidad,
                    0,
                );
            },
        }),
        actionSources: {
            agregar: (estado, action$: Observable<ArticuloCarrito>) =>
                action$.pipe(map((producto) => this.agregar(estado, producto))),
            eliminar: (estado, action$: Observable<number>) =>
                action$.pipe(map((id) => this.eliminar(estado, id))),
            actualizar: (estado, action$: Observable<ArticuloCarrito>) =>
                action$.pipe(map((producto) => this.actualizar(estado, producto))),
        },
        effects: (estado) => ({
            load: () => {
                console.log(estado.productos());
            },
        })
    });


    private agregar(estado: Signal<State>, producto: ArticuloCarrito) {
        const enCarrito = estado().productos.find(
            (productoEnCarrito) => productoEnCarrito.producto.id === producto.producto.id,
        );

        if (!enCarrito) {
            return {
                productos: [...estado().productos, { ...producto, cantidad: 1 }],
            };
        }

        enCarrito.cantidad += 1;
        return {
            productos: [...estado().productos],
        };
    };

    private eliminar(estado: Signal<State>, id: number) {
        return {
            productos: estado().productos.filter((producto) => producto.producto.id !== id),
        };
    }

    private actualizar(state: Signal<State>, producto: ArticuloCarrito) {
        const productos = state().productos.map((productoEnCarrito) => {
            if (productoEnCarrito.producto.id === producto.producto.id) {
                return { ...productoEnCarrito, cantidad: producto.cantidad };
            }

            return productoEnCarrito;
        });

        return { productos };
    }
}
