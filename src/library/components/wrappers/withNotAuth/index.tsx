import React from 'react';
import {useUserStore} from 'main/RootStoreProvider';
import {Redirect} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

const WithNotAuth = (WrappedComponent: any) => {
	const Auth = observer(() => {
		const userStore = useUserStore();

		React.useEffect(() => {
			userStore.getUserInfo();
		}, []);

		if (userStore.isAuth === true && userStore.isLoadingAuth === false) {
			return <Redirect to="/" />;
		}

		if (userStore.isAuth === false && userStore.isLoadingAuth === false) {
			return <Redirect to="/login" />;
		}

		return <WrappedComponent />;
	});

	const ConnectedWithNotAuth = Auth;

	return ConnectedWithNotAuth;
};

export default WithNotAuth;
