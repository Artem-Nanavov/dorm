import createAxiosShit from 'library/utils/fetch';

const api = createAxiosShit();

interface ILogin {
	email: string;
	password: string;
}

interface IReg extends ILogin {
	username: string;
}

export const loginApi = ({email, password}: ILogin) => api.post('auth/login', {email, password});

export const regApi = ({email, password, username}: IReg) => api.post('auth/reg', {email, password, username});

export const checkIsAuthApi = () => api.get('user/isAuth');

export const getMeInfoApi = () => api.get('user/me');

export const logOutApi = () => api.post('user/logout');
