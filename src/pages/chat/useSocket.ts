import {useState, useEffect, useCallback} from 'react';
import { io, Socket } from 'socket.io-client';
import {socket} from 'main/index';
import { IMsg } from 'pages/chat/components/message';

const useSocket = () => {
	const [isConnected, setIsConnected] = useState(false);
	const [msgs, setMsgs] = useState<IMsg[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	console.log('isConnected', isConnected);

	// const initSocket = useCallback(() => {
	// 	const _socket = io('http://localhost:8000', {});

	// 	_socket.on('connect', () => setIsConnected(true));
	// 	_socket.on('disconnect', () => setIsConnected(false));

	// 	setSocket(_socket);
	// }, []);

	// useEffect(() => {
	// 	socket.on('user join', (username: string) => {
	// 		console.log('user join', username);
	// 	});
	// }, []);

	// useEffect(() => {
	// 	socket.on('new message', (msg: IMsg) => {
	// 		console.log('new message', msg);
	// 		setMsgs((preState) => [...preState, msg]);
	// 	});
	// }, []);

	// useEffect(() => {
		// socket.on('connect to chat', (_msgs: IMsg[]) => {
		// 	setMsgs(_msgs);
		// 	setIsLoading(false);
		// });
	// }, []);

	const sendMsg = useCallback(
		(
			msg: string,
			user_id: string,
			username: string,
		) => {
			socket.emit('new message', {text: msg, owner_id: user_id, username});
		},

		[socket],
	);

	// const sendMsg = (
	// 	msg: string,
	// 	user_id: string,
	// 	username: string,
	// ) => {
	// 	if (!socket) return;
	// 	socket.emit('new message', {text: msg, owner_id: user_id, username});
	// };

	return {
		// msgs,
		// initSocket,
		sendMsg,
		// isLoading,
		isConnected,
	};
};

export default useSocket;
