import { FilmItem } from './FilmItem';

import { useSelector } from 'react-redux';
import { IinitialStore } from '../interfaces/Interfaces';
import { Outlet } from 'react-router-dom';
const FilmList = ({
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
            <Outlet />
        </div>
    );
};

export { FilmList };
