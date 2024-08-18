import { createStore, applyMiddleware, legacy_createStore } from 'redux';
import {thunk} from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reduccers/rootreduccer';

const persistConfig = {key: 'root',storage, }
const persistedReducer = persistReducer(persistConfig, rootReducer)
// let store = createStore(persistedReducer)
export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store)