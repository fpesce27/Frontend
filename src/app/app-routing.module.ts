import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)},
  {path: 'carrito', loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
