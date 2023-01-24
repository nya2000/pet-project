import { FilterListItem } from './FilterListItem';
import { FilterListItems } from '../ts/FilterListItems';

const FilterList = ({
    setSortByGenres,
    sortByGenresList,
}: {
    setSortByGenres: (id: number) => void;
    sortByGenresList:number[]
}) => {
    return (
        <div className='sortList'>
            <ul>
                {FilterListItems.map((item) => (
                    <FilterListItem
                        filterName={item.name}
                        key={item.id}
                        id={item.id}
                        onChange={setSortByGenres}
                        checkboxStatus={sortByGenresList}
                    />
                ))}
            </ul>
        </div>
    );
};

export { FilterList };
