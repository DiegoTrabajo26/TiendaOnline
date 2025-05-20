export interface Producto {
  id: number;
  categoria: string;
  descripcion: string;
  imagen: string;
  precio: number;
  calificacion_tasa: number;
  calificacion_cantidad: number;
  titulo: string;
}

export interface ArticuloCarrito {
  producto: Producto;
  cantidad: number;
}
