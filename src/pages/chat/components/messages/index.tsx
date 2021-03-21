import React, {useEffect, useState} from 'react';
import {RootState, socket} from 'main/index';
import {connect} from 'react-redux';
import Message, { IMsg } from '../message';
import styles from './styles.scss';

interface IMessages {
	_id: string | null;
}

const Messages = ({
	_id,
}: IMessages) => {
	const [msgs, setMsgs] = useState<IMsg[]>([]);

	useEffect(() => {
		socket.on('connect to chat', (_msgs: IMsg[]) => {
			setMsgs(_msgs);
			// setIsLoading(false);
		});
	}, []);

	useEffect(() => {
		const elem = document.getElementById('chat-content');

		if (elem) {
			elem.scrollTop = elem.scrollHeight;
		}
	}, [msgs]);

	useEffect(() => {
		socket.on('new message', (msg: IMsg) => {
			console.log('new message', msg);
			setMsgs((preState) => [...preState, msg]);
		});
	}, []);

	return (
		<div className={styles.messages} id="chat-content">
			{
				msgs.map((item) => (
					<Message
						key={item.msg_id}
						isMe={item.owner_id === _id}
						date={item.date}
						text={item.text}
						username={item.username}
					/>
				))
			}
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	_id: state.AuthPage._id,
});

export default connect(mapStateToProps, {})(Messages);
