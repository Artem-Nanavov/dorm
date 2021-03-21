import {ActionType, getType} from 'typesafe-actions';

import * as actions from './actions';
import { IMsg } from './message';

export type ChatPage = Readonly<{
	isLoader: boolean;
	msgs: IMsg[];
	isError: boolean;
}>;

const initialState: ChatPage = {
	isLoader: true,
	msgs: [],
	isError: false,
};

export type ChatPageActions = ActionType<typeof actions>;

export default (
	state = initialState,
	action: ChatPageActions,
): ChatPage => {
	switch (action.type) {
	case getType(actions.getMsgsSuccess):
		return {
			...state,
			msgs: action.msgs,
		};
	case getType(actions.addMsgSuccess):
		return {
			...state,
			msgs: [...state.msgs, action.msg],
		};
	case getType(actions.addMsgError):
	case getType(actions.getMsgsError):
		return {
			...state,
			isError: true,
		};
	case getType(actions.setLoader):
		return {
			...state,
			isLoader: action.isLoader,
		};
	default:
		return state;
	}
};
