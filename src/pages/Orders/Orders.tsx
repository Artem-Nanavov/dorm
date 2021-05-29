import React, {useState} from 'react';
import {
	NavLink, Route, Switch, useHistory,
} from 'react-router-dom';
import {Button} from '@material-ui/core';
import Find from 'library/components/Find/Find';
import Change from 'library/components/Change/Change';
import Search from 'library/components/Search/Search';
import ModalWarring from 'library/components/ModalWarring/ModalWarring';
import styles from './orders.scss';

const Orders = () => {
	const history = useHistory();
	const [open, setOpen] = useState(false);

	React.useEffect(() => {
		history.replace('/ad/find');
	}, []);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.empty} />
				<div className={styles.textContainer}>
					<NavLink activeClassName={styles.active} to="/ad/find">
						<Button>
							Нашёл
						</Button>
					</NavLink>
					<NavLink activeClassName={styles.active} to="/ad/change">
						<Button>
							Обмен
						</Button>
					</NavLink>
					<NavLink activeClassName={styles.active} to="/ad/search">
						<Button>
							Ищу
						</Button>
					</NavLink>
				</div>
				<div className={styles.addOrder}>
					<Button onClick={handleClickOpen}>
						Подать объявление
					</Button>
					<ModalWarring handleClose={handleClose} open={open} />
				</div>
			</div>
			<Switch>
				<Route path="/ad/find" component={Find} />
				<Route path="/ad/change" component={Change} />
				<Route path="/ad/search" component={Search} />
			</Switch>
		</div>
	);
};

export default Orders;
