import {createAction, createCustomAction} from 'typesafe-actions';
import * as constants from './constants';
import { IMsg } from './message';

export const getMsgsReq = createAction(constants.GET_MSGS_REQ)();
export const getMsgsSuccess = createCustomAction(constants.GET_MSGS_SUCCESS,
	((msgs: IMsg[]) => ({msgs})));

export const addMsgError = createAction(constants.ADD_MSG_ERROR)();
export const getMsgsError = createAction(constants.GET_MSGS_ERROR)();

export const setLoader = createCustomAction(constants.SET_LOADER,
	(isLoader) => ({isLoader}));

export const addMsgReq = createCustomAction(constants.ADD_MSG_REQ,
	(msg: IMsg) => (msg));

export const addMsgSuccess = createCustomAction(constants.ADD_MSG_SUCCESS,
	(msg) => ({msg}));
