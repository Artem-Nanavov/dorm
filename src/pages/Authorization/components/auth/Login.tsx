import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {useUserStore} from 'main/RootStoreProvider';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import styles from './login.scss';

const Login = observer(() => {
	const userStore = useUserStore();
	const history = useHistory();

	React.useEffect(() => {
		if (userStore.isAuth) {
			history.push('/ad');
		}
	}, [userStore.isAuth]);

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [state, setState] = React.useState(false);

	const login = React.useCallback(() => {
		userStore.login(email, password);
	}, [email, password]);

	const handleChange = () => {
		setState(!state);
	};

	return (
		<div className={styles.log}>
			<div className={styles.block}>
				<div className={styles.blockContainer}>
					<div className={styles.container}>
						<h1>Авторизация</h1>
						<form>
							<div className={styles.formContainer}>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="text"
									placeholder="Email"
								/>

								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									type="password"
									placeholder="Пароль"
								/>
							</div>
							<div className={styles.label}>
								<FormControlLabel
									control={(
										<Checkbox
											checked={state}
											onChange={handleChange}
											name="checkedB"
											color="primary"
										/>
									)}
									label="Запомнить меня"
								/>
								<div className={styles.forgetPassword}>Забыли пароль?</div>
							</div>
						</form>
					</div>
					<Button onClick={login} type="submit">Войти</Button>
				</div>
				<div className={styles.yet}>Авторизация доступна только по специальным приглашениям</div>
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

export default Login;
