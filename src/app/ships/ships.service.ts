import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  dbUrl = `https://swapi.co/api/starships/`

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    return this.http.get(this.dbUrl)
  }
}