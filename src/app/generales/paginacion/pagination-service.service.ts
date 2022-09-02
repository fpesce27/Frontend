import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationServiceService {

  @Output() pagina : EventEmitter<number>;
  @Output() limites : EventEmitter<boolean>;

  constructor() {
    this.pagina = new EventEmitter();
    this.limites = new EventEmitter();
  }

  siguientePagina(page : number){
    this.pagina.emit(page + 1);
  }

  anteriorPagina(page : number){
    this.pagina.emit(page - 1);
  }

  ultimaPagina(esUltimaPagina : boolean){
    this.limites.emit(esUltimaPagina);
  }
}
