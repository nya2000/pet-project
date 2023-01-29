const FilterListItem = ({
    filterName,
    id,
    onChange,
    checkboxStatus,
}: {
    filterName: string;
    id: number;
    onChange: (id: number) => void;
    checkboxStatus: number[];
}) => {
    return (
        <li>
            <input
                type='checkbox'
                id=''
                name=''
                onChange={() => onChange(id)}
                checked={checkboxStatus.includes(id)}
            />
            <label htmlFor='/'>{filterName}</label>
        </li>
    );
};

export { FilterListItem };
