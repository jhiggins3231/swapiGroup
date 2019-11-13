import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
useBtn = false;
  constructor(
    private filmsService: FilmsService
  ) {
    setTimeout(() => {
      this.useBtn = true;
    }, 4000)    
   }
  ngOnInit() {
  }

}
