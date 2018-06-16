import { applyMiddleware, createStore, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import locale from './Locale';
import formContact from './FormContact';
import course from './Course';

const persistConfig = {
  key: 'locale',
  storage,
  whitelist: ['locale']
};

const reducers = combineReducers({
  locale,
  formContact,
  course
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
export const persistor = persistStore(store);
