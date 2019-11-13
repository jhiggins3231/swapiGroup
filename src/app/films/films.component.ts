import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: any = [];
  ships: any = [];
  person: any = [];

  constructor(
    private filmsService: FilmsService
  ) { }

  showFilms() {
    this.filmsService.getFilms()
      .subscribe( film => {
        this.films = film
        this.films = this.films.results
        console.log(this.films)
      })
  }

  showShips() {
    this.filmsService.getShips()
      .subscribe( ship => {
        this.ships = ship
        this.ships = this.ships.results
        console.log(this.ships)
      })
  }

  showPeople() {
    this.filmsService.getPeople()
      .subscribe( people => {
        this.person = people
        this.person = this.person.results
        console.log(this.person)
      })
  }

  ngOnInit() {
  }

}
