import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './styles.scss';

interface IAuthPage {
	isAuth: boolean;
}

const AuthPage = ({
	isAuth,
}: IAuthPage) => {
	if (isAuth === true) return <Redirect to="/chat" />;

	return (
		<div className={styles.container} />
	);
};

export default AuthPage;
