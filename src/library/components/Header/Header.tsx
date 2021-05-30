import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ModalWarring from 'library/components/ModalWarring/ModalWarring';
import {
	withStyles,
} from '@material-ui/core/styles';
import MenuAuth from '../MenuAuth/MenuAuth';

import styles from './header.scss';

import Logo from '../Logo/Logo';

const CustomButton = withStyles(() => ({
	root: {
		background: '#C67373',
		textTransform: 'none',
		width: '100%',
		padding: '4px 8px',
		color: '#F4F5F4',
		fontSize: '12px',
		fontWeight: 300,
		'&:hover': {
			background: '#C67373',
		},
	},
}))(Button);

const Header = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [isOpenWarningModal, setIsOpenWarningModal] = React.useState(false);

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
						<NavLink exact activeClassName={styles.active} to="/">
							<Button>
								Главная
							</Button>
						</NavLink>
						<NavLink activeClassName={styles.active} to="/ad">
							<Button>
								Объявления
							</Button>
						</NavLink>
						<NavLink exact activeClassName={styles.active} to="/petition">
							<Button>
								Петиции
							</Button>
						</NavLink>
					</div>
				</div>
				<div className={styles.contentContact}>
					<IconButton className={styles.border} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
						<PersonIcon />
					</IconButton>
					<MenuAuth anchorEl={anchorEl} handleClose={handleClose} />
					<IconButton>
						<NotificationsNoneIcon />
					</IconButton>
					<CustomButton onClick={() => setIsOpenWarningModal(true)} color="primary">
						ТРЕВОГА !!!
					</CustomButton>
				</div>
			</div>

			<ModalWarring handleClose={() => setIsOpenWarningModal(false)} open={isOpenWarningModal} />
		</div>
	);
};

export default Header;
