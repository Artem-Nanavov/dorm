import React from 'react';
import {useOrderStore} from 'main/RootStoreProvider';
import OrderMessage from '../OrderMessage/OrderMessage';

const Find = () => {
	const orderStore = useOrderStore();

	React.useEffect(() => {
		orderStore.getItems('find');
	}, []);

	return <OrderMessage type="find" />;
};

export default Find;
