const FilterListItem = ({
    filterName,
    onClick,
    id,
}: {
    filterName: string;
    id: number;
    onClick: (id: number) => void;
}) => {
    return (
        <li>
            <input type='checkbox' id='' name='' onChange={() => onClick(id)} />
            <label htmlFor='/'>{filterName}</label>
        </li>
    );
};

export { FilterListItem };
