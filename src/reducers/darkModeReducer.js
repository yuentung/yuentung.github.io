import { SET_DARK_MODE } from '../actions/types';

let INITIAL_STATE = localStorage.getItem('isDarkMode');
if (INITIAL_STATE) {
    INITIAL_STATE = JSON.parse(INITIAL_STATE);
} else {
    INITIAL_STATE = true;
}

const darkModeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_DARK_MODE:
            return !state;
        default:
            return state;
    }
};

export default darkModeReducer;