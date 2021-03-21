import {ActionType, getType} from 'typesafe-actions';

import * as actions from './actions';

export type AuthPage = Readonly<{
	isLoader: boolean;
	isAuth: boolean;
	isError: boolean;
	username: null | string;
	_id: null | string;
}>;

const initialState: AuthPage = {
	isLoader: false,
	isAuth: false,
	isError: false,
	username: null,
	_id: null,
};

export type AuthPageActions = ActionType<typeof actions>;

export default (
	state = initialState,
	action: AuthPageActions,
): AuthPage => {
	switch (action.type) {
	case getType(actions.loginReq):
		return {
			...state,
			isLoader: true,
		};
	case getType(actions.setUserData):
		return {
			...state,
			username: action.username,
			_id: action._id,
		};
	case getType(actions.regReq):
		return {
			...state,
			isLoader: true,
		};
	case getType(actions.loginSuccess):
		return {
			...state,
			isLoader: false,
			isAuth: true,
		};
	case getType(actions.logout):
		return {
			...state,
			isAuth: false,
			username: null,
			_id: null,
		};
	case getType(actions.regSuccess):
		return {
			...state,
			isLoader: false,
			isAuth: true,
		};
	case getType(actions.loginError):
		return {
			...state,
			isLoader: false,
			isError: true,
		};
	case getType(actions.regError):
		return {
			...state,
			isLoader: false,
			isError: true,
		};
	default:
		return state;
	}
};
