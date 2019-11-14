import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FilmsService } from '../films.service';
=======
import { FilmsService } from '../films.service'
>>>>>>> fbb84fb2768f53129494558d95f7be4ff2e39d1d

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