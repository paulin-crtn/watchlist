import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MovieService } from './core/movie.service';

import { HomepageComponent } from './components/homepage/homepage.component';
import { MovieSearchComponent } from './components/homepage/movie-search/movie-search.component';
import { MovieListComponent } from './components/homepage/movie-list/movie-list.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MovieAddFormComponent } from './components/movie-add/movie-add-form/movie-add-form.component';
import { MovieInformationsComponent } from './components/movie-informations/movie-informations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieAddComponent,
    MovieAddFormComponent,
    MovieInformationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
