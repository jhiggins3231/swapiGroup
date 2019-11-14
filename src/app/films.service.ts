import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class FilmsService {
  searchParam: any;
  filmUrl = `https://swapi.co/api/films/?search=`
  shipUrl = `https://swapi.co/api/starships/?search=`
  peopleUrl = `https://swapi.co/api/people/?search=`

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
