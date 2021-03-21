import React from 'react';
import cn from 'classnames';
import dateFormatter from 'dateformat';
import styles from './styles.scss';

interface IMessage {
	date: Date | string | number;
	username: string;
	text: string;
	isMe: boolean;
}

export interface IMsg extends IMessage {
	msg_id: string;
	owner_id: string;
}

const Message = ({
	date,
	username,
	text,
	isMe,
}: IMessage) => (
	<div
		className={`${styles.message} ${isMe ? styles.msgMe : ''}`}
	>
		<div className={styles.msgContent}>
			<div className={`${styles.msgHeader} ${isMe ? styles.msgHeadMe : ''}`}>
				<p className={styles.msgOwnerName}>{username}</p>

				<p className={styles.msgDate}>
					{dateFormatter(date, 'shortTime')}
				</p>
			</div>

			<p className={styles.msgText}>
				{text}
			</p>
		</div>
	</div>
	// <div className={cn(styles.message, {[styles.message__myMsg]: isMe})}>
	// 	<div className={styles.message__content}>
	// 		<p>{username}</p>

	// 		<p>{text}</p>
	// 	</div>
	// </div>
);

export default Message;
