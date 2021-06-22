import { SET_DARK_MODE, SET_LANG } from './types';

export const setDarkMode = () => async (dispatch, getState) => {
    localStorage.setItem('isDarkMode', !getState().isDarkMode);
    dispatch({ type: SET_DARK_MODE });
};

export const setLang = lang => async dispatch => {
    localStorage.setItem('lang', lang);
    dispatch({
        type: SET_LANG,
        payload: lang
    });
};