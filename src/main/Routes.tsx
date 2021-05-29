import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Authorization from 'pages/Authorization';
import Orders from '../pages/Orders/Orders';

const Routes = () => {
	console.log('');

	return (
		<Switch>
			<Route exact path="/" render={() => <p>TITLe</p>} />
			<Route exact path="/login" component={Authorization} />
			<Route path="/products" component={Orders} />
		</Switch>
	);
};

export default Routes;
