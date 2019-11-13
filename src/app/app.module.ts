import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { FilmsComponent } from './films/films.component';
import { ShipsComponent } from './ships/ships.component';
import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    FilmsComponent,
    ShipsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
