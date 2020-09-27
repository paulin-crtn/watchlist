import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/core/movie.model';
import { MovieService } from 'src/app/core/movie.service';

@Component({
  selector: 'app-movie-informations',
  templateUrl: './movie-informations.component.html',
  styleUrls: ['./movie-informations.component.scss']
})
export class MovieInformationsComponent implements OnInit {
  movie: Movie;
  movieId: number;
  nextMovieId: number;
  previousMovieId: number;
  youtubeQuery: string;
  
  constructor(
    private titleService: Title, 
    private metaService: Meta,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Get parameter from route
      this.movieId = +params.id;      
      // Get movie from id
      this.movie = this.movieService.getMovie(this.movieId);
      // Set page title and meta description
      this.titleService.setTitle(`Informations sur ${this.movie.title} | Watchlist`);
      this.metaService.addTags([
        {name: 'description', content: `Retrouve le descriptif technique du film ${this.movie.title}.`},
      ]);
      // Set youtube query
      this.youtubeQuery = this.movie.title.replace(/ /g, '-').toLowerCase();
      // Set the navigation
      this.previousMovieId = this.movieService.previousMovieId(this.movieId);
      this.nextMovieId = this.movieService.nextMovieId(this.movieId);
    });
  }

  toggleViewed() {
    this.movie.viewed = !this.movie.viewed;
  }

  deleteMovie() {
    this.movieService.deleteMovie(this.movieId);
    this.router.navigate(['']);
  }
}
