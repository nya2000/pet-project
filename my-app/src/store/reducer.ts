import { correctValues } from '../components/interfaces/Interfaces';
import { initialStore } from './initialStore';

function reducer(
    state = initialStore,
    action: { type: string; payload: correctValues | [] }
) {
    switch (action.type) {
        case 'ADD_FILTER':
            return { ...state, currentList: action.payload };
        case 'REFRESH_SORT_BY':
            return { ...state, sortBy: action.payload };
        case 'REFRESH_GENRES':
            return { ...state, genres: action.payload };
        case 'REFRESH_YEAR':
            return { ...state, year: action.payload };
        case 'IS_LOGINED':
            return { ...state, isLogined: action.payload };
        default:
            return state;
    }
}

export { reducer };
