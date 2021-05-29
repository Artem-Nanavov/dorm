import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Reg from 'pages/Authorization';
import Authorization from 'pages/Authorization/components/auth/Login';
import WithNotAuth from 'library/components/wrappers/WithNotAuth';
import Header from '../library/components/Header/Header';

const WithNotAuthReg = WithNotAuth(Reg);
const WithNotAuthLogin = WithNotAuth(Authorization);

const Routes = () => (
	<>
		<Header />
		<Switch>
			<Route exact path="/" render={() => <p>TITLe</p>} />
			<Route exact path="/login" component={WithNotAuthLogin} />
			<Route exact path="/reg" component={WithNotAuthReg} />
		</Switch>
	</>
);

export default Routes;
