import React, {useEffect, useState} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import StatusInvites from 'library/components/StatusInvites/StatusInvites';
import styles from './profile.scss';

import background from '../../images/background.jpeg';

const mockData = [
	{
		email: 'email@email.com',
		date: new Date(),
		id: 1,
		status: true,
	},
	{
		email: 'email@email.com',
		date: new Date(),
		id: 1,
		status: false,
	},
];

const Profile = () => {
	const [file, setFile] = useState('');
	const [change, setChage] = useState(false);

	useEffect(() => {
		// const formData = new FormData();
		// логика для отправки картинки и получния ее с сервера
	}, [file]);

	const onHandleClick = (e: any) => {
		setFile(e.target.files[0]);
		setChage(true);
		console.log(e.target.files[0]);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h3>Профиль</h3>
				<div className={styles.infoProfile}>
					<div className={styles.avatar}>
						<div className={styles.imageAvatar}>
							<img src={change ? file : background} alt="avatar" />
						</div>
						<div className={styles.input}>
							<Button
								component="label"
								className={styles.button}
							>
								Загрузить автар
								<input
									onChange={(e) => onHandleClick(e)}
									type="file"
									accept="image/*"
									hidden
								/>
							</Button>
						</div>
					</div>
					<div className={styles.info}>
						<TextField label="ФИО" type="text" variant="outlined" />
						<TextField label="Почта" type="email" variant="outlined" />
						<TextField label="Старый пароль" type="password" variant="outlined" />
						<div className={styles.password}>
							<TextField label="Search field" type="password" variant="outlined" />
							<TextField label="Search field" type="password" variant="outlined" />
						</div>
					</div>
					<div className={styles.info}>
						<TextField label="ВУЗ" type="text" variant="outlined" />
						<TextField label="Общежитие №" type="text" variant="outlined" />
						<TextField label="Номер комнаты" type="text" variant="outlined" />
						<div className={styles.changes}>
							<Button>Сохранить изменения</Button>
						</div>
					</div>
				</div>
				<div className={styles.invite}>
					<h3>Приглашения</h3>
					<div className={styles.sendInvite}>
						<TextField
							className={styles.inputInvite}
							variant="outlined"
							type="email"
							label="Введите email"
						/>
						<Button>Отправить</Button>
					</div>
				</div>
				<div className={styles.myInvites}>
					<StatusInvites array={mockData} />
				</div>
			</div>
		</div>
	);
};

export default Profile;
