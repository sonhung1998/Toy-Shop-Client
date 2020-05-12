import { combineReducers } from 'redux';
import userReducers from './userReducers';

const rootReducer = combineReducers({
    currentUser: userReducers
});

export default rootReducer;