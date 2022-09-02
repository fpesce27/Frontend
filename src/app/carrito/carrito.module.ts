import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { ProductosCarritoComponent } from './productos-carrito/productos-carrito.component';
import { ProductoComponent } from './producto/producto.component';


@NgModule({
  declarations: [
    ProductosCarritoComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule
  ]
})
export class CarritoModule { }
