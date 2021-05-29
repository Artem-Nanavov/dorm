import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import styles from './petition.scss';

const Pet = () => {
	const [count, setCount] = useState(0);

	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<Button className={styles.getPet}>Создать петицию</Button>
				<div className={styles.petition}>
					<div className={styles.description}>
						<div className={styles.headPet}>Обновление системы водоснабжения на 3 этаже</div>
						<div className={styles.descriptionPet}>За прошедшие годами трубы устарели и их срочно надо заменить!</div>
					</div>
					<div className={styles.counter}>
						<div className={styles.numberVoices}>{count}</div>
						<div className={styles.btns}>
							<IconButton className={styles.add} onClick={() => setCount(count + 1)}><AddIcon /></IconButton>
							<IconButton className={styles.remove} onClick={() => setCount(count - 1)}><RemoveIcon /></IconButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pet;
