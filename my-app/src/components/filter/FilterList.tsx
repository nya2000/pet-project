import { FilterListItem } from './FilterListItem';
import { FilterListItems } from '../ts/FilterListItems';

const FilterList = ({ onClick }: { onClick: (id: number) => void }) => {
    return (
        <div className='sortList'>
            <ul>
                {FilterListItems.map((item) => (
                    <FilterListItem
                        onClick={onClick}
                        filterName={item.name}
                        id={item.id}
                        key={item.id}
                    />
                ))}
            </ul>
        </div>
    );
};

export { FilterList };
