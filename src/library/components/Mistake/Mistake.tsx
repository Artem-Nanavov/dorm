import React from 'react';
import styles from './mistake.scss';

import mistake from '../../../images/mistake.svg';

const Mistake = () => (
	<div>
		<img src={mistake} alt="error" className={styles.mistake} />
	</div>
);
export default Mistake;
