import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Authorization from 'pages/Authorization';

// import Login from "../pages/Authorization/Login/Login";

	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" render={() => <p>TITLe</p>} />
				<Route exact path="/login" component={Authorization} />
			</Switch>
		</>
	);
};

export default Routes;
