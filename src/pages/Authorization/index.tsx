import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './styles.scss';

import Reg from './components/reg/index';

interface IAuthPage {
	isAuth: boolean;
}

const AuthPage = ({
	isAuth,
}: IAuthPage) => {
	if (isAuth === true) return <Redirect to="/chat" />;

	return (
<<<<<<< Updated upstream
		<div className={styles.container} />
=======
		<div className={styles.container}>
			
		</div>
>>>>>>> Stashed changes
	);
};

export default AuthPage;
