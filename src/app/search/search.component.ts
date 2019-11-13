import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private filmsService: FilmsService
  ) { }

  ngOnInit() {
    console.log(this.filmsService.searchParam)
  }

  logParam(){
    console.log(this.filmsService.searchParam)
  }

}
