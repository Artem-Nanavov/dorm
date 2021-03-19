/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState, useEffect, useCallback} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './styles.scss';

const Form = () => {
	const [isReg, setIsReg] = useState(false);

	const [email, setEmail] = useState('');
	const [pws, setPws] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [isDisabledBtn, setIsDisabledBtn] = useState(true);

	useEffect(() => {
		setIsDisabledBtn(pws.trim().length < 6 || email.trim().length < 5);
	}, [pws, email]);

	const loginHandler = useCallback(() => {
		if (isDisabledBtn) return;

		console.log('login');
	}, []);

	const changeIsReg = () => setIsReg(!isReg);

	return (
		<form className={styles.loginForm} noValidate autoComplete="off">
			<h1 className={styles.loginForm__title}>Авторизируйтесь</h1>

			<div className={styles.loginForm__fields}>
				{
					isReg && (
						<div className={styles.loginForm__name}>
							<TextField
								value={firstName}
								id="firstName"
								label="Имя"
								onChange={(e) => setFirstName(e.target.value)}
								variant="outlined"
								size="small"
							/>

							<TextField
								value={lastName}
								id="lastName"
								label="Фамилия"
								onChange={(e) => setLastName(e.target.value)}
								variant="outlined"
								size="small"
							/>
						</div>
					)
				}

				<TextField
					value={email}
					id="login"
					fullWidth
					label="Логин"
					onChange={(e) => setEmail(e.target.value)}
					variant="outlined"
					size="small"
				/>

				<TextField
					value={pws}
					fullWidth
					id="login"
					label="Пароль"
					onChange={(e) => setPws(e.target.value)}
					variant="outlined"
					size="small"
				/>
			</div>

			<div style={{display: 'flex', justifyContent: 'center'}}>
				<Button
					size="small"
					variant="outlined"
					color="primary"
					onClick={loginHandler}
					disabled={isDisabledBtn}
				>
					Войти
				</Button>
			</div>

			<p
				onClick={changeIsReg}
				className={styles.changeAuth}
			>
				{isReg ? 'Зарегестрироваться' : 'Войти'}
			</p>
		</form>
	);
};

export default Form;
