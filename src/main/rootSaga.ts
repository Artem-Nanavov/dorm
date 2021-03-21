import {all, fork} from 'redux-saga/effects';
import authSaga from 'pages/Authorization/saga';

export default function* rootSaga() {
	yield all([
		fork(authSaga),
	]);
}
