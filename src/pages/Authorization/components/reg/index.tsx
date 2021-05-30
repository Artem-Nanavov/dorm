import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import {useUserStore} from 'main/RootStoreProvider';
import { observer } from 'mobx-react-lite';
import styles from './reg.scss';

const Reg = observer(() => {
	const userStore = useUserStore();
	const history = useHistory();

	React.useEffect(() => {
		if (userStore.isAuth) {
			history.push('/ad');
		}
	}, [userStore.isAuth]);

	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [invitationId, setInvitationId] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [dormId, setDormId] = React.useState('');
	const [roomNumber, setRoomNumber] = React.useState('');

	const regHandler = React.useCallback(() => {
		userStore.reg(invitationId, firstName, lastName, password, dormId, roomNumber);
	}, [
		firstName,
		lastName,
		invitationId,
		password,
		dormId,
		roomNumber,
	]);

	return (
		<div className={styles.reg}>
			<div className={styles.block}>
				<div className={styles.blockContainer}>
					<div className={styles.container}>
						<h1>Регистрация</h1>
						<form>
							<div className={styles.formBorder}>
								<input
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									type="text"
									placeholder="Имя"
								/>
								<input
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									type="text"
									placeholder="Фамилия"
								/>
								<input
									value={dormId}
									onChange={(e) => setDormId(e.target.value)}
									type="text"
									placeholder="Выберите общежитие"
								/>
								<input
									value={roomNumber}
									onChange={(e) => setRoomNumber(e.target.value)}
									type="text"
									placeholder="Номер команты (необязательно)"
								/>
								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									type="password"
									placeholder="Пароль"
								/>
								<input
									value={invitationId}
									onChange={(e) => setInvitationId(e.target.value)}
									type="password"
									placeholder="Код приглашения"
								/>
							</div>
							<Button onClick={regHandler} type="button">Зарегистрироваться</Button>
						</form>
						<NavLink className={styles.yet} to="/login">Уже зарегистрировались?</NavLink>
					</div>
				</div>
			</div>
			<div className={styles.imgs}>
				<div className={styles.imageContainer}>
					<div className={styles.headText}>МЫЩага</div>
					<div className={styles.subText}>Закрытое сообщество общежитий</div>
				</div>
			</div>
		</div>
	);
});

export default Reg;
