import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  test: any = 'Test String'
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
        console.log('These are my films: ', this.films)
      })
  }

  showShips() {
    this.filmsService.getShips()
      .subscribe( ship => {
        this.ships = ship
        this.ships = this.ships.results
        console.log('These are my ships:', this.ships)
      })
  }

  showPeople() {
    this.filmsService.getPeople()
      .subscribe( people => {
        this.person = people
        this.person = this.person.results
        console.log('These are my people:', this.person)
      })
  }

  logBinding(){
    console.log(this.test)
  }

  ngOnInit() {
  }

}
