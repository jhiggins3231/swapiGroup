import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';


@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  starships: any = [];
  selected = 'option2';

  constructor(
  private filmsService: FilmsService
  ) { }

  showStarships() {
    this.filmsService.getStarships()
      .subscribe( starship => {
        this.starships = starship
        console.log(this.starships)
      })
  }
  ngOnInit() {
  }

}
