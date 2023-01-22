type filterListProps = {
    filterName: string;
};
const FilterListItem = ({ filterName }: filterListProps) => {
    return (
        <li>
            <input type='checkbox' id='' name='' />
            <label htmlFor='/'>{filterName}</label>
        </li>
    );
};

export { FilterListItem };
