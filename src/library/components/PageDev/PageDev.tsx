import React from 'react';
import styles from './PageDev.scss';

import pagedev from '../../../images/pagedev.jpeg';

const PageDev = () => (
	<div className={styles.PageDev}>
		<div className={styles.p}>
			<p className={styles.text}>Раздел находится в разработке</p>
		</div>
		<div className={styles.photo}>
			<img src={pagedev} alt="error" />
		</div>
	</div>
);
export default PageDev;
