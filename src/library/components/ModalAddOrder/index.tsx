import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import {useDropzone} from 'react-dropzone';
import {
	withStyles, makeStyles, createStyles,
} from '@material-ui/core/styles';
import {useOrderStore} from 'main/RootStoreProvider';
import {
	InputLabel, Select, MenuItem,
} from '@material-ui/core';
import styles from './styles.scss';

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

const thumb: React.CSSProperties = {
	display: 'inline-flex',
	borderRadius: 2,
	border: '1px solid #eaeaea',
	marginBottom: 8,
	marginRight: 8,
	width: 100,
	height: 100,
	padding: 4,
	boxSizing: 'border-box',
};

const CustomDialogActions = withStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
	},
}))(DialogActions);

const thumbsContainer: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	marginTop: 16,
};

const thumbInner: React.CSSProperties = {
	display: 'flex',
	minWidth: 0,
	overflow: 'hidden',
};

const img: React.CSSProperties = {
	display: 'block',
	width: 'auto',
	height: '100%',
};

const ModalAddOrder = ({handleClose, open}: Props) => {
	const orderStore = useOrderStore();
	const stylesMUI = useStyles();

	const [desc, setDesc] = React.useState('');
	const [title, setTitle] = React.useState('');
	const [type, setType] = React.useState<'Нашел' | 'Обмен' | 'Ищу'>('Нашел');
	const [files, setFiles] = React.useState([]);

	const {getRootProps, getInputProps} = useDropzone({
		multiple: false,
		accept: 'image/*',
		onDrop: (acceptedFiles) => {
			const arr = acceptedFiles.map((file) => Object.assign(file, {
				preview: URL.createObjectURL(file),
			}));

			setFiles(arr as any);
		},
	});

	const handleChange = (e:React.ChangeEvent<{name?: string | undefined; value: unknown;}>) => {
		setType(e.target.value as 'Нашел' | 'Обмен' | 'Ищу');
	};

	React.useEffect(() => () => {
		// Make sure to revoke the data uris to avoid memory leaks
		files.forEach((file: any) => URL.revokeObjectURL(file.preview));
	}, [files]);

	const createOrder = React.useCallback(() => {
		orderStore.createItem(title, desc, type, files);
	}, [title, desc, files, type]);

	const thumbs = files.map((file: any) => (
		<div style={thumb} key={file.name}>
			<div style={thumbInner}>
				<img
					src={file.preview}
					style={img}
					alt=""
				/>
			</div>
		</div>
	));

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<div className={stylesMUI.root}>
				<DialogTitle>Подача объявления</DialogTitle>
				<DialogContent>
					<CustomTextField
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						label="Заголовок объявления"
						variant="outlined"
					/>
				</DialogContent>
				<DialogContent>
					<CustomTextField
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
						label="Описание объявления"
						multiline
						variant="outlined"
					/>
				</DialogContent>

				<DialogContent>
					<InputLabel htmlFor="outlined-age-native-simple">Тип объявления</InputLabel>
					<Select
						labelId="outlined-age-native-simple"
						fullWidth
						variant="outlined"
						value={type}
						onChange={handleChange}
						defaultValue={type}
						id="outlined-age-native-simple"
					>
						<MenuItem value="Нашел">Нашел</MenuItem>
						<MenuItem value="Обмен">Обмен</MenuItem>
						<MenuItem value="Ищу">Ищу</MenuItem>
					</Select>
				</DialogContent>

				<DialogContent>
					<section className="container">
						<div {...getRootProps({className: styles.form__imageUploader})}>
							<input {...getInputProps()} />
							<p>Drag &lsquo;n&lsquo; drop some files here, or click to select files</p>
						</div>
						<aside style={thumbsContainer}>
							{thumbs}
						</aside>
					</section>
				</DialogContent>

				<CustomDialogActions>
					<CustomButton onClick={createOrder} color="primary">
						Опубликовать
					</CustomButton>
				</CustomDialogActions>
			</div>
		</Dialog>
	);
};

export default ModalAddOrder;
