import React, {useState, useEffect, useCallback} from 'react';
import './style.css';


interface Reg {
	loginReqSaga: (pws: string, email: string) => void,
	regReqSaga: (pws: string, email: string, username: string) => void,
}

const Form = ({
	loginReqSaga,
	regReqSaga,
}: Reg) => {
	const [isReg, setIsReg] = useState(true);

	const [email, setEmail] = useState('');
	const [pws, setPws] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [isDisabledBtn, setIsDisabledBtn] = useState(true);

	useEffect(() => {
		setIsDisabledBtn(pws.trim().length < 6 || email.trim().length < 5);
	}, [pws, email]);

	const loginHandler = useCallback(() => {
		if (isDisabledBtn) return;

		try {
			if (!isReg) { regReqSaga(email, pws, `${firstName} ${lastName}`);
			} else {
				loginReqSaga(email, pws);
			}
		} catch (e) {
			console.log('e', e.message);

			alert('Error');
		}
	}, [email, pws, isDisabledBtn, firstName, lastName, isReg]);

	return (

			<div className={styles.loginForm__fields}>
				{
					
export default Reg;
