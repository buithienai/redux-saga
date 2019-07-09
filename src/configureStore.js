import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
	let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(rootSaga);
	return store;
}
