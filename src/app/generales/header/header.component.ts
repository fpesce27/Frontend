import { ChangeDetectionStrategy, Component, OnInit, Output } from '@angular/core';
import { SearchTextService } from './search-text.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {


  constructor(
    public search : SearchTextService
  ) { }

  ngOnInit(): void {
  }

  buscar(){
    this.search.searchText.emit((<HTMLInputElement>document.getElementById("search")).value);
    console.log((<HTMLInputElement>document.getElementById("search")).value);
  }
}
