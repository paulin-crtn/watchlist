import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MovieService } from 'src/app/core/movie.service';


@Component({
  selector: 'app-movie-add-form',
  templateUrl: './movie-add-form.component.html',
  styleUrls: ['./movie-add-form.component.scss']
})
export class MovieAddFormComponent implements OnInit {

  movieTitle: string;
  movieForm: FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    public fb: FormBuilder,
  ) {
    // RETRIEVE MOVIE TITLE FROM ROUTE
    const movieTitle = this.route.snapshot.paramMap.get('movieTitle');
    movieTitle ? this.movieTitle = movieTitle : '';
    // INIT FORM
    this.movieForm = fb.group({
      title: fb.control(this.movieTitle, [Validators.required, Validators.minLength(3)]),
      year: fb.control('', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
      runtime: fb.control('', Validators.required),
      genre: fb.control('', Validators.required),
      director: fb.control('', Validators.required),
      actors: fb.control('', Validators.required),
      plot: fb.control('', Validators.required),
      poster: fb.control('', [Validators.required, Validators.pattern('https?:\/\/.*\.(?:png|jpg)')]),
      imdbRating: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
    });
  }

  ngOnInit(): void {
  }

  addMovie() {
    this.movieService.addMovie(this.movieForm.value);
    this.router.navigate(['']);
  }

}
