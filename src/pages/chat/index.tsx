import React from 'react';
import { Redirect } from 'react-router-dom';
import Chat from './components/chat';
import Room from './components/rooms';
import styles from './styles.scss';

interface IChat {
	isAuth: boolean;
}

const ChatPage = ({
	isAuth,
}: IChat) => {
	if (isAuth === false) return <Redirect to="/login" />;

	return (
		<div className={styles.chat}>
			<Chat />
		</div>
	);
};

export default ChatPage;
