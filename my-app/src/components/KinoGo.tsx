import usePagination from '../hooks/usePagination';
import { FilmList } from './filmList/FilmList';
import { Filter } from './filter/Filter';
import Header from './header/Header';
import { useSelector } from 'react-redux';
import { IinitialStore } from './interfaces/Interfaces';
import { Outlet } from 'react-router-dom';

const KinoGo = () => {
    const reduxStore = useSelector((store: IinitialStore) => store.reducer);

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        totalPages,
    } = usePagination({
        contentPerPage: 6,
        count: reduxStore.currentList.length,
    });

    return (
        <div>
            <Header />
            <div className='container'>
                <Filter
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={page}
                    totalPages={totalPages}
                />
                <FilmList
                    firstContentIndex={firstContentIndex}
                    lastContentIndex={lastContentIndex}
                />
            </div>
            <Outlet />
        </div>
    );
};

export { KinoGo };
