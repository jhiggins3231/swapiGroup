import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  test: any = 'Test String';
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
  ngOnInit() {
  }

}
