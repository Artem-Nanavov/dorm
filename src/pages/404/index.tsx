import React from 'react';
import mistake from 'images/404.svg';
import styles from './styles.scss';

const Mistake = () => (
	<div className={styles.wrap}>
		<img src={mistake} alt="error" className={styles.mistake} />
	</div>
);
export default Mistake;
