import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { FilmsComponent } from './films/films.component';
import { ShipsComponent } from './ships/ships.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    FilmsComponent,
    ShipsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
