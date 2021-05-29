import React from 'react';
import {Button} from '@material-ui/core';
import {IDataMessageMock} from '__mocks__/dataMessageMock';
import styles from './style.scss';

interface Props {
	data: IDataMessageMock[];
}

const OrderMessage = ({data}: Props) => {
	const messages = data.map((item) => (
		<div key={Date.now()} className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={item.img} alt="картинка" />
			</div>
			<div className={styles.description}>
				<div className={styles.descriptionContainer}>
					<h3>{item.title}</h3>
					<p>{item.message}</p>
				</div>
			</div>
			<div className={styles.moreInformation}>
				<Button>
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
};

export default OrderMessage;
