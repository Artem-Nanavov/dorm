import React from 'react';
import {useOrderStore} from 'main/RootStoreProvider';
import OrderMessage from '../OrderMessage/OrderMessage';

const Change = () => {
	const orderStore = useOrderStore();

	React.useEffect(() => {
		orderStore.getItems('change');
	}, []);

	return <OrderMessage type="change" />;
};

export default Change;
