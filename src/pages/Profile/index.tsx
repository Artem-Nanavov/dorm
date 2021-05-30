/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import StatusInvites from 'library/components/StatusInvites/StatusInvites';
import {observer} from 'mobx-react-lite';
import {useUserStore} from 'main/RootStoreProvider';
import styles from './profile.scss';

const mockData = [
	{
		email: 'email@email.com',
		date: new Date(),
		id: 1,
		status: true,
	},
	{
		email: 'email@email.com',
		date: new Date(),
		id: 1,
		status: false,
	},
];

const Profile = observer(() => {
	const userStore = useUserStore();

	const [files, setFile] = React.useState<any>([]);
	const [change, setChange] = React.useState(false);

	const [firstName, setFirstName] = React.useState(userStore.user?.first_name || '');
	const [lastName, setLastName] = React.useState(userStore.user?.last_name || '');
	const [password, setPassword] = React.useState('');
	const [newPassword, setNewPassword] = React.useState('');
	const [roomNumber, setRoomNumber] = React.useState(userStore.user?.room_number || '');

	React.useEffect(() => () => {
		// Make sure to revoke the data uris to avoid memory leaks
		files.forEach((file: any) => URL.revokeObjectURL(file.preview));
	}, [files]);

	const onHandleClick = (e: any) => {
		const arr = Array.from(e.target.files).map((file: any) => Object.assign(file, {
			preview: URL.createObjectURL(file),
		}));
		setFile(arr);
		setChange(true);
	};

	const saveProfile = React.useCallback(() => {
		const fields = [];

		fields.push({
			key: 'firstName',
			value: firstName,
		});
		fields.push({
			key: 'lastName',
			value: lastName,
		});
		fields.push({
			key: 'password',
			value: newPassword,
		});
		fields.push({
			key: 'roomNumber',
			value: roomNumber,
		});
		fields.push({
			key: 'image',
			value: files,
		});

		userStore.updateUserInfo(fields);
	}, [
		firstName,
		lastName,
		newPassword,
		roomNumber,
		files,
	]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h3>Профиль</h3>
				<div className={styles.infoProfile}>
					<div className={styles.avatar}>
						<div className={styles.imageAvatar}>
							<img src={change ? files[0].preview : `${process.env.SERVER_API}${userStore.user?.image}`} alt="avatar" />
						</div>
						<div className={styles.input}>
							<Button
								component="label"
								className={styles.button}
							>
								Загрузить автар

								<input
									onChange={(e) => onHandleClick(e)}
									type="file"
									accept="image/*"
									hidden
								/>
							</Button>
						</div>
					</div>
					<div className={styles.info}>
						<div className={styles.password}>
							<TextField
								onChange={(e) => setFirstName(e.target.value)}
								value={firstName}
								label="Имя"
								type="text"
								variant="outlined"
							/>
							<TextField
								onChange={(e) => setLastName(e.target.value)}
								value={lastName}
								label="Фамилия"
								type="text"
								variant="outlined"
							/>
						</div>
						<TextField
							value={userStore.user?.email}
							disabled
							label="Почта"
							type="email"
							variant="outlined"
						/>
						<TextField value={userStore.user?.id} disabled label="ID Пользователя" type="password" variant="outlined" />
						<div className={styles.password}>
							<TextField
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								label="Старый пароль"
								type="password"
								variant="outlined"
							/>
							<TextField
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
								label="Новый пароль"
								type="password"
								variant="outlined"
							/>
						</div>
					</div>
					<div className={styles.info}>
						<TextField disabled label="ВУЗ" type="text" variant="outlined" />
						<TextField value={userStore.user?.dormId} disabled label="Общежитие №" type="text" variant="outlined" />
						<TextField
							onChange={(e) => setRoomNumber(e.target.value)}
							value={roomNumber}
							label="Номер комнаты"
							type="text"
							variant="outlined"
						/>
						<div className={styles.changes}>
							<Button onClick={saveProfile}>Сохранить изменения</Button>
						</div>
					</div>
				</div>
				<div className={styles.invite}>
					<h3>Приглашения</h3>
					<div className={styles.sendInvite}>
						<TextField
							className={styles.inputInvite}
							variant="outlined"
							type="email"
							label="Введите email"
						/>
						<Button>Отправить</Button>
					</div>
				</div>
				<div className={styles.myInvites}>
					<StatusInvites array={mockData} />
				</div>
			</div>
		</div>
	);
});

export default Profile;
