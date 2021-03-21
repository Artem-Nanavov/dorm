import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {RootState, socket} from 'main/index';
import {connect} from 'react-redux';
import styles from './styles.scss';

interface IChatFooter {
	_id: string | null;
	username: string | null;
}

const ChatFooter = ({
	_id,
	username,
}: IChatFooter) => {
	const [msg, setMsg] = useState('');

	const sendMsgHandler = (e: any) => {
		if (e.key === 'Enter' && msg.trim().length > 0) {
			socket.emit('new message', {text: msg, owner_id: _id, username});
			setMsg('');
		}
	};
	return (
		<div className={styles.chat__footer}>
			<TextField
				id="outlined-basic"
				label="Outlined"
				value={msg}
				size="small"
				onKeyDown={sendMsgHandler}
				fullWidth
				onChange={(e) => setMsg(e.target.value)}
				variant="outlined"
			/>
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	_id: state.AuthPage._id,
	username: state.AuthPage.username,
});

export default connect(mapStateToProps, {})(ChatFooter);
