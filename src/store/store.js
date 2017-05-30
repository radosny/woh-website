import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const createStoreWithSaga = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreWithSaga(reducer);
sagaMiddleware.run(sagas);

export default store;
