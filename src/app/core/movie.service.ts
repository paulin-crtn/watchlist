import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Movie } from './movie.model';
import { mockMovies } from '../../mock-data/movies';

@Injectable()
export class MovieService {

    private BASE_URL = 'http://www.omdbapi.com/';
    private API_KEY = '6a15d283';

    constructor(private http: HttpClient) {}

    addMovie(movie: any) {
        mockMovies.push({
            id: Math.round(Math.random() * 10000),
            title: movie.title,
            year: movie.year,
            runtime: movie.runtime,
            genre: movie.genre,
            director: movie.director,
            actors: movie.actors,
            plot: movie.plot,
            poster: movie.poster,
            imdbRating: movie.imdbRating,
            viewed: false,
            createdAt: Date.now(),
        });
    }

    nextMovieId(id: number): number {
        const currentMovieIndex = mockMovies.findIndex(movie => movie.id === id);
        const nextMovieIndex = currentMovieIndex + 1;
        return nextMovieIndex !== mockMovies.length ? mockMovies[nextMovieIndex].id : mockMovies[0].id;
    }

    previousMovieId(id: number): number {
        const currentMovieIndex = mockMovies.findIndex(movie => movie.id === id);
        const previousMovieIndex = currentMovieIndex - 1;
        return previousMovieIndex !== -1 ? mockMovies[previousMovieIndex].id : mockMovies[mockMovies.length - 1].id;
    }

    deleteMovie(id: number) {
        const index = mockMovies.findIndex(movie => movie.id === id);
        mockMovies.splice(index, 1);
        console.log(mockMovies);
        
    }

    getMovie(id: number): Movie {
        return mockMovies.find(movie => movie.id === id);
    }

    getMovies(): Observable<Movie[]> {
        return of(mockMovies);
    }

    requestMovies(value: string) {
        const VALUE = value.replace(/ /g, '+');
        return this.http.get(`${this.BASE_URL}?apikey=${this.API_KEY}&type=movie&s=${VALUE}`);
    }

    requestMovie(imdbID: string) {
        return this.http.get(`${this.BASE_URL}?apikey=${this.API_KEY}&type=movie&i=${imdbID}`);
    }
}
