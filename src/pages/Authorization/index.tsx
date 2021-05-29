import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './styles.scss';

import Reg from './components/reg/Reg';

interface IAuthPage {
	isAuth: boolean;
}

const Authorization = ({
	isAuth,
}: IAuthPage) => {
	if (isAuth === true) return <Redirect to="/chat" />;

	return (
		<div className={styles.container}><Reg /></div>
	);
};

export default Authorization;
