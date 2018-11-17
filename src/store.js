import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/rootReducer';
import logger from 'redux-logger';

export default function configureStore(initialState = {}) {
  //https://github.com/zalmoxisus/redux-devtools-extension#usage
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk, logger),
    // other store enhancers if any
  );
  return createStore(reducer, enhancer);
}