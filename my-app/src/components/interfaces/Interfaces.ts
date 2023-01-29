export interface IfilmList {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IinitialStoreReducer {
    initList: IfilmList[];
    currentList: IfilmList[];
    sortBy: string;
    genres: number[];
    year: string;
    isLogined: boolean;
    favoriteMovies: number[];
    watchLaterMovies: number[];
}

export interface IinitialStore {
    reducer: {
        initList: IfilmList[];
        currentList: IfilmList[];
        sortBy: correctValues;
        genres: number[];
        year: string;
        isLogined: boolean;
        favoriteMovies: number[];
        watchLaterMovies: number[];
    };
}
export type SortOptionKeys =
    | 'popularityDescending'
    | 'popularityAscending'
    | 'vote_averageDescending'
    | 'vote_averageAscending'
    | 'favoriteFilms'
    | 'watchLaterFilms'
    | ''
    | sortYears;

export type correctValues =
    | 'popularity'
    | 'popularity'
    | 'vote_average'
    | 'vote_average';
export type sortYears = '2017' | '2018' | '2019' | '2020';

export interface IwrongAuth {
    isWrongLogin: boolean;
    isWrongPassword: boolean;
}
