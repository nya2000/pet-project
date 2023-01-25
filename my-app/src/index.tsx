import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';
import './styles/KinoGo.css';
import './styles/FilmItem.css';
import './styles/UserAuth.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { UserAuthorization } from './components/authorizarion/UserAuthorization';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Provider store={store}>
                <App />
            </Provider>
        ),
        children: [
            {
                path: '/auth',
                element: <UserAuthorization />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
