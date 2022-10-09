//import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import productSaga from './productSaga';
import rootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';

//const store= configureStore({reducer:rootReducer});
const SagaMiddleware = createSagaMiddleware();
const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [SagaMiddleware]
    }
)

SagaMiddleware.run(productSaga);
export default store;