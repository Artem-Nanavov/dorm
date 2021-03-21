import { RootState } from 'main';
import {connect} from 'react-redux';
import AuthPage from '../index';

const mapStateToProps = (state: RootState) => ({
	isAuth: state.AuthPage.isAuth,
});

const mapDispatchToProps = ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
