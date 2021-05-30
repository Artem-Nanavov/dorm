import React from 'react';
import styles from './PageDev.scss';

const PageDev = () => (
	<div className={styles.PageDev}>
		<div className={styles.square}>
			<div className={styles.text}>Раздел находится в разработке</div>
		</div>
		<div className={styles.photo} />
	</div>
);
export default PageDev;
