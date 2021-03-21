/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState, useEffect, useCallback} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './styles.scss';

interface IForm {
	loginReqSaga: (pws: string, email: string) => void,
	regReqSaga: (pws: string, email: string, username: string) => void,
}

const Form = ({
	loginReqSaga,
	regReqSaga,
}: IForm) => {
	const [isReg, setIsReg] = useState(true);

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

		try {
			if (!isReg) {
				regReqSaga(email, pws, `${firstName} ${lastName}`);
			} else {
				loginReqSaga(email, pws);
			}
		} catch (e) {
			console.log('e', e.message);

			alert('Error');
		}
	}, [email, pws, isDisabledBtn, firstName, lastName, isReg]);

	return (
		<form className={styles.loginForm} noValidate autoComplete="off">
			<h1 className={styles.loginForm__title}>Авторизируйтесь</h1>

			<div className={styles.loginForm__fields}>
				{
					!isReg && (
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
					{isReg ? 'Войти' : 'Зарегестрироваться'}
				</Button>
			</div>

			<p
				onClick={() => setIsReg(!isReg)}
				className={styles.changeAuth}
			>
				{isReg ? 'Зарегестрироваться' : 'Войти'}
			</p>
		</form>
	);
};

export default Form;
