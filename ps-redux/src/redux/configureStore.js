import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
// This will alert us if we mutate state in store
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  // Add support for redux DevTools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // added thunk middleware now
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, immutableStateInvariantMiddleware())
    )
  );
}
