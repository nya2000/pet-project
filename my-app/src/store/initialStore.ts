import { IinitialStoreReducer } from '../components/interfaces/Interfaces';
import { FilmsList } from '../components/ts/FilmsList';

export const initialStore: IinitialStoreReducer = {
    initList: FilmsList,
    currentList: FilmsList,
    sortBy: '',
    genres: [],
    year: '',
    isLogined:false
};
