import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { Movie } from 'src/app/core/movie.model';
import { MovieService } from 'src/app/core/movie.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  movies: Movie[];
  // USED BY ORDERBY FUNCTION
  type: string = 'dates';
  ascendingDates = false;
  ascendingTitles = true;
  ascendingRatings = true;

  constructor(
    private titleService: Title, 
    private metaService: Meta,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    // SET PAGETITLE AND META
    this.titleService.setTitle('Liste de films à regarder | Watchlist');
    this.metaService.addTags([
      {name: 'description', content: 'Recherche un nouveau film à regarder ou sélectionne en un dans ta liste.'},
    ]);
    // GET MOVIE
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.orderBy();
    })
  }

  movieAdded() {
    // Keep the current order when adding a new movie
    switch(this.type) {
      case 'dates':
        this.ascendingDates = !this.ascendingDates;
        break;
      case 'titles':
        this.ascendingTitles = !this.ascendingTitles;
        break;
      case 'ratings':
        this.ascendingRatings = !this.ascendingRatings;
        break;
    }
    this.orderBy();
  }

  newOrder(newType: string) {
    this.type = newType;
    this.orderBy();
  }

  orderBy() {
    switch(this.type) {
      case 'dates': {
        this.ascendingTitles = true;
        this.ascendingRatings = true;
        if (this.ascendingDates) {
          this.movies.sort((a, b) => a.createdAt - b.createdAt);
          this.ascendingDates = !this.ascendingDates;
        } else {
          this.movies.sort((a, b) => b.createdAt - a.createdAt);
          this.ascendingDates = !this.ascendingDates;
        }
        break;
      }
      case 'titles': {
        this.ascendingDates = false;
        this.ascendingRatings = true;
        if (this.ascendingTitles) {
          this.movies.sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            } else if (a.title > b.title) {
              return 1;
            } else {
              return 0;
            }
          });
          this.ascendingTitles = !this.ascendingTitles;
        } else {
          this.movies.sort((a, b) => {
            if (a.title < b.title) {
              return 1;
            } else if (a.title > b.title) {
              return -1;
            } else {
              return 0;
            }
          });
          this.ascendingTitles = !this.ascendingTitles;
        }
        break;
      }
      case 'ratings': {
        this.ascendingDates = false;
        this.ascendingTitles = true;
        if (this.ascendingRatings) {
          this.movies.sort((a, b) => b.imdbRating - a.imdbRating);
          this.ascendingRatings = !this.ascendingRatings;
        } else {
          this.movies.sort((a, b) => a.imdbRating - b.imdbRating);
          this.ascendingRatings = !this.ascendingRatings;
        }
        break;
      }
    }
  }
}
