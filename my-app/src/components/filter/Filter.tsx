import { FilterList } from './FilterList';
import { PageSelector } from './PageSelector';

import MySelect from './MySelect';
import { useSelector } from 'react-redux';
import { IinitialStore, SortOptionKeys } from '../interfaces/Interfaces';

const Filter = ({
    nextPage,
    prevPage,
    currentPage,
    totalPages,
    sortByYear,
    sortByDetails,
    SortByGenres,
}: {
    nextPage: () => void;
    prevPage: () => void;
    currentPage: number;
    totalPages: number;
    sortByYear: (year: SortOptionKeys) => void;
    sortByDetails: (a: SortOptionKeys) => void;
    SortByGenres: (id: number) => void;
}) => {
    const selectedYear = useSelector(
        (store: IinitialStore) => store.reducer.year
    );
    const selectedDetails = useSelector(
        (store: IinitialStore) => store.reducer.sortBy
    );
    return (
        <div className='filterSection'>
            <span
                style={{ fontSize: '30px', marginTop: '12px', color: '#fff' }}
            >
                Фильтры:
            </span>
            <div className='resetFiltres' style={{ marginTop: '12px' }}>
                <button>Сбросить все фильтры</button>
            </div>
            <div className='sortBy'>
                <p>Сортировка по:</p>
                <MySelect
                    onChange={sortByDetails}
                    value={selectedDetails}
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
                    onChange={sortByYear}
                    value={selectedYear}
                    options={[
                        { value: '2017', name: '2017' },
                        { value: '2018', name: '2018' },
                        { value: '2019', name: '2019' },
                        { value: '2020', name: '2020' },
                    ]}
                />
            </div>
            <FilterList onClick={SortByGenres} />
            <PageSelector
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default Filter;
