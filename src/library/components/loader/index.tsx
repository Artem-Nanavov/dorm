import React from 'react';
import styles from './styles.scss';

interface ILoader {
	width?: string;
}

const Loader = ({
	width = '60px',
}: ILoader) => (
	<svg className={styles.loader} style={{width}} viewBox="0 0 24 24">
		<circle className={styles.loader__value} cx="12" cy="12" r="10" />
		<circle className={styles.loader__value} cx="12" cy="12" r="10" />
		<circle className={styles.loader__value} cx="12" cy="12" r="10" />
		<circle className={styles.loader__value} cx="12" cy="12" r="10" />
		<circle className={styles.loader__value} cx="12" cy="12" r="10" />
		<circle className={styles.loader__value} cx="12" cy="12" r="10" />
	</svg>
);

export default Loader;
