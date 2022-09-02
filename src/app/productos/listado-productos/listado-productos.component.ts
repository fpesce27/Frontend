import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from 'src/app/carrito/agregarAlCarritoService/producto-service.service';
import { ApiService } from 'src/app/generales/apiService/api.service';
import { SearchTextService } from 'src/app/generales/header/search-text.service';
import { PaginationServiceService } from 'src/app/generales/paginacion/pagination-service.service';

@Component({
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  page : number = 0;
  productos : any = [];
  searchText : string = "";

  constructor(
    private api : ApiService,
    private pagination : PaginationServiceService,
    public productosAAgregar : ProductoServiceService,
    private search : SearchTextService
  ) { }

  ngOnInit(): void {
    this.produtosGet();
    this.cambioDePagina();
    this.inicializarCantidad();
    this.search.searchText.subscribe((text : string) => {
      this.searchText = text;
    })
  }

  private produtosGet(){
    this.api.productosGet(this.page).subscribe((resultados : any) => {
      this.productos = resultados;
      this.api.productosGet(this.page + 1).subscribe((resultados : any) => {
        this.pagination.ultimaPagina(resultados.length == 0);
      })
    });
  }

  private cambioDePagina(){
    this.pagination.pagina.subscribe((page : number) => {
      this.page = page;
      this.produtosGet();
    })
  }

  enviarACarrito(){
    this.productosAAgregar.productoSeleccionado.emit(this.productosAAgregar.productos);
  }

  inicializarCantidad(){
    this.productos.forEach((element: { cantidad: number; }) => {
      element.cantidad = 1;
    });
  }
}
