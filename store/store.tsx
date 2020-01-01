import thunkMiddleware from "redux-thunk";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer, RootState } from './reducers';

export function initializeStore(initialState: RootState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware, ...getDefaultMiddleware()],
    preloadedState: initialState
  });

  if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
      (module as any).hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store;
}
