import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { logActions } from './middleware';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import './index.css';

const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancers (
    applyMiddleware(thunk, logActions)
);

const store = createStore(
    rootReducer, 
    composedEnhancers 
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
