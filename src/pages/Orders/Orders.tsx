import React from 'react';
import {
	NavLink, Route, Switch,
} from 'react-router-dom';

import {Button} from '@material-ui/core';
import Find from '../../library/components/Find/Find';
import Change from '../../library/components/Change/Change';
import Search from '../../library/components/Search/Search';

import styles from './orders.scss';

const Orders = () => (
	<div className={styles.wrapper}>
		<div className={styles.container}>
			<div className={styles.empty} />
			<div className={styles.textContainer}>
				<NavLink activeClassName={styles.active} to="/products/find">
					<Button>
						Нашёл
					</Button>
				</NavLink>
				<NavLink activeClassName={styles.active} to="/products/change">
					<Button>
						Обмен
					</Button>
				</NavLink>
				<NavLink activeClassName={styles.active} to="/products/search">
					<Button>
						Ищу
					</Button>
				</NavLink>
			</div>
			<div className={styles.addOrder}>
				<Button>
					Подать объявление
				</Button>
			</div>
		</div>
		<Switch>
			<Route path="/products/find" component={Find} />
			<Route path="/products/change" component={Change} />
			<Route path="/products/search" component={Search} />
		</Switch>
	</div>
);

export default Orders;
