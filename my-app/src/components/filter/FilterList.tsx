import { FilterListItem } from './FilterListItem';
import { FilterListItems } from '../ts/FilterListItems';

const FilterList = () => {
    return (
        <div className='sortList'>
            <ul>
                {FilterListItems.map((item) => (
                    <FilterListItem filterName={item.name} key={item.id} />
                ))}
            </ul>
        </div>
    );
};

export { FilterList };
