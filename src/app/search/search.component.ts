import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  people: string = '';
  starships: string = '';
  films: string = '';

  responseFilms: any;
  responseShips: any;
  responsetwo: any;

  searchParam: any;
  person: any = [];
  film: any;
  ship: any;

  peopleUrl = `https://swapi.co/api/people/?search=`
  shipUrl = `https://swapi.co/api/starships/?search=`
  filmUrl = `https://swapi.co/api/films/?search=`

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  showPerson(searchParam) {
    console.log()
    this.getPeople(this.searchParam)
      .subscribe( people => {
        console.log(people)
        this.person = people
        this.person = this.person.results
        console.log(this.person)
      })
  }

  getPeople(searchParam){
    return this.http.get(`${this.peopleUrl}${searchParam}`)
  }

  search() {
    this.http.get('https://swapi.co/api/people/?search=' + this.people)
    .subscribe((responsetwo) => {
      this.responsetwo = responsetwo;
      console.log(this.responsetwo)
    })
  }

  // showShip() {
  //   this.filmsService.getShips()
  //     .subscribe( ship => {
  //       this.ship = ship
  //       this.ship = this.ship.results
  //       console.log(ship)
  //       console.log(this.filmsService.shipUrl + this.ship)
  //     })
  // }

  getShips(){
    return this.http.get(`${this.shipUrl}${this.searchParam}`)
  }

  searchShips() {
    this.http.get('https://swapi.co/api/starships/?search=' + this.starships)
    .subscribe((responseShips) => {
      this.responseShips = responseShips;
      console.log(this.responseShips)
    })
  }
 
 

  // showFilm() {
  //   this.filmsService.getFilms()
  //     .subscribe( film => {
  //       this.film = film
  //       this.film = this.film.results
  //       console.log('This is my endpoint:', this.filmsService.filmUrl)
  //     })
  // }
  
  getFilms(){
    return this.http.get(`${this.filmUrl}${this.searchParam}`)
  }

  searchFilms() {
    this.http.get('https://swapi.co/api/films/?search=' + this.films)
    .subscribe((responseFilms) => {
      this.responseFilms = responseFilms;
      console.log(this.responseFilms)
    })
  }

}