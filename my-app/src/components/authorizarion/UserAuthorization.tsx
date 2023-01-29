/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IwrongAuth } from '../interfaces/Interfaces';
import img from '../../assets/img/succesLogIn.png';
import { useDispatch } from 'react-redux';

const UserAuthorization = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userAuthInput, setUserAuthInput] = useState({
        login: '',
        password: '',
    });
    const [isWrognAuth, setisWrognAuth] = useState<IwrongAuth>({
        isWrongLogin: false,
        isWrongPassword: false,
    });
    const [isSuccesedLogIn, setIsSuccesedLogIn] = useState(false);
    const [isLogined, setIsLogined] = useState<boolean>(false);
    const userName = 'nya2000';
    const password = 'mosica2000';

    function authorization(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (userAuthInput.login !== userName) {
            setisWrognAuth((isWrognAuth) => ({
                ...isWrognAuth,
                isWrongLogin: true,
            }));
        }
        if (userAuthInput.password !== password) {
            setisWrognAuth((isWrognAuth) => ({
                ...isWrognAuth,
                isWrongPassword: true,
            }));
        }
        if (
            userAuthInput.login === userName &&
            userAuthInput.password === password
        ) {
            setIsLogined(true);
            setIsSuccesedLogIn(true);
            setUserAuthInput({
                login: '',
                password: '',
            });
        }

        setTimeout(() => {
            setIsSuccesedLogIn(false);
        }, 4800);
        setTimeout(() => {
            setisWrognAuth({ isWrongLogin: false, isWrongPassword: false });
        }, 1000);
    }

    useEffect(() => {
        if (isLogined) {
            dispatch({ type: 'IS_LOGINED', payload: true });
            localStorage.setItem('isLogined', JSON.stringify(isLogined));
        }
    }, [isLogined]);

    return (
        <>
            <div className='modalBackground' onClick={() => navigate(-1)}></div>
            <div className='userAuth'>
                <div id='toast' className={isSuccesedLogIn ? 'show' : ''}>
                    <div id='img'>
                        <img src={img} id='img' alt='' />
                    </div>
                    <div id='desc'>Вы успешно авторизовались!</div>
                </div>
                <h1>Log in</h1>
                <form
                    action='submit'
                    onSubmit={(event) => authorization(event)}
                >
                    <div
                        className={
                            isWrognAuth.isWrongLogin
                                ? 'loginUserName wrongPass'
                                : 'loginUserName'
                        }
                    >
                        <input
                            type='text'
                            value={userAuthInput.login}
                            className='username-effect'
                            placeholder='empty'
                            id='username'
                            required
                            onChange={(event) =>
                                setUserAuthInput({
                                    ...userAuthInput,
                                    login: event.target.value,
                                })
                            }
                        />
                        <label htmlFor='username' className='username'>
                            username
                        </label>
                        <span className='focus-border-username'></span>
                    </div>
                    <div
                        className={
                            isWrognAuth.isWrongPassword
                                ? 'loginPassword wrongPass'
                                : 'loginPassword'
                        }
                    >
                        <input
                            type='password'
                            value={userAuthInput.password}
                            className='password-effect'
                            placeholder='empty'
                            id='password'
                            required
                            onChange={(event) =>
                                setUserAuthInput({
                                    ...userAuthInput,
                                    password: event.target.value,
                                })
                            }
                        />
                        <label htmlFor='/' className='password'>
                            password
                        </label>
                        <span className='focus-border-password'></span>
                    </div>

                    <button type='submit'>Log In</button>
                </form>
            </div>
        </>
    );
};

export { UserAuthorization };
