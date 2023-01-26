import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IfilmList, IinitialStore } from '../interfaces/Interfaces';

const FilmItem = ({ film }: { film: IfilmList }) => {
    const imagePath = film.poster_path || film.backdrop_path;
    const filmPoster = `https://image.tmdb.org/t/p/w500/${imagePath}`;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const reduxStore = useSelector((store: IinitialStore) => store.reducer);

    function addFavoriteFilm() {
        dispatch({
            type: 'ADD_FAVORITE_MOVIE',
            payload: [...reduxStore.favoriteMovies, film.id],
        });
    }
    useEffect(() => {
        if (reduxStore.favoriteMovies.length !== 0) {
            localStorage.setItem(
                'favoriteFilms',
                JSON.stringify(reduxStore.favoriteMovies)
            );
        }
    }, [reduxStore.favoriteMovies]);
    function addWatchLaterFilm() {
        dispatch({
            type: 'ADD_WATCH_LATER_MOVIE',
            payload: [...reduxStore.watchLaterMovies, film.id],
        });
    }
    console.log(reduxStore.favoriteMovies);
    console.log(reduxStore.watchLaterMovies);

    return (
        <div className='filmItem box'>
            <div className='card'>
                <div className='poster'>
                    <img src={filmPoster} alt='' />
                </div>
                <div className='details'>
                    <div className='title'>
                        <h3>{film.title}</h3>
                    </div>
                    <div className='info'>
                        <p>{film.overview}</p>
                    </div>
                </div>
            </div>

            <div className='filmItemDetails'>
                <div className='filmItemHeader'>
                    <p>Рейтинг: {film.vote_average}</p>
                    <div className='filmItemButtons'>
                        {reduxStore.isLogined ? (
                            <svg
                                enableBackground='new 0 0 50 50'
                                height='50px'
                                id='Layer_1'
                                version='1.1'
                                viewBox='0 0 50 50'
                                width='50px'
                                xmlSpace='preserve'
                                xmlns='http://www.w3.org/2000/svg'
                                xmlnsXlink='http://www.w3.org/1999/xlink'
                                onClick={() =>
                                    reduxStore.isLogined
                                        ? addFavoriteFilm()
                                        : null
                                }
                            >
                                <rect fill='none' height='50' width='50' />
                                <polygon
                                    fill={
                                        reduxStore.favoriteMovies.includes(
                                            film.id
                                        )
                                            ? '#F19509'
                                            : ' none'
                                    }
                                    points='25,3.553 30.695,18.321 46.5,19.173   34.214,29.152 38.287,44.447 25,35.848 11.712,44.447 15.786,29.152 3.5,19.173 19.305,18.321 '
                                    stroke='#fff'
                                    strokeMiterlimit='10'
                                    strokeWidth='2'
                                />
                            </svg>
                        ) : (
                            <Link style={{ cursor: 'default' }} to='/auth'>
                                <svg
                                    enableBackground='new 0 0 50 50'
                                    height='50px'
                                    id='Layer_1'
                                    version='1.1'
                                    viewBox='0 0 50 50'
                                    width='50px'
                                    xmlSpace='preserve'
                                    xmlns='http://www.w3.org/2000/svg'
                                    xmlnsXlink='http://www.w3.org/1999/xlink'
                                >
                                    <rect
                                        fill='none'
                                        height='50'
                                        width='50'
                                        cursor='defualt'
                                    />
                                    <polygon
                                        fill=' none'
                                        points='25,3.553 30.695,18.321 46.5,19.173   34.214,29.152 38.287,44.447 25,35.848 11.712,44.447 15.786,29.152 3.5,19.173 19.305,18.321 '
                                        stroke='#fff'
                                        strokeMiterlimit='10'
                                        strokeWidth='2'
                                    />
                                </svg>
                            </Link>
                        )}
                        {reduxStore.isLogined ? (
                            <svg
                                viewBox='0 0 256 256'
                                xmlns='http://www.w3.org/2000/svg'
                                onClick={() =>
                                    reduxStore.isLogined
                                        ? addWatchLaterFilm()
                                        : null
                                }
                            >
                                <rect fill='none' height='256' width='256' />
                                <path
                                    d='M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z'
                                    opacity='1'
                                    fill='none'
                                />
                                <path
                                    d='M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z'
                                    fill={
                                        reduxStore.watchLaterMovies.includes(
                                            film.id
                                        )
                                            ? 'red'
                                            : ' none'
                                    }
                                    stroke='#fff'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='10'
                                />
                            </svg>
                        ) : (
                            <Link style={{ cursor: 'default' }} to='/auth'>
                                <svg
                                    viewBox='0 0 256 256'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <rect
                                        fill='none'
                                        height='256'
                                        width='256'
                                    />
                                    <path
                                        d='M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z'
                                        opacity='1'
                                        fill='none'
                                    />
                                    <path
                                        d='M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z'
                                        fill=' none'
                                        stroke='#fff'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='10'
                                    />
                                </svg>
                            </Link>
                        )}
                    </div>
                </div>
                <div className='filmTitle'>
                    <h4>{film.title}</h4>
                </div>
                <a className='aboutFilm' href='/'>
                    Подробнее
                </a>
            </div>
        </div>
    );
};

export { FilmItem };
