import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peoples: any = [];

  constructor(
    private filmsService: FilmsService
  ) { }

  showPeople() {
    this.filmsService.getPeople()
      .subscribe( people => {
        this.peoples = people
        console.log(this.peoples)
      })
  }
  ngOnInit() {
  }

}
