import React from 'react';
import { observer } from 'mobx-react-lite';
import {Button} from '@material-ui/core';
import { IOrderType } from 'pages/Orders/store/ordersStore';
import {useOrderStore} from 'main/RootStoreProvider';
import styles from './style.scss';
import { useHistory } from 'react-router-dom';

interface Props {
	type: IOrderType;
}

const OrderMessage = observer(({
	type,
}: Props) => {
	const history = useHistory();
	const orderStore = useOrderStore();

	React.useEffect(() => {
		orderStore.getItems(type);
	}, []);

	const messages = orderStore.getLocalItems(type).map((item) => (
		<div key={item.id} className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={`${process.env.SERVER_API}${item.image}`} alt="картинка" />
			</div>
			<div className={styles.description}>
				<div className={styles.descriptionContainer}>
					<h3>{item.title}</h3>
					<p>{item.text}</p>
				</div>
			</div>
			<div className={styles.moreInformation}>
				<Button onClick={() => history.push('/pagedev')}>
					Подробнее
				</Button>
			</div>
		</div>
	));

	return (
		<div className={styles.grid}>
			{messages}
		</div>
	);
});

export default OrderMessage;
