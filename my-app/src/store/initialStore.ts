import { IinitialStoreReducer } from '../components/interfaces/Interfaces';
import { FilmsList } from '../components/ts/FilmsList';

export const initialStore: IinitialStoreReducer = {
    initList: FilmsList,
    currentList: FilmsList,
    sortBy: '',
    genres: [],
    year: '',
    //Да так нельзя делать я знаю но я мучался пол дня и только так получилось...
    isLogined: JSON.parse(localStorage.getItem('isLogined') as string),
    favoriteMovies: JSON.parse(localStorage.getItem('favoriteFilms') as string)
        ? JSON.parse(localStorage.getItem('favoriteFilms') as string)
        : [],
    watchLaterMovies: [],
};
