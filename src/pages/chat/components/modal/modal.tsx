/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/media-has-caption */
import React, {
	useState, useRef, useEffect,
} from 'react';
import Modal from '@material-ui/core/Modal';
import {socket} from 'main/index';
import Peer from 'simple-peer';
import Webcam from 'react-webcam';
import styles from './styles.scss';

interface IChat {
	open: boolean;
}

const videoConstraints = {
	width: 1280,
	height: 720,
	facingMode: 'user',
};

const ModalComponent = ({
	open,
}: IChat) => {
	// const [me, setMe] = useState('');
	// const [stream, setStream] = useState<MediaStream | undefined>(undefined);
	// const [receivingCall, setReceivingCall] = useState(false);
	// const [caller, setCaller] = useState('');
	// const [callerSignal, setCallerSignal] = useState(null);
	// const [callAccepted, setCallAccepted] = useState(false);
	// const [idToCall, setIdToCall] = useState('');
	// const [callEnded, setCallEnded] = useState(false);
	// const [name, setName] = useState('');
	// const myVideo = React.createRef();
	// const userVideo = React.createRef();
	// const connectionRef = React.createRef();

	// useEffect(() => {
	// 	socket.on('me', (id) => {
	// 		setMe(id);
	// 	});

	// 	socket.on('callUser', (data) => {
	// 		setReceivingCall(true);
	// 		setCaller(data.from);
	// 		setName(data.name);
	// 		setCallerSignal(data.signal);
	// 	});
	// }, []);

	const [yourID, setYourID] = useState('');
	const [users, setUsers] = useState({});
	const [stream, setStream] = useState<any>(null);
	const [receivingCall, setReceivingCall] = useState(false);
	const [caller, setCaller] = useState('');
	const [callerSignal, setCallerSignal] = useState<any>(null);
	const [callAccepted, setCallAccepted] = useState(false);

	const userVideo = useRef<any>(null);
	const partnerVideo = useRef<any>(null);
	// const socket = useRef<any>(null);

	const Draw = (video: any, context: any, canvas: any) => {
		context.drawImage(video, 0, 0, context.width, context.height);
		socket.emit('video', canvas.toDataURL('image/webp'));
		// // context.drawImage(video, 0, 0, context.width, context.height);
		// socket.emit('video', context);
	};

	useEffect(() => {
		socket.on('video-stream', (video: any) => {
			console.log('video-stream', video);
			// setMsgs((preState) => [...preState, msg]);
		});

		if (stream) {
			const canvas: any = document.getElementById('preview');
			const context = canvas.getContext('2d');

			setInterval(() => {
				Draw(stream, context, canvas);
			}, 0.1);
		}
	}, [stream]);

	useEffect(() => {
		console.log(1);
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((_stream) => {
			setStream(_stream);
			if (userVideo.current) {
				userVideo.current.srcObject = _stream;
			}
		});

		socket.on('yourID', (id: any) => {
			setYourID(id);
		});
		socket.on('allUsers', (_users: any) => {
			setUsers(_users);
		});

		socket.on('hey', (data: any) => {
			setReceivingCall(true);
			setCaller(data.from);
			setCallerSignal(data.signal);
		});
	}, [userVideo.current]);

	function callPeer(id: any) {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			config: {
				iceServers: [
					// {
					// 	urls: 'stun:numb.viagenie.ca',
					// 	username: 'sultan1640@gmail.com',
					// 	credential: '98376683',
					// },
					// {
					// 	urls: 'turn:numb.viagenie.ca',
					// 	username: 'sultan1640@gmail.com',
					// 	credential: '98376683',
					// },
				],
			},
			stream,
		});

		peer.on('signal', (data) => {
			socket.emit('callUser', { userToCall: id, signalData: data, from: yourID });
		});

		peer.on('stream', (_stream: any) => {
			if (partnerVideo.current) {
				partnerVideo.current.srcObject = _stream;
			}
		});

		socket.on('callAccepted', (signal: any) => {
			setCallAccepted(true);
			peer.signal(signal);
		});
	}

	function acceptCall() {
		setCallAccepted(true);
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream,
		});
		peer.on('signal', (data) => {
			socket.emit('acceptCall', { signal: data, to: caller });
		});

		peer.on('stream', (_stream) => {
			partnerVideo.current.srcObject = _stream;
		});

		peer.signal(callerSignal);
	}

	// const [stream, setStream] = useState<any>(null);
	// const [receivingCall, setReceivingCall] = useState(false);
	// const [caller, setCaller] = useState('');
	// // const [callerSignal, setCallerSignal] = useState();
	// const [callAccepted, setCallAccepted] = useState(false);
	// const [idToCall, setIdToCall] = useState('');
	// const [callEnded, setCallEnded] = useState(false);
	// const [name, setName] = useState('');
	// const myVideo = useRef<any>(null);
	// const userVideo = useRef(null);
	// const connectionRef = useRef(null);

	// useEffect(() => {
	// 	console.log(1);
	// 	navigator.mediaDevices
	// 		.getUserMedia({ video: true, audio: true })
	// 		.then((_stream: any) => {
	// 			setStream(stream);
	// 			if (myVideo.current) {
	// 				myVideo.current.srcObject = _stream;
	// 			}
	// 		});

	// 	// navigator.mediaDevices
	// 	// 	.getUserMedia({video: true, audio: true})
	// 	// 	// @ts-ignore
	// 	// 	.then((stream) => myVideo.current.srcObject = stream)
	// 	// 	.catch(console.log);

	// 	// socket.on('me', (id) => {
	// 	// 	setMe(id);
	// 	// });

	// 	// socket.on('callUser', (data) => {
	// 	// 	setReceivingCall(true);
	// 	// 	setCaller(data.from);
	// 	// 	setName(data.name);
	// 	// 	setCallerSignal(data.signal);
	// 	// });
	// });

	// const answerCall = () => {
	// 	setCallAccepted(true);
	// 	const peer = new Peer({
	// 		initiator: false,
	// 		trickle: false,
	// 		stream,
	// 	});
	// 	peer.on('signal', (data: any) => {
	// 		socket.emit('answerCall', { signal: data, to: caller });
	// 	});
	// 	peer.on('stream', (_stream: any) => {
	// 		// @ts-ignore
	// 		userVideo.current.srcObject = _stream;
	// 	});

	// 	// peer.signal(callerSignal);
	// 	// @ts-ignore
	// 	connectionRef.current = peer;
	// };

	// const handleOpen = () => {
	// 	setOpen(true);
	// };

	// const handleClose = () => {
	// 	setOpen(false);
	// };

	let UserVideo;
	if (stream) {
		UserVideo = (
			<video playsInline muted ref={userVideo} autoPlay style={{ width: '300px' }} />
		);
	}

	let PartnerVideo;
	if (callAccepted) {
		PartnerVideo = (
			<video playsInline ref={partnerVideo} autoPlay style={{ width: '300px' }} />
		);
	}

	let incomingCall;
	if (receivingCall) {
		incomingCall = (
			<div>
				<h1>
					{caller}
					{' '}
					is calling you
				</h1>
				<button onClick={acceptCall}>Accept</button>
			</div>
		);
	}
	// const webcamRef = React.useRef(null);
	return (
		<Modal
			open={open}
			// onClose={handleClose}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>
			<div className={styles.chat__modal}>
				<div className={styles.chat__modalContent}>
					{/* <Webcam
						audio={false}
						height={300}
						ref={webcamRef}
						width={300}
						videoConstraints={videoConstraints}
					/> */}
					<div>
						<video playsInline muted ref={userVideo} autoPlay style={{ width: '300px' }} />
						<canvas style={{display: 'none'}} id="preview" />
						{/* {UserVideo} */}
						{/* {PartnerVideo} */}
						{/* {stream && <video playsInline muted ref={userVideo} autoPlay style={{ width: '300px' }} />} */}
						{/* {callAccepted && <video playsInline ref={partnerVideo} autoPlay style={{ width: '300px' }} />} */}
					</div>

					{/* <div>
						{Object.keys(users).map((key) => {
							if (key === yourID) {
								return null;
							}
							return (
								<button key={key} onClick={() => callPeer(key)}>
									Call
									{key}
								</button>
							);
						})}
					</div> */}

					{/* <div className={styles.videoContainer}>
							<div className={styles.video}>
								<video playsInline muted ref={myVideo as any} autoPlay style={{ width: '300px' }} />
								{stream && <video playsInline muted ref={myVideo as any} autoPlay style={{ width: '300px' }} />}
							</div>
							<div className={styles.video}>
								{callAccepted && !callEnded
									? <video playsInline ref={userVideo} autoPlay style={{ width: '300px'}} />
									: null}
							</div>
						</div> */}
					{incomingCall}
				</div>
			</div>
		</Modal>
	);
};

export default ModalComponent;
