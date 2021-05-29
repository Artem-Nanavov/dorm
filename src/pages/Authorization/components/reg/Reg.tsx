import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import styles from './reg.scss';

const Reg = () => (
	<div className={styles.reg}>
		<div className={styles.block}>
			<div className={styles.blockContainer}>
				<h1>Регистрация</h1>
				<div className={styles.container}>
					<form className={styles.forms}>
						<div className={styles.formBorder}>
							<input type="text" placeholder="ФИО" />
							<input type="email" placeholder="Email" />
							<input type="text" placeholder="Город" />
							<input type="text" placeholder="Выберите общежитие" />
							<input type="text" placeholder="Номер команты (необязательно)" />
							<input type="password" placeholder="Пароль" />
						</div>
						<Button type="submit">Зарегистрироваться</Button>
					</form>
				</div>
				<NavLink className={styles.yet} to="/login">Уже зарегистрировались?</NavLink>
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

export default Reg;
