import { SET_LANG } from '../actions/types';

let INITIAL_STATE = localStorage.getItem('lang');
if (!INITIAL_STATE) {
    INITIAL_STATE = 'en';
}

const langReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LANG:
            return action.payload;
        default:
            return state;
    }
};

export default langReducer;