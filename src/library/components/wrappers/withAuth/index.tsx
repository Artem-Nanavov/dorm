import React from 'react';
import {useUserStore} from 'main/RootStoreProvider';
import {Redirect} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

interface IWithAuth {
	Component: React.FC;
}

const WithAuth = (WrappedComponent: any) => {
	const Auth = observer(() => {
		const userStore = useUserStore();

		if (userStore.isAuth === false) {
			return <Redirect to="/login" />;
		}

		return WrappedComponent;
	});

	const ConnectedWithAuth = Auth;

	return ConnectedWithAuth;
};

export default WithAuth;
