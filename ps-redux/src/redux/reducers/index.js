// This is root reducer which combines all reducers

import { combineReducers } from 'redux';

// exported default function, we can name it anything. We are naming it as courses for simplicity
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  authors: authorReducer
});

export default rootReducer;
