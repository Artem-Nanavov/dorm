import React from 'react';
import { Redirect } from 'react-router-dom';
import {useUserStore} from 'main/RootStoreProvider';
import {observer} from 'mobx-react-lite';
import styles from './styles.scss';

import Reg from './components/reg';

const Authorization = observer(() => {
	const userStore = useUserStore();

	if (userStore.isAuth === true) return <Redirect to="/ad" />;

	return (
		<div className={styles.container}><Reg /></div>
	);
});

export default Authorization;
