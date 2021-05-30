import React from 'react';
import {useUserStore} from 'main/RootStoreProvider';
import {observer} from 'mobx-react-lite';
import Loader from '../loader';

const style: React.CSSProperties = {
	width: '100vw',
	height: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

const withLoader = (WrappedComponent: React.FunctionComponent) => {
	const Content = observer(() => {
		const userStore = useUserStore();

		React.useEffect(() => {
			if (userStore.isLoadingAuth === true) {
				userStore.getUserInfo();
			}
		}, []);

		return (
			<>
				{userStore.isLoadingAuth ? (
					<div style={style}>
						<Loader width="100px" />
					</div>
				) : (
					<WrappedComponent />
				)}
			</>
		);
	});

	const ConnectedWithLoader = Content;

	return ConnectedWithLoader;
};

export default withLoader;
