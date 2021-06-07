import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {usePetitionStore} from 'main/RootStoreProvider';
import { useSnackbar } from 'notistack';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import ModalPetition from 'library/components/ModalPetition';
import styles from './petition.scss';

const s: React.CSSProperties = {
	display: 'grid',
	gridRowGap: '16px',
};

const Petition = observer(() => {
	const petitionStore = usePetitionStore();
	const { enqueueSnackbar } = useSnackbar();

	const [count, setCount] = useState(0);
	const [isOpenModal, setIsOpenModal] = useState(false);

	React.useEffect(() => {
		petitionStore.getAllPetitions();
	}, []);

	React.useEffect(() => {
		if (petitionStore.isRequestDone && petitionStore.type === 'success') {
			setIsOpenModal(false);
		}

		if (petitionStore.isRequestDone) {
			enqueueSnackbar(petitionStore.message, {variant: petitionStore.type});

			petitionStore.disableReq();
		}
	}, [petitionStore.isRequestDone]);

	const handleRemove = () => {
		setCount(count - 1);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<div className={styles.buttonSend}>
					<Button onClick={() => setIsOpenModal(true)}>Создать петицию</Button>
				</div>

				<div style={s}>
					{
						petitionStore.petitions.slice(3).map((pet) => (
							<div className={styles.petition}>
								<div className={styles.description}>
									<div className={styles.headPet}>{pet.title}</div>
									<div className={styles.descriptionPet}>{pet.text}</div>
								</div>
								<div className={styles.counter}>
									<div className={cn(styles.numberVoices, {[styles.color]: pet.likes < 0})}>
										<p>{pet.likes - pet.dislikes}</p>
									</div>
									<div className={styles.btns}>
										<div>
											<IconButton className={styles.add} onClick={() => setCount(count + 1)}>
												<AddIcon />
											</IconButton>
										</div>
										<div>
											<IconButton className={styles.remove} onClick={handleRemove}><RemoveIcon /></IconButton>
										</div>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>

			<ModalPetition handleClose={() => setIsOpenModal(false)} open={isOpenModal} />
		</div>
	);
});

export default Petition;
