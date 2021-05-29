import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import WarningIcon from '@material-ui/icons/Warning';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import MenuAuth from '../MenuAuth/MenuAuth';

import styles from './header.scss';

import Logo from '../Logo/Logo';

const Header = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={styles.header}>
			<div className={styles.headerContainer}>
				<div className={styles.contentLogo}>
					<NavLink to="/">
						<Logo />
					</NavLink>
				</div>
				<div className={styles.contentText}>
					<div className={styles.container}>
						<NavLink to="/">
							<Button>
								Главная
							</Button>
						</NavLink>
						<NavLink to="">
							<Button>
								Объявления
							</Button>
						</NavLink>
						<NavLink to="/petetion">
							<Button>
								Петиции
							</Button>
						</NavLink>
					</div>
				</div>
				<div className={styles.contentContact}>
					<IconButton className={styles.user} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
						<PersonIcon />
					</IconButton>
					<MenuAuth anchorEl={anchorEl} handleClose={handleClose} />
					<IconButton>
						<WarningIcon />
					</IconButton>
					<IconButton>
						<NotificationsNoneIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default Header;
