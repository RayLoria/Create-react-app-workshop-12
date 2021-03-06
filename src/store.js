import { createStore, combineReducers } from 'redux'
import { todos } from './todos/reducers'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const reducers = {
    todos,
}

const rootReducer = combineReducers(reducers)

export const configureStore = () => createStore(persistedReducer)
