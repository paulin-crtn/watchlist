import { Movie } from '../app/core/movie.model';

export let mockMovies: Movie[] = [
{
    id: 1,
    title: 'La Guerre Est Déclarée',
    year: 2011,
    runtime: 100,
    genre: 'Drama',
    director: 'Valérie Donzelli',
    actors: 'Valérie Donzelli, Jérémie Elkaïm, César Desseix',
    // tslint:disable-next-line: max-line-length
    plot: 'When their young son is diagnosed with a brain tumor, young parents Roméo and Juliette unite in the fight for his survival.',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTU1NjI1Mjg3Ml5BMl5BanBnXkFtZTcwMDk0ODAxNw@@._V1_.jpg',
    imdbRating: 7,
    viewed: false,
    createdAt: 1576996323450,
},
{
    id: 2,
    title: 'Le Premier Jour Du Reste De Ta Vie',
    year: 2008,
    runtime: 114,
    genre: 'Drame',
    director: 'Rémi Bezançon',
    actors: 'Jacques Gamblin, Zabou Breitman, Déborah François',
    // tslint:disable-next-line: max-line-length
    plot: 'Five key days in a family\'s life.',
    // tslint:disable-next-line: max-line-length
    poster: 'https://m.media-amazon.com/images/M/MV5BYjc3MzI4OTMtMWZjMS00YTkyLThmMDAtMTJhYzViMDk4MmI5XkEyXkFqcGdeQXVyNjcyNjE2OTk@._V1_UY268_CR8,0,182,268_AL_.jpg',
    imdbRating: 7.6,
    viewed: true,
    createdAt: 1576996323451,
},
{
    id: 3,
    title: 'Les Amours Imaginaires',
    year: 2010,
    runtime: 101,
    genre: 'Drame, Romance',
    director: 'Xavier Dolan',
    actors: 'Xavier Dolan, Niels Schneider, Monia Chokri',
    // tslint:disable-next-line: max-line-length
    plot: 'The story of three close friends who are involved in a love-triangle.',
    // tslint:disable-next-line: max-line-length
    poster: 'https://m.media-amazon.com/images/M/MV5BYTA3MTRiODctZGJiMS00NmFjLTg1MTQtZTk4ZmZhMjU2NDY5XkEyXkFqcGdeQXVyMjA2MjkwNzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbRating: 7.2,
    viewed: false,
    createdAt: 1576996323452,
},
{
    id: 4,
    title: 'Polisse',
    year: 2011,
    runtime: 127,
    genre: 'Drame, Crime',
    director: 'Maïwenn',
    actors: 'Karin Viard, Joey Starr, Marina Foïs',
    // tslint:disable-next-line: max-line-length
    plot: 'A journalist covering police assigned to a juvenile division enters an affair with one of her subjects.',
    // tslint:disable-next-line: max-line-length
    poster: 'https://m.media-amazon.com/images/M/MV5BNjQzNzUwNTA3OF5BMl5BanBnXkFtZTcwNDYzNjk2Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbRating: 7.3,
    viewed: false,
    createdAt: 1576996323453,
},
{
    id: 5,
    title: 'Hippocrate',
    year: 2014,
    runtime: 102,
    genre: 'Drama',
    director: 'Thomas Lilti',
    actors: 'Vincent Lacoste, Reda Kateb, Jacques Gamblin',
    // tslint:disable-next-line: max-line-length
    plot: 'The daily life of an hospital through the eyes of new intern Benjamin.',
    poster: 'https://m.media-amazon.com/images/M/MV5BZDk5ZjRmMTQtM2Y0OS00NDdjLTg1YmItODAxMDBmYTRjNTgzXkEyXkFqcGdeQXVyNTE0MDY4Mjk@._V1_.jpg',
    imdbRating: 6.8,
    viewed: true,
    createdAt: 1576996323454,
},
{
    id: 6,
    title: 'Starbuck',
    year: 2011,
    runtime: 109,
    genre: 'Comedy, Drame, Romance',
    director: 'Ken Scott',
    actors: 'Patrick Huard, Julie LeBreton, Antoine Bertrand',
    // tslint:disable-next-line: max-line-length
    plot: 'As his lover announces her pregnancy, a fortysomething slacker receives other life-changing news: 142 people, all of them the result of artificial insemination, have filed a class action lawsuit against him, their biological father.',
    // tslint:disable-next-line: max-line-length
    poster: 'https://m.media-amazon.com/images/M/MV5BMjMyMDczMzU1OV5BMl5BanBnXkFtZTcwMzMwNzk1OA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbRating: 7.3,
    viewed: false,
    createdAt: 1576996323455,
}];