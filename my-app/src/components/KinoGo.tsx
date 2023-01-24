import usePagination from '../hooks/usePagination';
import FimlList from './filmList/FimlList';
import Filter from './filter/Filter';
import Header from './header/Header';
import { useSelector } from 'react-redux';
import { IinitialStore } from './interfaces/Interfaces';

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
        contentPerPage: 10,
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
                <FimlList
                    firstContentIndex={firstContentIndex}
                    lastContentIndex={lastContentIndex}
                />
            </div>
        </div>
    );
};

export { KinoGo };
