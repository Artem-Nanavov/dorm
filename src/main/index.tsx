import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { io } from 'socket.io-client';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {batchDispatchMiddleware, enableBatching} from 'redux-batched-actions';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {StateType} from 'typesafe-actions';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';
import Routes from './Routes';

import '../styles/nullstyles.css';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const rootReducer = createRootReducer(history);

export const socket = io('http://192.168.43.13:8000', {});

export type RootState = StateType<typeof rootReducer>;

export const store = createStore(
	enableBatching(rootReducer),
	composeWithDevTools(
		applyMiddleware(
			routerMiddleware(history),
			sagaMiddleware,
			batchDispatchMiddleware,
		),
	),
);

export const dispatchSomething = (action: any) => {
	store.dispatch(action);
};

sagaMiddleware.run(rootSaga as any);

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app'),
);
