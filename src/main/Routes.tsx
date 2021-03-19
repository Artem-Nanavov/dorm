import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {hot} from 'react-hot-loader/root';
import Authorization from 'pages/Authorization';

const Routes = () => (
	<Switch>
		<Route exact path="/">
			<Redirect to="/login" />
		</Route>
		<Route exact path="/login" component={Authorization} />
	</Switch>
);

export default compose<typeof React.Component>(hot)(Routes);
