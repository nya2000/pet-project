import { FilterList } from './FilterList';
import { PageSelector } from './PageSelector';

import MySelect from './MySelect';

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
                <MySelect />
            </div>
            <div className='sortBy'>
                <p>Год релиза:</p>
                <MySelect />
            </div>
            <FilterList />
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
