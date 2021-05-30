import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { useSnackbar } from 'notistack';
// import { useRootStore } from 'main/RootStoreProvider';

interface Props {
	array: any
}

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const GreenButton = withStyles({
	root: {
		background: 'white',
		textTransform: 'none',
		borderColor: '#98D4A9',
		color: '#118632',
	},
})(Button);

const RedButton = withStyles({
	root: {
		background: 'white',
		textTransform: 'none',
		borderColor: '#C42C0B',
		color: '#C67373',
	},
	'&hover': {
		borderColor: '#C42C0B',
		background: 'white',
	},
})(Button);

const StatusInvites = ({array}: Props) => {
	const classes = useStyles();
	const { enqueueSnackbar } = useSnackbar();
	const [click, setClick] = React.useState(0);
	// const rootStore = useRootStore();

	const handleClick = () => {
		setClick(click + 1);
	};

	React.useEffect(() => {
		if (click % 5 === 0) {
			enqueueSnackbar('ты думаешь, что меня трахнешь', {variant: 'info'});
		}
	}, [click]);

	const options = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		timezone: 'UTC',
	};
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell>Email</TableCell>
						<TableCell align="center">Дата отпраки</TableCell>
						<TableCell align="center">Статус</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{array.map((row: any) => (
						<TableRow key={row.id}>
							<TableCell component="th" scope="row">
								{row.email}
							</TableCell>
							<TableCell align="center">{row.date.toLocaleString('ru', options)}</TableCell>
							<TableCell align="center">
								{
									row.status
										? <GreenButton onClick={handleClick} variant="outlined">Принято</GreenButton>
										: <RedButton onClick={handleClick} variant="outlined">Отправлено</RedButton>
								}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default StatusInvites;
