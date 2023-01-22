import { initialStore } from './initialStore';

function reducer(state = initialStore, action: { type: string; payload: [] }) {
    switch (action.type) {
        case 'ADD_FILTER':
            return { ...state, currentList: action.payload };
        // case 'REFRESH_FILTER':
        //     return { ...state, currentList: action.payload };
        default:
            return state;
    }
}

export { reducer };
