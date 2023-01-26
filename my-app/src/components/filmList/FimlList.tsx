import { FilmItem } from './FilmItem';

import { useSelector } from 'react-redux';
import { IinitialStore } from '../interfaces/Interfaces';
const FimlList = ({
    firstContentIndex,
    lastContentIndex,
}: {
    firstContentIndex: number;
    lastContentIndex: number;
}) => {
    const currentMoviesArray = useSelector(
        (store: IinitialStore) => store.reducer
    );
    return (
        <div className='filmList'>
            {currentMoviesArray.currentList
                .slice(firstContentIndex, lastContentIndex)
                .map((film) => (
                    <FilmItem film={film} key={film.id} />
                ))}
        </div>
    );
};

export default FimlList;
