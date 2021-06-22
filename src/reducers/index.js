import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import langReducer from './langReducer';

export default combineReducers({
    isDarkMode: darkModeReducer,
    lang: langReducer,
});