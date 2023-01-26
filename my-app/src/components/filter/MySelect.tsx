import { nanoid } from 'nanoid';
import { SortOptionKeys } from '../interfaces/Interfaces';
const MySelect = ({
    options,
    value,
    onChange,
}: {
    options: { value: SortOptionKeys; name: string }[];
    value?: string;
    onChange: (a: SortOptionKeys) => void;
}) => {
    return (
        <div>
            <select
                name='selectFilter'
                id='selectFilter'
                value={value}
                onChange={(event) =>
                    onChange(event.target.value as SortOptionKeys)
                }
            >
                {options.map((item) => (
                    <option key={nanoid()} value={item.value}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MySelect;
