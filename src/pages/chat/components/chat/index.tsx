/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/media-has-caption */
import React, {
	useState, useRef, useEffect, Component,
} from 'react';
import {socket} from 'main/index';
import Peer from 'simple-peer';
import { Divider } from '@material-ui/core';
import ChatFooter from '../input';
import Messages from '../messages';
import styles from './styles.scss';
import Modal from '../modal/modal';

const Chat = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.chat}>
			{open && <Modal open={open} />}
			<div className={styles.chat__header}>
				<button type="button" onClick={() => setOpen(true)}>
					Open Modal
				</button>
			</div>

			<Messages />

			<ChatFooter />
		</div>
	);
};

export default Chat;
