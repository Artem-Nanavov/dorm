import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import {
	withStyles, makeStyles, createStyles,
} from '@material-ui/core/styles';
import {usePetitionStore} from 'main/RootStoreProvider';

interface Props {
	handleClose: any,
	open: any
}

const useStyles = makeStyles(() => createStyles({
	root: {
		padding: '20px',
	},
}));

const CustomTextField = withStyles(() => ({
	root: {
		width: '360px',
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#DBE2EA',
			},
			'&:hover fieldset': {
				borderColor: '#DBE2EA',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#DBE2EA',
			},
		},
	},
}))(TextField);

const CustomButton = withStyles(() => ({
	root: {
		background: '#FFED00',
		textTransform: 'none',
		color: 'black',
		width: '360px',
		height: '50px',
		fontSize: '15px',
		fontWeight: 300,
	},
}))(Button);

const CustomDialogActions = withStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
	},
}))(DialogActions);

const ModalPetition = ({handleClose, open}: Props) => {
	const petitionStore = usePetitionStore();

	const [desc, setDesc] = React.useState('');
	const [title, setTitle] = React.useState('');

	const createPetition = React.useCallback(() => {
		petitionStore.createPet(title, desc);
	}, [desc, title]);

	const styles = useStyles();
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<div className={styles.root}>
				<DialogTitle>Подача петициие</DialogTitle>
				<DialogContent>
					<CustomTextField
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						label="Заголовок петиции"
						variant="outlined"
					/>
				</DialogContent>
				<DialogContent>
					<CustomTextField
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
						label="Описание петиции"
						multiline
						variant="outlined"
					/>
				</DialogContent>
				<CustomDialogActions>
					<CustomButton onClick={createPetition} color="primary">
						Подать
					</CustomButton>
				</CustomDialogActions>
			</div>
		</Dialog>
	);
};

export default ModalPetition;
