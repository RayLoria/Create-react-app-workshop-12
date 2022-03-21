import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '.componets/store.js';
import { persistStore } from 'redux-persist';
import { persistGate } from 'redux-persist/lib/integration/react';

const store = configureStore()
const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)

export const configureStore = () => createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())