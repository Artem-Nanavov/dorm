import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Reg from 'pages/Authorization';
import Authorization from 'pages/Authorization/components/auth/Login';
import WithAuth from 'library/components/wrappers/withAuth';
import withLoader from 'library/components/wrappers/withLoader';
import WithHeader from 'library/components/wrappers/withHeader';
import { useSnackbar } from 'notistack';
import Petition from 'pages/Petition';
import Orders from 'pages/Orders/Orders';
import Page404 from 'pages/404';
import {useRootStore} from './RootStoreProvider';

const WithAuthOrders = WithAuth(Orders);
const WithAuthPetition = WithAuth(Petition);

const WithHeaderOrders = WithHeader(WithAuthOrders);
const WithHeaderPetition = WithHeader(WithAuthPetition);

const WithLoaderReg = withLoader(Reg);
const WithLoaderAuth = withLoader(Authorization);
const WithLoaderOrders = withLoader(WithHeaderOrders);
const WithLoaderPetition = withLoader(WithHeaderPetition);
const WithLoader404 = withLoader(Page404);

const Routes = () => {
	const { enqueueSnackbar } = useSnackbar();
	const rootStore = useRootStore();

	React.useEffect(() => {
		rootStore.socket.on('on warning', (data: any) => {
			enqueueSnackbar(data.message, {variant: 'warning'});
		});
	}, []);

	return (
		<>
			<Switch>
				<Route exact path="/" component={WithLoaderReg}>
					<Redirect to="/ad" />
				</Route>
				<Route exact path="/login" component={WithLoaderAuth} />
				<Route exact path="/reg" component={WithLoaderReg} />
				<Route path="/ad" component={WithLoaderOrders} />
				<Route exact path="/petition" component={WithLoaderPetition} />
				<Route exact path="/*" component={WithLoader404} />
			</Switch>
		</>
	);
};

export default Routes;
