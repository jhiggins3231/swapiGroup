import { Component, OnInit, Input } from '@angular/core';
import { FilmsService } from '../films.service'
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  people;
  ships;
  films;
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
        console.log(this.filmsService.peopleUrl + this.people)
      })
  }

  showShip() {
    this.filmsService.getShips()
      .subscribe( ship => {
        this.ship = ship
        this.ship = this.ship.results
        console.log(ship)
        console.log(this.filmsService.shipUrl + this.ships)
      })
  }

  showFilm() {
    this.filmsService.getFilms()
    .subscribe( film => {
      this.film = film
      this.film = this.film.results[0]
      console.log(film)
      console.log(this.filmsService.filmUrl + this.films)
      })
  }

}