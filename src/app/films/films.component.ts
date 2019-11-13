import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: any = [];

  constructor(
    private filmsService: FilmsService
  ) { }

  showFilms() {
    this.filmsService.getFilms()
      .subscribe( film => {
        this.films = film
        console.log(this.films)
      })
  }

  ngOnInit() {
  }

}
