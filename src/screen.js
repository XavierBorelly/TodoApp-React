/**
 * Created by admin on 06/07/2017.
 */
import React, { Component } from 'react';
import App from './App'

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import todoReducer from './reducers/todos.reducer';


const middlewares = [thunk];
const logger = createLogger({
    duration: true,
    collapsed: true,
});
middlewares.push(logger);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware (
    combineReducers({
        todoReducer
    })
);

export default class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    };
}

