import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Auth'],
  // blacklist: [],
};

const isDev = process.env.NODE_ENV === 'development';

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...(isDev ? [logger] : []),
  ...getDefaultMiddleware({ serializableCheck: false, thunk: false }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: isDev,
});

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
