import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  person: any =[];
  film: any = [];
  ship: any = [];

  constructor(
    private filmsService: FilmsService
  ) { }

  ngOnInit() {
    console.log(this.filmsService.searchParam)
  }

  showPerson() {
    this.filmsService.getPeople()
      .subscribe( people => {
        this.person = people
        this.person = this.person.results
        console.log('This is my endpoint:', this.filmsService.peopleUrl)
      })
  }

  showShip() {
    this.filmsService.getPeople()
      .subscribe( ship => {
        this.ship = ship
        this.ship = this.ship.results
        console.log('This is my endpoint:', this.filmsService.shipUrl)
      })
  }

  showFilm() {
    this.filmsService.getPeople()
      .subscribe( film => {
        this.film = film
        this.film = this.film.results
        console.log('This is my endpoint:', this.filmsService.filmUrl)
      })
  }

}
