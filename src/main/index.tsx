import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Routes from './Routes';
import {RootStoreProvider} from './RootStoreProvider';

import '../styles/nullstyles.css';

render(
	<BrowserRouter>
		<RootStoreProvider>
			<SnackbarProvider maxSnack={2}>
				<Routes />
			</SnackbarProvider>
		</RootStoreProvider>
	</BrowserRouter>,
	document.getElementById('app'),
);
