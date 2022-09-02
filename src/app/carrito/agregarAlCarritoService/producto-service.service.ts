import { EventEmitter, Injectable, Output } from '@angular/core';
import { Producto } from 'src/app/generales/apiService/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  productos : Producto[];
  cant : number
  @Output() productoSeleccionado : EventEmitter<Producto[]>;

  constructor() {
    this.productoSeleccionado = new EventEmitter();
    this.productos = [];
    this.cant = 0;
  }

  agregarProducto(producto : Producto){
    this.productos.push(producto);
    this.cant++;
  }

  seleccionarProducto(){
    this.productoSeleccionado.emit(this.productos);
  }

  eliminarProducto(producto : Producto){
    this.productos.splice(this.productos.indexOf(producto), 1);
  }
}
