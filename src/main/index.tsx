import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import {RootStoreProvider} from './RootStoreProvider';

import '../styles/nullstyles.css';

render(
	<BrowserRouter>
		<RootStoreProvider>
			<Routes />
		</RootStoreProvider>
	</BrowserRouter>,
	document.getElementById('app'),
);
