import React from 'react';
import img from 'images/background.jpeg';
import styles from './reg.scss';

const Reg = () => (
	<div className={styles.reg}>
		<div className={styles.block}>
			<div className={styles.blockContainer}>
				<h1>Регистрация</h1>
				<div className={styles.container}>
					<div className={styles.bord}>
						<form className={styles.forms}>
							<input type="text" placeholder="Имя" />

							<input type="text" placeholder="Фамилия" />

							<input type="text" placeholder="Email" />

							<input type="text" placeholder="Город" />

							<input type="text" placeholder="Выберите общежитие" />

							<input type="text" placeholder="Номер команты (необязательно)" />
						</form>
						<button type="submit">Зарегистрироваться</button>
					</div>
				</div>
			</div>
		</div>
		<div className={styles.imageContainer}>
			<img src={img} alt="" />
		</div>
	</div>
        );
export default Reg;
