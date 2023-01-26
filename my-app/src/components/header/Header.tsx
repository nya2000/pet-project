import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IinitialStore } from '../interfaces/Interfaces';

const Header = () => {
    const reduxStore = useSelector((store: IinitialStore) => store.reducer);
    const dispatch = useDispatch();

    function logOut() {
        if (reduxStore.isLogined) {
            localStorage.setItem('isLogined', JSON.stringify(false));
        }
        dispatch({
            type: 'IS_LOGINED',
            paylaod: false,
        });
    }

    return (
        <header className='header'>
            <div className='innerHeader'>
                <ul className='navigation'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        {reduxStore.isLogined ? (
                            <button className='logOutButton' onClick={logOut}>
                                Log Out
                            </button>
                        ) : (
                            <Link className='logIn' to='/auth'>
                                Log In
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
