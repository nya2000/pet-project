import { useState } from 'react';
import MySelect from '../filter/MySelect';
import { FilterListItems } from '../ts/FilterListItems';
import {
    IfilmList,
    IinitialStore,
    SortOptionKeys,
} from '../interfaces/Interfaces';
import { MySelectSearch } from './MySelectSearch';
import { useSelector } from 'react-redux';
import usePagination from '../../hooks/usePagination';
import { FilmItem } from '../filmList/FilmItem';

const SearchMovie = () => {
    const reduxStore = useSelector((store: IinitialStore) => store.reducer);
    const [sortedArray, setSortedArray] = useState<IfilmList[]>([]);
    const [searchByGenre, setSearchByGenre] = useState<string>('28');
    const [searchByRating, setSearchByRating] = useState<SortOptionKeys>(
        'vote_averageDescending'
    );
    const [searchByPopularity, setSearchByPopularity] =
        useState<string>('popularity');

    function searchMovie() {
        setSortedArray(
            reduxStore.initList
                .filter((item) =>
                    item.genre_ids.includes(Number(searchByGenre))
                )
                .filter((item) =>
                    searchByRating === 'vote_averageDescending'
                        ? item.vote_average > 5
                        : item.vote_average < 5
                )
                .filter((item) =>
                    searchByPopularity === 'popularity'
                        ? item.popularity > 100 && item.vote_count > 200
                        : item.popularity < 100 && item.vote_count < 200
                )
        );
    }
    function removeCurrentFilm() {
        setSortedArray(sortedArray.filter((iem, index) => index !== 0));
    }

    return (
        <div className='search_movie'>
            <div className='filters'>
                <div className='sortBy'>
                    <p>Выберите жанр</p>
                    <MySelectSearch
                        value={searchByGenre}
                        onChange={setSearchByGenre}
                        options={FilterListItems.map((item) => {
                            return { value: item.id, name: item.name };
                        })}
                    />
                    <p>Оценка фильма</p>
                    <MySelect
                        value={searchByRating}
                        onChange={setSearchByRating}
                        options={[
                            {
                                value: 'vote_averageDescending',
                                name: 'Высокая',
                            },
                            { value: 'vote_averageAscending', name: 'Низкая' },
                        ]}
                    />
                    <p>Популярный или неизвестный</p>
                    <MySelectSearch
                        value={searchByPopularity}
                        onChange={setSearchByPopularity}
                        options={[
                            {
                                value: 'popularity',
                                name: 'Популярный',
                            },
                            { value: 'unknown', name: 'Неизвстный' },
                        ]}
                    />
                </div>
                <div className='resetFiltres' style={{ marginTop: '12px' }}>
                    <button onClick={searchMovie}>Найти</button>
                </div>

                <div className='resetFiltres' style={{ marginTop: '12px' }}>
                    <button onClick={removeCurrentFilm}>Не подходит</button>
                </div>
            </div>
            <div className='result'>
                {sortedArray.slice(0, 1).map((film) => (
                    <FilmItem film={film} key={film.id} />
                ))}
            </div>
        </div>
    );
};

export { SearchMovie };
