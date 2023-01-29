import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IinitialStore } from '../interfaces/Interfaces';

const AboutFilm = () => {
    const reduxStore = useSelector((store: IinitialStore) => store.reducer);
    const { filmId } = useParams();
    const filmDetails = reduxStore.initList.find(
        (item) => item.id === Number(filmId)
    );
    const imagePathBackGround = filmDetails?.backdrop_path;
    const filmPosterBackground = `https://image.tmdb.org/t/p/w500/${imagePathBackGround}`;
    const imagePathPreview = filmDetails?.poster_path;
    const filmPosterPreview = `https://image.tmdb.org/t/p/w500/${imagePathPreview}`;

    return (
        <div className='filmDetails_container'>
            <div className='filmDetails_content'>
                <div className='filmBackGround'>
                    <img src={filmPosterBackground} alt='' />
                    <div className='film_poster_header'>
                        <div>
                            <img src={filmPosterPreview} alt='' />
                        </div>
                        <div className='film_details_header'>
                            <h1>{filmDetails?.title}</h1>
                            <p>{`Рейтинг: ${filmDetails?.vote_average}`}</p>
                            <p>{filmDetails?.overview}</p>
                            <p>{`Язык оригинала: ${filmDetails?.original_language}`}</p>
                            <p>{`Дата выхода: ${filmDetails?.release_date}`}</p>
                            <p>{`Оригинальное название: ${filmDetails?.original_title}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { AboutFilm };
