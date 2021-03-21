import React from 'react';
import styles from './styles.scss';

interface IRoom {
	title: string;
}

const Room = ({
	title,
}: IRoom) => {
	console.log('room');

	return (
		<div className={styles.room}>
			<div className={styles.room_avatar} />

			<div className={styles.room__title}>
				{title}
			</div>
		</div>
	);
};

export default Room;
