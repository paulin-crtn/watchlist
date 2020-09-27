import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

import { MoviesResponse, Movie } from 'src/app/core/movie.model';
import { MovieService } from 'src/app/core/movie.service';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  @Output() movieAdded = new EventEmitter<Event>();
  movies: Movie[];
  inputMovies: FormControl = new FormControl();
  moviesResponse: any = [];
  noResult = false;

  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.inputMovies.valueChanges.pipe(
      debounceTime(800), 
      distinctUntilChanged(), 
      filter(query => query !== '')
    ).subscribe(value => this.requestMovies(value));
  }

  requestMovies(value: string) {
    this.noResult = false;
    this.moviesResponse = [];
    this.movieService.requestMovies(value)
    .subscribe(
      (response: any) => {
        if (response.Response !== 'False') {
          response.Search.forEach((element: MoviesResponse) => this.moviesResponse.push(element));
        } else {
          this.noResult = true;
        }
      },
      error => console.log(error),
      () => console.log('Movies suggested')
    );
  }

  requestMovie(value: string) {
    this.moviesResponse = [];
    this.movieService.requestMovie(value)
    .subscribe(
      (response: any) => {
        let movie = {
          // Avoid Case issue
          title: response.Title,
          year: response.Year,
          runtime: response.Runtime,
          genre: response.Title,
          director: response.Director,
          actors: response.Actors,
          plot: response.Plot,
          poster: response.Poster,
          imdbRating: response.imdbRating,
        }
        this.movieService.addMovie(movie);
        this.movieAdded.emit();
        this.inputMovies.setValue('');
      },
      error => console.log(error),
      () => console.log('Movie added')
    );
  }

}
