import { nanoid } from 'nanoid';

const MySelectSearch = ({
    options,
    value,
    onChange,
}: {
    options: { value: number | string; name: string }[];
    value?: string;
    onChange: (a: string) => void;
}) => {
    return (
        <div className='searchMovieFilter'>
            <select
                name='selectFilter'
                id='selectFilter'
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
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

export { MySelectSearch };
