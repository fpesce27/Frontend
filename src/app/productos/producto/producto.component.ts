import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ProductoServiceService } from 'src/app/carrito/agregarAlCarritoService/producto-service.service';
import { Producto } from 'src/app/generales/apiService/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoComponent implements OnInit {

  @Input() producto !: Producto;
  cant : number

  constructor(
    private productoAAgregar : ProductoServiceService
  ) {
    this.cant = 0;
   }

  ngOnInit(): void {
  }

  getUrl(){
    return "url(" + this.producto.img + ")";
  }

  agregarACarrito(){
    this.productoAAgregar.agregarProducto(this.producto);
  }

}
