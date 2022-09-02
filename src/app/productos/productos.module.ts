import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ProductoComponent } from './producto/producto.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    ListadoProductosComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class ProductosModule { }
