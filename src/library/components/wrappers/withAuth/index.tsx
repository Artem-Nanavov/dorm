import React from 'react';
import {useUserStore} from 'main/RootStoreProvider';
import {Redirect} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

const WithAuth = (WrappedComponent: any) => {
	const Auth = observer(() => {
		const userStore = useUserStore();

		if (userStore.isAuth === false && userStore.isLoadingAuth === false) {
			return <Redirect to="/login" />;
		}

		return <WrappedComponent />;
	});

	const ConnectedWithAuth = Auth;

	return ConnectedWithAuth;
};

export default WithAuth;
