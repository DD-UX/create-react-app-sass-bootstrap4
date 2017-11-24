// Create actions and stores
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './modules/root';

// Epic Middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
  const store = createStore(
      rootReducer,
      applyMiddleware(epicMiddleware)
  );

  return store;
}