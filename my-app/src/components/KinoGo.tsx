import usePagination from '../hooks/usePagination';
import FimlList from './filmList/FimlList';
import Filter from './filter/Filter';
import Header from './header/Header';
import { useDispatch, useSelector } from 'react-redux';
import {
    correctValues,
    IfilmList,
    IinitialStore,
    SortOptionKeys,
} from './interfaces/Interfaces';
import { sortBy } from './const/const';
import { format } from 'date-fns';
const KinoGo = () => {
    const dispatch = useDispatch();
    const reduxStore = useSelector((store: IinitialStore) => store.reducer);

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        totalPages,
    } = usePagination({
        contentPerPage: 10,
        count: reduxStore.currentList.length,
    });

    function CheckSorted(data: SortOptionKeys) {
        if (reduxStore.year) {
            SortByYear(data, reduxStore.initList);
        } else {
            SortByYear(data, reduxStore.currentList);
        }
    }

    function SortByGenres(id: number) {
        const a: IfilmList[] = [];
        switch (sortBy.genres.includes(id)) {
            case true:
                sortBy.genres.splice(sortBy.genres.indexOf(id), 1);
                if (sortBy.genres.length === 0) {
                    // functoin defaultFilter которая дефолтно сортирует по популярности и году. при отсуствии жанров
                    SortByDetails(
                        reduxStore.sortBy as SortOptionKeys,
                        reduxStore.initList
                    );

                    console.log(reduxStore.currentList);
                } else {
                    sortBy.genres.forEach((element) => {
                        reduxStore.initList.forEach((item) => {
                            item.genre_ids.includes(element)
                                ? a.push(item)
                                : null;
                        });
                    });
                    SortByDetails(reduxStore.sortBy as SortOptionKeys, a);
                    console.log(a);
                    console.log(sortBy.genres);
                }

                break;
            case false:
                sortBy.genres.push(id);
                sortBy.genres.forEach((element) => {
                    reduxStore.initList.forEach((item) => {
                        item.genre_ids.includes(element) ? a.push(item) : null;
                    });
                });
                SortByDetails(reduxStore.sortBy as SortOptionKeys, a);
                console.log(a);
                console.log(sortBy.genres);
                break;
        }
    }

    function SortByYear(
        year: SortOptionKeys,
        array: IfilmList[] = reduxStore.currentList
    ) {
        console.log(array);
        dispatch({ type: 'REFRESH_YEAR', payload: year });
        dispatch({
            type: 'ADD_FILTER',
            payload: array.filter(
                (item) => format(new Date(item.release_date), 'yyyy') === year
            ),
        });
    }

    function SortByDetails(
        data: SortOptionKeys,
        array: IfilmList[] = reduxStore.currentList
    ) {
        if (data.includes('Ascending')) {
            sortBy.details = data.slice(0, -9) as correctValues;
            dispatch({ type: 'REFRESH_SORT_BY', payload: data });

            dispatch({
                type: 'ADD_FILTER',
                payload: array.sort(
                    (a, b) => a[sortBy.details] - b[sortBy.details]
                ),
            });
        } else if (data.includes('Descending')) {
            sortBy.details = data.slice(0, -10) as correctValues;
            dispatch({ type: 'REFRESH_SORT_BY', payload: data });
            dispatch({
                type: 'ADD_FILTER',
                payload: array.sort(
                    (a, b) => b[sortBy.details] - a[sortBy.details]
                ),
            });
        }
    }

    return (
        <div>
            <Header />

            <div className='container'>
                <Filter
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={page}
                    totalPages={totalPages}
                    sortByYear={CheckSorted}
                    sortByDetails={SortByDetails}
                    SortByGenres={SortByGenres}
                />
                <FimlList
                    firstContentIndex={firstContentIndex}
                    lastContentIndex={lastContentIndex}
                />
            </div>
        </div>
    );
};

export { KinoGo };
