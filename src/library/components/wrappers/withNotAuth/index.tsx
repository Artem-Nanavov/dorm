import React from 'react';
import {useUserStore} from 'main/RootStoreProvider';
import {Redirect} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

interface IWithAuth {
	Component: React.FC;
}

const WithNotAuth = (WrappedComponent: any) => {
	const Auth = observer(() => {
		const userStore = useUserStore();

		React.useEffect(() => {
			userStore.getUserInfo();
		}, []);

		if (userStore.isAuth === true) {
			return <Redirect to="/" />;
		}

		if (userStore.isAuth === false) {
			return <Redirect to="/login" />;
		}

		return WrappedComponent;
	});

	const ConnectedWithNotAuth = Auth;

	return ConnectedWithNotAuth;
};

export default WithNotAuth;
