import React from 'react';
import {useUserStore} from 'main/RootStoreProvider';
import styles from './login.scss';

const Login = () => {
	const userStore = useUserStore();

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const login = React.useCallback(() => {
		userStore.login(email, password);
	}, [email, password]);

	return (
		<div className={styles.log}>
			<div className={styles.block}>
				<div className={styles.blockContainer}>
					<h1>Авторизация</h1>
					<div className={styles.container}>
						<div className={styles.bord}>
							<form className={styles.forms}>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="text"
									placeholder="Email"
								/>

								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									type="text"
									placeholder="Пароль"
								/>
							</form>
						</div>
					</div>

					<div className={styles.label}>
						<div className={styles.checkbox}>
							<input type="checkbox" />
							<div className={styles.text}>Запомнить меня </div>
						</div>

						<div className={styles.forgetPassword}>Забыли пароль?</div>
					</div>
					<button onClick={login} type="submit">Войти</button>
					<div className={styles.yet}>Авторизация доступна только по специальным приглашениям</div>
				</div>
			</div>
			<div className="imgs">
				<div className={styles.imageContainer}>
					<div className={styles.headText}>МЫЩага</div>
					<div className={styles.subText}>Закрытое сообщество общежитий</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
