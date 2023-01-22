import { KinoGo } from './components/KinoGo';
import { Provider } from 'react-redux';
import { store } from './store/store';
function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <KinoGo />
            </div>
        </Provider>
    );
}

export default App;
