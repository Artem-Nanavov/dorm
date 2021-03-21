import { RootState } from 'main';
import {connect} from 'react-redux';
import Form from '../components/form';
import {loginReqSaga, regReqSaga} from '../actions';

const mapStateToProps = (state: RootState) => ({
	isAuth: state.AuthPage.isAuth,
});

const mapDispatchToProps = ({
	loginReqSaga,
	regReqSaga,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
