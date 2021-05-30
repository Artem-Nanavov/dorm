import React from 'react';
import {useOrderStore} from 'main/RootStoreProvider';
import OrderMessage from '../OrderMessage/OrderMessage';

const Search = () => {
	const orderStore = useOrderStore();

	React.useEffect(() => {
		orderStore.getItems('search');
	}, []);

	return <OrderMessage type="search" />;
};

export default Search;
