import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosCarritoComponent } from './productos-carrito/productos-carrito.component';

const routes: Routes = [
  {path: '', component: ProductosCarritoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
