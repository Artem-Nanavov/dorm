import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Reg from 'pages/Authorization';
import Authorization from 'pages/Authorization/components/auth/Login';
import WithNotAuth from 'library/components/wrappers/WithNotAuth';
import WithAuth from 'library/components/wrappers/withAuth';
import Header from '../library/components/Header/Header';
import Petetion from '../pages/Petetion';
import Orders from '../pages/Orders/Orders';

const WithNotAuthReg = WithNotAuth(Reg);
const WithNotAuthLogin = WithNotAuth(Authorization);
const WithAuthOrders = WithAuth(Orders);
const WithAuthPetetion = WithAuth(Petetion);

const Routes = () => (
	<>
		<Header />
		<Switch>
			<Route exact path="/" render={() => <p>TITLe</p>} />
			<Route exact path="/login" component={WithNotAuthLogin} />
			<Route exact path="/reg" component={WithNotAuthReg} />
			<Route path="/ad" component={WithAuthOrders} />
      <Route exact path="/petetion" component={WithAuthPetetion} />
		</Switch>
	</>
);

export default Routes;
