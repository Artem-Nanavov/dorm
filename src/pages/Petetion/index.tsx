import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import styles from './petition.scss';
import cn from "classnames";

const Petetion = () => {
	const [count, setCount] = useState(0);

	const handleRemove = () => {
		setCount(count - 1);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<div className={styles.buttonSend}>
					<Button>Создать петицию</Button>
				</div>
				<div className={styles.petition}>
					<div className={styles.description}>
						<div className={styles.headPet}>Обновление системы водоснабжения на 3 этаже</div>
						<div className={styles.descriptionPet}>За прошедшие годами трубы устарели и их срочно надо заменить!</div>
					</div>
					<div className={styles.counter}>
						<div className={cn(styles.numberVoices, {[styles.color]: count < 0})}><p>{count}</p></div>
						<div className={styles.btns}>
							<div>
								<IconButton className={styles.add} onClick={() => setCount(count + 1)}><AddIcon /></IconButton>
							</div>
							<div>
								<IconButton className={styles.remove} onClick={handleRemove}><RemoveIcon /></IconButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Petetion;
