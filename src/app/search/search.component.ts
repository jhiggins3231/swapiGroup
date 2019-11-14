import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  selected = '';
  films: any = [];
  peoples: any = [];
  starships: any = [];

  constructor(
    private filmsService: FilmsService
  ) { }

  showFilms() {
    this.filmsService.getFilms()
      .subscribe( film => {
        this.films = film
        console.log(this.films)
      })
  }
  showPeople() {
    this.filmsService.getPeople()
    .subscribe( people => {
      this.peoples = people
      console.log(this.peoples)
    })
  }
  showStarships() {
    this.filmsService.getStarships()
    .subscribe( starship => {
      this.starships = starship
      console.log(this.starships)
    })
  }
  ngOnInit() {
  }

}