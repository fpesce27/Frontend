import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/generales/apiService/producto';
import { ProductoServiceService } from '../agregarAlCarritoService/producto-service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoComponent implements OnInit {

  @Input() producto !: Producto;

  constructor(
    private productoAAgregar : ProductoServiceService
  ) { }

  ngOnInit(): void {
  }

  eliminarProducto(){
    this.productoAAgregar.eliminarProducto(this.producto);
  }
}
