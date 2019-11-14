import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  searchParam: any = 'This lives in films.service'

  filmUrl = `https://swapi.co/api/films/?search=${this.searchParam}`
  shipUrl = `https://swapi.co/api/starships/?search=${this.searchParam}`
  peopleUrl = `https://swapi.co/api/people/?search=${this.searchParam}`

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
