import {
	call, put, takeLatest,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
	loginApi, regApi, logOutApi, checkIsAuthApi, getMeInfoApi,
} from './api';
import * as authPageActions from './actions';
import * as authPageConstants from './constants';

function* loginSaga(action: ReturnType<typeof authPageActions.loginReqSaga>) {
	try {
		yield call(loginApi, {email: action.email, password: action.pws});
		yield put(authPageActions.loginSuccess());
		yield put(push('/chat'));
	} catch (error) {
		yield put(authPageActions.loginError());
	}
}

function* regSaga(action: ReturnType<typeof authPageActions.regReqSaga>) {
	try {
		const {data} = yield call(regApi, {email: action.email, password: action.pws, username: action.username});

		yield put(authPageActions.setUserData(data.username, data._id));

		yield put(authPageActions.loginSuccess());
		yield put(push('/chat'));
	} catch (error) {
		yield put(authPageActions.loginError());
	}
}

function* logOutSaga() {
	yield call(logOutApi);
	yield put(push('/login'));
	yield put(authPageActions.logout());
}

function* checkIsAuthSaga() {
	try {
		const {data} = yield call(checkIsAuthApi);

		yield put(authPageActions.setUserData(data.username, data._id));

		yield put(authPageActions.loginSuccess());
		yield put(push('/chat'));

		const {data: _data} = yield call(getMeInfoApi);

		yield put(authPageActions.setUserData(_data.user.username, _data.user._id));
	} catch (error) {
		yield put(authPageActions.logout());
	}
}

export default function* watchEntities() {
	yield takeLatest(authPageConstants.LOGIN_REQ_SAGA, loginSaga);
	yield takeLatest(authPageConstants.REG_REQ_SAGA, regSaga);
	yield takeLatest(authPageConstants.LOGOUT_SAGA, logOutSaga);
	yield takeLatest(authPageConstants.CHECK_IS_AUTH_SAGA, checkIsAuthSaga);
}
