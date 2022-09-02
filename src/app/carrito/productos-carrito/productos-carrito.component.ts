import { ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/generales/apiService/producto';
import { ProductoServiceService } from '../agregarAlCarritoService/producto-service.service';

@Component({
  templateUrl: './productos-carrito.component.html',
  styleUrls: ['./productos-carrito.component.css']
})
export class ProductosCarritoComponent implements OnInit {

  @Output() productos : Producto[];
  total_pesos : number
  total_dolar : number

  constructor(
    private productoAAgregar : ProductoServiceService
  ) {
    this.productos = [];
    this.total_pesos = 0;
    this.total_dolar = 0;
  }

  ngOnInit(): void {
    this.carrito();
    this.precioFinal();
  }

  carrito(){
    this.productos = this.productoAAgregar.productos;
    console.log(this.productos);
  }

  precioFinal(){
    for (let index = 0; index < this.productos.length; index++) {
      this.total_pesos += this.productos[index].precio_en_pesos;
    }

    for (let index = 0; index < this.productos.length; index++) {
      this.total_dolar += this.productos[index].precio_en_dolares;
    }
  }

  realizarCompra(){
    this.productos = [];
    this.productoAAgregar.productos = [];
    this.total_pesos = 0;
    this.total_dolar = 0;
    this.productoAAgregar.cant = 0;
  }
}
