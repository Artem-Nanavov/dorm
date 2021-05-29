import React from 'react';
import { Button } from '@material-ui/core';

import styles from './petition.scss';

const Pet = () => (
	<div className={styles.Pet}>
		<div className={styles.main}>
			<form>
				<Button type="submit">Подать петицию</Button>
				<div className={styles.petition}>
					<div className={styles.headPet}>Обновление системы водоснабжения на 3 этаже</div>
					<div className={styles.descriptionPet}>За прошедшие годами трубы устарели и их срочно надо заменить!</div>
				</div>
			</form>
		</div>
	</div>
);

export default Pet;
