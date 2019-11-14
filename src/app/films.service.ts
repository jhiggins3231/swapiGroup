import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class FilmsService {
  
  People = `https://swapi.co/api/people/`;
  Films = 'https://swapi.co/api/films/';
  Starships = 'https://swapi.co/api/starships/';
  // dbUrl = 'https://swapi.co/api/films/'

  constructor(
    private http: HttpClient
  ) { }

  getFilms(){
    return this.http.get(this.Films)
  }
  getPeople(){
    return this.http.get(this.People)
  }
  getStarships(){
    return this.http.get(this.Starships)
  }
}
