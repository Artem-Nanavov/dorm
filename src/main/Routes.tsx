import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {hot} from 'react-hot-loader/root';
import Authorization from 'pages/Authorization/containers/AuthPage';
import Chat from 'pages/chat/containers/chat';
import { useDispatch } from 'react-redux';
import {checkIsAuthSaga} from 'pages/Authorization/actions';

const Routes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkIsAuthSaga());
	}, []);

	return (
		<Switch>
			<Route exact path="/">
				<Redirect to="/chat" />
			</Route>
			<Route exact path="/chat" component={Chat} />
			<Route exact path="/login" component={Authorization} />
		</Switch>
	);
};

export default compose<typeof React.Component>(hot)(Routes);
