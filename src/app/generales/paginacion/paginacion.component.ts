import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PaginationServiceService } from './pagination-service.service';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginacionComponent implements OnInit {

  primeraPagina : boolean = true;
  ultimaPagina : boolean = false;
  page : number = 0;

  constructor(
    private pagination : PaginationServiceService,
    private cdr : ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  siguientePagina(){
    this.pagination.siguientePagina(this.page);
    this.page++;

    this.primeraPagina = false;

    this.pagination.limites.subscribe((esUltimaPagina : boolean) => {
      this.ultimaPagina = esUltimaPagina;
      this.cdr.detectChanges();
    })
  }

  anteriorPagina(){
    if (this.page > 0) {
      this.pagination.anteriorPagina(this.page);
      this.page--;
    }

    if (this.page == 0) {
      this.primeraPagina = true;
    }

    this.ultimaPagina = false;
  }
}
