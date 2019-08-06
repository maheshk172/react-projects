// This is root reducer which combines all reducers

import { combineReducers } from 'redux';

// exported default function, we can name it anything. We are naming it as courses for simplicity
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import apiStatusReducer from './apiStatusReducer';

// Names provider here will be used as state variables
// I missed it by using apiStatusReducer instead of apiCallsInProgress
const rootReducer = combineReducers({
  courses: courseReducer,
  authors: authorReducer,
  apiCallsInProgress: apiStatusReducer
});

export default rootReducer;
