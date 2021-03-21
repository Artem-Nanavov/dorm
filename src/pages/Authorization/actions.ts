import {createAction, createCustomAction} from 'typesafe-actions';
import * as constants from './constants';

export const loginReqSaga = createCustomAction(constants.LOGIN_REQ_SAGA,
	(email, pws) => ({email, pws}));

export const regReqSaga = createCustomAction(constants.REG_REQ_SAGA,
	(email, pws, username) => ({email, pws, username}));

export const setUserData = createCustomAction(constants.SET_USER_DATA,
	(username: string, _id: string) => ({username, _id}));

export const loginReq = createAction(constants.LOGIN_REQ)();
export const regReq = createAction(constants.REG_REQ)();

export const loginSuccess = createAction(constants.LOGIN_SUCCESS)();
export const regSuccess = createAction(constants.REG_SUCCESS)();

export const loginError = createAction(constants.LOGIN_ERROR)();
export const regError = createAction(constants.REG_ERROR)();

export const checkIsAuthSaga = createAction(constants.CHECK_IS_AUTH_SAGA)();
export const logOutSaga = createAction(constants.LOGOUT_SAGA)();
export const logout = createAction(constants.LOGOUT)();
