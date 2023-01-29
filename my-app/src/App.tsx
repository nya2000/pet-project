import { KinoGo } from './components/KinoGo';
import { Routes, Route } from 'react-router-dom';
import { UserAuthorization } from './components/authorizarion/UserAuthorization';
import { AboutFilm } from './components/aboutFilm/AboutFilm';
import { SearchMovie } from './components/searchMovie/SearchMovie';

function App() {
    return (
        <div className='App'>
            <KinoGo />
            <Routes>
                <Route path='/' />
                <Route path='/search' element={<SearchMovie />} />
                <Route path='/auth' element={<UserAuthorization />} />
                <Route path='/aboutFilm/:filmId' element={<AboutFilm />} />
            </Routes>
        </div>
    );
}

export default App;
