/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { FilterList } from './FilterList';
import { PageSelector } from './PageSelector';
import MySelect from './MySelect';
import {
    correctValues,
    IinitialStore,
    SortOptionKeys,
} from '../interfaces/Interfaces';
import { allFilms, correctSortValue } from '../const/const';
import { Link } from 'react-router-dom';

const Filter = ({
    nextPage,
    prevPage,
    currentPage,
    totalPages,
}: {
    nextPage: () => void;
    prevPage: () => void;
    currentPage: number;
    totalPages: number;
}) => {
    const reduxStore = useSelector((store: IinitialStore) => store.reducer);
    const dispatch = useDispatch();

    const [sortByDate, setSortByDate] = useState<SortOptionKeys>('2020');
    const [sortFavorites, setSortFavorites] = useState('');

    const [sortByDetails, setSortByDetails] = useState<SortOptionKeys>(
        'popularityDescending'
    );
    const [sortByGenresList, setSortByGenresList] = useState<number[]>([]);
    function setGenresFilter(id: number) {
        if (sortByGenresList.includes(id)) {
            setSortByGenresList(sortByGenresList.filter((item) => item !== id));
        } else {
            setSortByGenresList([...sortByGenresList, id]);
        }
    }

    function checkTypeFiltration() {
        if (sortByDetails.includes('Descending')) {
            correctSortValue.correntValue = sortByDetails.slice(
                0,
                -10
            ) as correctValues;
            correctSortValue.isDescending = true;
        } else {
            correctSortValue.correntValue = sortByDetails.slice(
                0,
                -9
            ) as correctValues;
            correctSortValue.isDescending = false;
        }
    }

    function resetFiltres() {
        setSortByDate('2020');
        setSortByDetails('popularityDescending');
        setSortByGenresList([]);
        setSortFavorites('');
    }

    function sortMovies() {
        checkTypeFiltration();

        if (sortFavorites.length !== 0) {
            const sortedArray =
                sortFavorites === 'favoriteFilms'
                    ? reduxStore.initList
                          .sort((a, b) =>
                              correctSortValue.isDescending
                                  ? b[correctSortValue.correntValue] -
                                    a[correctSortValue.correntValue]
                                  : a[correctSortValue.correntValue] -
                                    b[correctSortValue.correntValue]
                          )
                          .filter(
                              (item) =>
                                  format(
                                      new Date(item.release_date),
                                      'yyyy'
                                  ) === sortByDate
                          )
                          .filter((item) =>
                              sortByGenresList.length !== 0
                                  ? item.genre_ids.some((id) =>
                                        sortByGenresList.includes(id)
                                    )
                                  : item
                          )
                          .filter((item) =>
                              reduxStore.favoriteMovies.includes(item.id)
                          )
                    : reduxStore.initList
                          .sort((a, b) =>
                              correctSortValue.isDescending
                                  ? b[correctSortValue.correntValue] -
                                    a[correctSortValue.correntValue]
                                  : a[correctSortValue.correntValue] -
                                    b[correctSortValue.correntValue]
                          )
                          .filter(
                              (item) =>
                                  format(
                                      new Date(item.release_date),
                                      'yyyy'
                                  ) === sortByDate
                          )
                          .filter((item) =>
                              sortByGenresList.length !== 0
                                  ? item.genre_ids.some((id) =>
                                        sortByGenresList.includes(id)
                                    )
                                  : item
                          )
                          .filter((item) =>
                              reduxStore.watchLaterMovies.includes(item.id)
                          );

            dispatch({
                type: 'ADD_FILTER',
                payload: sortedArray,
            });
        } else {
            const sortedArray = reduxStore.initList
                .sort((a, b) =>
                    correctSortValue.isDescending
                        ? b[correctSortValue.correntValue] -
                          a[correctSortValue.correntValue]
                        : a[correctSortValue.correntValue] -
                          b[correctSortValue.correntValue]
                )
                .filter(
                    (item) =>
                        format(new Date(item.release_date), 'yyyy') ===
                        sortByDate
                )
                .filter((item) =>
                    sortByGenresList.length !== 0
                        ? item.genre_ids.some((id) =>
                              sortByGenresList.includes(id)
                          )
                        : item
                );
            dispatch({
                type: 'ADD_FILTER',
                payload: sortedArray,
            });
        }
    }

    useEffect(() => {
        dispatch({ type: 'REFRESH_SORT_BY', payload: sortByDetails });
        sortMovies();
    }, [sortByDetails]);

    useEffect(() => {
        dispatch({ type: 'REFRESH_YEAR', payload: sortByDate });
        sortMovies();
    }, [sortByDate]);

    useEffect(() => {
        dispatch({ type: 'REFRESH_GENRES', payload: sortByGenresList });
        sortMovies();
    }, [sortByGenresList]);
    useEffect(() => {
        dispatch({ type: 'REFRESH_GENRES', payload: sortByGenresList });
        sortMovies();
    }, [sortByGenresList]);
    useEffect(() => {
        sortMovies();
    }, [sortFavorites]);

    return (
        <div className='filterSection'>
            <span
                style={{ fontSize: '30px', marginTop: '12px', color: '#fff' }}
            >
                Фильтры:
            </span>

            <div
                className='resetFiltres'
                style={{ marginTop: '12px' }}
                onClick={resetFiltres}
            >
                <button>Сбросить все фильтры</button>
            </div>
            <div className='resetFiltres' style={{ marginTop: '12px' }}>
                <Link to='/search'>
                    <button>Найти фильм</button>
                </Link>
            </div>
            <div className='sortBy'>
                <p>Сортировка по:</p>
                <MySelect
                    value={reduxStore.sortBy}
                    onChange={setSortByDetails}
                    options={[
                        {
                            value: 'popularityDescending',
                            name: 'по популярности по убыванию',
                        },
                        {
                            value: 'popularityAscending',
                            name: 'по популярности по возрастанию',
                        },
                        {
                            value: 'vote_averageDescending',
                            name: 'по рейтингу по убыванию',
                        },
                        {
                            value: 'vote_averageAscending',
                            name: 'по рейтингу по возрастанию',
                        },
                    ]}
                />
            </div>
            <div className='sortBy'>
                <p>Год релиза:</p>
                <MySelect
                    value={reduxStore.year}
                    onChange={setSortByDate}
                    options={[
                        { value: '2017', name: '2017' },
                        { value: '2018', name: '2018' },
                        { value: '2019', name: '2019' },
                        { value: '2020', name: '2020' },
                    ]}
                />

                {reduxStore.isLogined ? (
                    <MySelect
                        value={sortFavorites}
                        onChange={setSortFavorites}
                        options={[
                            { value: allFilms, name: 'Все фильмы' },
                            { value: 'favoriteFilms', name: 'Избранные' },
                            {
                                value: 'watchLaterFilms',
                                name: 'Смотреть позже',
                            },
                        ]}
                    />
                ) : null}
            </div>

            <FilterList
                setSortByGenres={setGenresFilter}
                sortByGenresList={sortByGenresList}
            />
            <PageSelector
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </div>
    );
};

export { Filter };
