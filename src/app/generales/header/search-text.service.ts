import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchTextService {

  @Output() searchText : EventEmitter<string>;
  constructor() {
    this.searchText = new EventEmitter();
  }

  emitSearchText(text : string){
    this.searchText.emit(text);
  }
}
