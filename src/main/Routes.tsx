import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Authorization from 'pages/Authorization';
import Header from '../library/components/Header/Header';
import Petetion from '../pages/Petetion';

const Routes = () => {
	console.log('');

	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" render={() => <p>TITLe</p>} />
				<Route exact path="/login" component={Authorization} />
				<Route exact path="/petetion" component={Petetion} />
			</Switch>
		</>
	);
};

export default Routes;
