import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = environment.apiProductos;

  constructor(
    private http : HttpClient
  ) { }

  public productosGet(page : number){
    return this.http.get(this.url + "/productoes" + "?size=8&page=" + page);
  }
}
