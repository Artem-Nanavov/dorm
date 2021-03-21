import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import AuthPage from 'pages/Authorization/reducer';

const createRootReducer = (history: any) => combineReducers({
	router: connectRouter(history as any),
	AuthPage,
});

export default createRootReducer;
