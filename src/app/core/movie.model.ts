export interface MoviesResponse {
    poster: string;
    title: string;
    type: string;
    year: string;
    imdbID: string;
}

export interface Movie {
    id: number,
    title: string,
    year: number,
    runtime: number,
    genre: string,
    director: string,
    actors: string,
    plot: string,
    poster: string,
    imdbRating: number,
    viewed: boolean,
    createdAt: number,
}
