import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
    
  baseUrl = `https://swapi.co/api/`

  filmUrl = 'https://swapi.co/api/films/'
  shipUrl = 'https://swapi.co/api/starships'
  peopleUrl = 'https://swapi.co/api/people'

  constructor(
    private http: HttpClient
  ) { }

  getFilms(){
    return this.http.get(this.filmUrl)
  }

  getShips(){
    return this.http.get(this.shipUrl)
  }

  getPeople(){
    return this.http.get(this.peopleUrl)
  }
}
